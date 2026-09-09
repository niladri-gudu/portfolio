export const GUESTBOOK_LIMITS = {
  nameMax: 50,
  messageMax: 280,
  pageSize: 10,
} as const;

export function validateGuestbookInput(input: { name?: unknown; message?: unknown }): {
  ok: boolean;
  error?: string;
  name?: string;
  message?: string;
} {
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (!name || !message) {
    return { ok: false, error: "Name and message are required" };
  }

  if (name.length > GUESTBOOK_LIMITS.nameMax || message.length > GUESTBOOK_LIMITS.messageMax) {
    return {
      ok: false,
      error: `Name max ${GUESTBOOK_LIMITS.nameMax} chars, message max ${GUESTBOOK_LIMITS.messageMax} chars`,
    };
  }

  return { ok: true, name, message };
}
