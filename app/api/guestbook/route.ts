import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = 10;
  const skip = (page - 1) * limit;

  const [entries, total] = await Promise.all([
    prisma.guestbookEntry.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
      skip,
    }),
    prisma.guestbookEntry.count(),
  ]);

  return NextResponse.json({
    entries,
    total,
    hasMore: skip + entries.length < total,
  });
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