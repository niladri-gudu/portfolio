import { NextRequest, NextResponse } from "next/server";
import { listGuestbookEntries, createGuestbookEntry } from "@/features/guestbook/lib/server";
import { validateGuestbookInput } from "@/features/guestbook/lib/validation";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") ?? "1");

  const result = await listGuestbookEntries(Number.isNaN(page) ? 1 : page);

  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validated = validateGuestbookInput(body);

  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const entry = await createGuestbookEntry({
    name: validated.name!,
    message: validated.message!,
  });

  return NextResponse.json(entry, { status: 201 });
}