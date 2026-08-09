import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const adminKey = req.headers.get("x-admin-key");
    if (adminKey !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json().catch(() => ({}));
    const reply = typeof body.reply === "string" ? body.reply.trim() : "";

    if (reply.length > 280) {
      return NextResponse.json(
        { error: "Reply max 280 chars" },
        { status: 400 },
      );
    }

    const entry = await prisma.guestbookEntry.update({
      where: { id },
      data: { reply: reply || null },
    });

    return NextResponse.json({ reply: entry.reply });
  } catch (err) {
    console.error("Reply error:", err);
    return NextResponse.json({ error: "Failed to reply" }, { status: 500 });
  }
}