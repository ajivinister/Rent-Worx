// =============================================================
// POST/GET /api/sync/palace  — MRI Palace → PostgreSQL sync pipeline (Phase 2).
//
// Pulls ACTIVE listings from MRI Palace and upserts them into the Property
// cache, marking anything no longer returned as inactive. Intended to be
// triggered by a scheduled cron (e.g. Vercel Cron) or an MRI Palace webhook.
//
// Secured with the SYNC_SECRET header so it can't be invoked publicly.
// Returns 503 (not an error) until the DB + Palace credentials are configured,
// so deploying this route before Phase 2 go-live is safe.
// =============================================================
import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";
import { fetchActivePalaceListings, isPalaceConfigured } from "@/lib/palace";

export const dynamic = "force-dynamic";

async function handler(req: Request) {
  const secret = process.env.SYNC_SECRET;
  const provided = req.headers.get("x-sync-secret") ?? new URL(req.url).searchParams.get("secret");
  if (!secret || provided !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const prisma = getPrisma();
  if (!prisma) {
    return NextResponse.json({ error: "Database not configured (set DATABASE_URL)." }, { status: 503 });
  }
  if (!isPalaceConfigured()) {
    return NextResponse.json({ error: "MRI Palace not configured (set PALACE_API_BASE and PALACE_API_KEY)." }, { status: 503 });
  }

  try {
    const records = await fetchActivePalaceListings();
    const seenIds: string[] = [];

    for (const r of records) {
      seenIds.push(r.externalId);
      await prisma.property.upsert({
        where: { externalId: r.externalId },
        create: {
          externalId: r.externalId,
          title: r.title,
          city: r.city,
          suburb: r.suburb,
          price: r.price,
          beds: r.beds,
          baths: r.baths,
          carparks: r.carparks,
          status: r.status,
          availableDate: r.availableDate ?? null,
          images: r.images,
          active: true,
          syncedAt: new Date(),
        },
        update: {
          title: r.title,
          city: r.city,
          suburb: r.suburb,
          price: r.price,
          beds: r.beds,
          baths: r.baths,
          carparks: r.carparks,
          status: r.status,
          availableDate: r.availableDate ?? null,
          images: r.images,
          active: true,
          syncedAt: new Date(),
        },
      });
    }

    // Anything not in this sync is no longer an active Palace listing.
    const deactivated = await prisma.property.updateMany({
      where: { externalId: { notIn: seenIds }, active: true },
      data: { active: false },
    });

    return NextResponse.json({
      ok: true,
      synced: records.length,
      deactivated: deactivated.count,
      at: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[sync/palace] failed:", err);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export { handler as GET, handler as POST };
