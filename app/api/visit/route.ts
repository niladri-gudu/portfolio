import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function getGeo(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country") ?? "UNKNOWN";
  const region = req.headers.get("x-vercel-ip-country-region") ?? "UNKNOWN";
  const city = req.headers.get("x-vercel-ip-city") ?? "UNKNOWN";

  return { country, region, city };
}

function safeString(val: unknown, fallback = "/") {
  if (typeof val !== "string") return fallback;
  const trimmed = val.trim();
  return trimmed.length ? trimmed : fallback;
}

export async function POST(req: NextRequest) {
  try {
    const { country, region, city } = getGeo(req);

    const userAgent = req.headers.get("user-agent");
    const referer = req.headers.get("referer");

    // Body is optional (we send pathname from frontend)
    const body = await req.json().catch(() => ({}));
    const pathname = safeString(body?.pathname, "/");

    /**
     * ✅ Anti spam:
     * If same visit (same geo + ua + path) happened in last 20s,
     * skip insert.
     *
     * This prevents log explosion due to React strict mode / refreshes.
     */
    const last = await prisma.visitLog.findFirst({
      where: {
        country,
        region,
        city,
        pathname,
        userAgent: userAgent ?? null,
      },
      orderBy: { createdAt: "desc" },
    });

    if (last && Date.now() - last.createdAt.getTime() < 20_000) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    await prisma.visitLog.create({
      data: {
        country,
        region,
        city,
        pathname,
        referer: referer ?? null,
        userAgent: userAgent ?? null,
      },
    });

    return NextResponse.json({ ok: true, country, region, city });
  } catch (err) {
    console.error("Visit log error:", err);
    return NextResponse.json(
      { ok: false, message: "Failed to log visit" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return POST(req);
}
