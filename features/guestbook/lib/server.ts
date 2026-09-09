import { prisma } from "@/lib/prisma";
import { GUESTBOOK_LIMITS } from "./validation";

export async function listGuestbookEntries(page = 1) {
  const limit = GUESTBOOK_LIMITS.pageSize;
  const skip = (page - 1) * limit;

  const [entries, total] = await Promise.all([
    prisma.guestbookEntry.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
      skip,
    }),
    prisma.guestbookEntry.count(),
  ]);

  return {
    entries,
    total,
    hasMore: skip + entries.length < total,
  };
}

export async function createGuestbookEntry(input: { name: string; message: string }) {
  return prisma.guestbookEntry.create({
    data: { name: input.name, message: input.message },
  });
}
