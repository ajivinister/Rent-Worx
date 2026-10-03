// =============================================================
// MRI Palace integration (Phase 2) — the SINGLE SOURCE OF TRUTH.
//
// Per Migration&Integrations.docx: a backend sync pipeline fetches ACTIVE
// rental properties from the MRI Palace API and caches them in PostgreSQL for
// fast frontend querying. We do NOT build a standalone CMS. The sync route
// (app/api/sync/palace/route.ts) calls fetchActivePalaceListings() and upserts
// the results via Prisma.
//
// STUB until MRI Palace API credentials + docs are provided. Server-only.
// =============================================================

// Normalised record shape used to upsert into the Property cache table.
export type PalaceSyncRecord = {
  externalId: string;
  title: string;
  city: string;
  suburb: string;
  price: number;
  beds: number;
  baths: number;
  carparks: number;
  status: "Available" | "Rented";
  availableDate?: string | null;
  images: string[];
};

const BASE = process.env.PALACE_API_BASE;
const KEY = process.env.PALACE_API_KEY;

export function isPalaceConfigured(): boolean {
  return Boolean(BASE && KEY);
}

export async function fetchActivePalaceListings(): Promise<PalaceSyncRecord[]> {
  if (!isPalaceConfigured()) {
    throw new Error(
      "MRI Palace not configured — set PALACE_API_BASE and PALACE_API_KEY."
    );
  }

  // TODO(Phase 2): implement against the real MRI Palace API once docs arrive.
  // Expected shape:
  //   const res = await fetch(`${BASE}/properties?status=active`, {
  //     headers: { Authorization: `Bearer ${KEY}`, Accept: "application/json" },
  //     cache: "no-store",
  //   });
  //   if (!res.ok) throw new Error(`Palace API ${res.status}`);
  //   const data = await res.json();
  //   return data.items.map(mapPalaceToRecord);
  throw new Error("MRI Palace fetch not implemented — awaiting API documentation.");
}
