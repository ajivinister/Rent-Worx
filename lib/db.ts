// Prisma client singleton. Returns null when DATABASE_URL is not configured,
// so the app runs on seed data (Phase 1) until the PostgreSQL cache is
// provisioned (Phase 2). Server-only — never import from a client component.
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export function getPrisma(): PrismaClient | null {
  if (!process.env.DATABASE_URL) return null;
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }
  return globalForPrisma.prisma;
}
