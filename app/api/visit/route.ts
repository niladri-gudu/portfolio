import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function getGeo(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country") ?? "UNKNOWN";
  const region = req.headers.get("x-vercel-ip-country-region") ?? "UNKNOWN";
  const city = req.headers.get("x-vercel-ip-city") ?? "UNKNOWN";
  return { country, region, city };
}

export async function POST(req: NextRequest) {
  try {
    const { country, region, city } = getGeo(req);

    const userAgent = req.headers.get("user-agent");
    const referer = req.headers.get("referer");
    
    const last = await prisma.visitLog.findFirst({
      where: {
        country,
        region,
        city,
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
