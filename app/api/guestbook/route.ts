import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const entries = await prisma.guestbookEntry.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(entries);
}

export async function POST(req: NextRequest) {
  const { name, message } = await req.json();

  if (!name?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name and message are required" },
      { status: 400 }
    );
  }

  if (name.length > 50 || message.length > 280) {
    return NextResponse.json(
      { error: "Name max 50 chars, message max 280 chars" },
      { status: 400 }
    );
  }

  const entry = await prisma.guestbookEntry.create({
    data: { name: name.trim(), message: message.trim() },
  });

  return NextResponse.json(entry, { status: 201 });
}