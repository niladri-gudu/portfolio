/**
 * One-off helper: re-authorize with Spotify and print a fresh refresh token.
 *
 * Spotify now expires refresh tokens 6 months after authorization, so re-run
 * this whenever the now-playing widget goes dark with "invalid_grant".
 *
 * Before the first run, add this Redirect URI to your app at
 * https://developer.spotify.com/dashboard (Settings -> Redirect URIs):
 *   http://127.0.0.1:8888/callback
 *
 * Usage: node scripts/spotify-refresh-token.mjs
 */
import http from "node:http";
import { exec } from "node:child_process";
import { readFileSync } from "node:fs";

const PORT = 8888;
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;
const SCOPES = ["user-read-currently-playing", "user-read-recently-played"];

function loadEnv(path) {
  const env = {};
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (match) env[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, "");
  }
  return env;
}

const env = { ...loadEnv(".env"), ...process.env };
const clientId = env.SPOTIFY_CLIENT_ID;
const clientSecret = env.SPOTIFY_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error("Missing SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET in .env");
  process.exit(1);
}

const authorizeUrl = new URL("https://accounts.spotify.com/authorize");
authorizeUrl.searchParams.set("client_id", clientId);
authorizeUrl.searchParams.set("response_type", "code");
authorizeUrl.searchParams.set("redirect_uri", REDIRECT_URI);
authorizeUrl.searchParams.set("scope", SCOPES.join(" "));
authorizeUrl.searchParams.set("show_dialog", "true");

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  if (url.pathname !== "/callback") {
    res.writeHead(404).end();
    return;
  }

  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error || !code) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end(`Authorization failed: ${error ?? "no code returned"}`);
    console.error(`\nAuthorization failed: ${error ?? "no code returned"}`);
    server.close(() => process.exit(1));
    return;
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const data = await tokenRes.json().catch(() => null);

  if (!tokenRes.ok || !data?.refresh_token) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Token exchange failed - check the terminal.");
    console.error("\nToken exchange failed:", data);
    server.close(() => process.exit(1));
    return;
  }

  const check = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    { headers: { Authorization: `Bearer ${data.access_token}` } },
  );
  const scopeOk = check.status === 200 || check.status === 204;

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Authorized! New refresh token printed in your terminal.");

  console.log("\n=== New SPOTIFY_REFRESH_TOKEN ===\n");
  console.log(data.refresh_token);
  console.log(
    `\nScope check: ${scopeOk ? "OK (API accepted the token)" : `unexpected status ${check.status}`}`,
  );
  console.log(
    "\n1. Replace SPOTIFY_REFRESH_TOKEN in .env\n2. Update it in your deploy env (Vercel etc.)\n3. Restart dev / redeploy",
  );
  server.close(() => process.exit(0));
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("Waiting for authorization in the browser...\n");
  console.log(authorizeUrl.toString());
  console.log("");
  const cmd =
    process.platform === "win32"
      ? `start "" "${authorizeUrl}"`
      : process.platform === "darwin"
        ? `open "${authorizeUrl}"`
        : `xdg-open "${authorizeUrl}"`;
  exec(cmd, (err) => {
    if (err) console.log("Could not open browser automatically - open the URL above manually.");
  });
});
