// =============================================================
// Property data layer — the single seam Phase 2 plugs into.
//
// Phase 1: returns the 3 real seed listings below.
// Phase 2 (per Migration&Integrations.docx): replace the body of
// getProperties() with a query against the PostgreSQL cache that the
// MRI Palace sync pipeline populates. Keep this signature so the
// Rent/Viewing page (and filters) need no changes.
// =============================================================

import { getPrisma } from "./db";

export type Property = {
  id: number;
  title: string;
  city: string;
  suburb: string;
  price: number;
  beds: number;
  baths: number;
  carparks: number;
  status: "Rented" | "Available";
  date?: string;
  img: string;
  gallery: string[];
};

const SEED: Property[] = [
  {
    id: 1,
    title: "David Ave",
    city: "All",
    suburb: "Hillpark",
    price: 900,
    beds: 3,
    baths: 2,
    carparks: 2,
    status: "Rented",
    img: "/media/rentals/rent-David ave Hillpark-1.avif",
    gallery: [
      "/media/rentals/rent-David ave Hillpark-1.avif",
      "/media/rentals/rent-David ave Hillpark-2.avif",
      "/media/rentals/rent-David ave Hillpark-3.avif",
    ],
  },
  {
    id: 2,
    title: "Karoro Rd",
    city: "All",
    suburb: "Flat Bush",
    price: 715,
    beds: 3,
    baths: 2,
    carparks: 1,
    status: "Rented",
    img: "/media/rentals/rent-Karoro Rd , Flat Bush-1.avif",
    gallery: [
      "/media/rentals/rent-Karoro Rd , Flat Bush-1.avif",
      "/media/rentals/rent-Karoro Rd , Flat Bush-2.avif",
      "/media/rentals/rent-Karoro Rd , Flat Bush-3.avif",
      "/media/rentals/rent-Karoro Rd , Flat Bush-4.avif",
      "/media/rentals/rent-Karoro Rd , Flat Bush-5.avif",
      "/media/rentals/rent-Karoro Rd , Flat Bush-6.avif",
      "/media/rentals/rent-Karoro Rd , Flat Bush-7.avif",
    ],
  },
  {
    id: 3,
    title: "Dignity Street",
    city: "All",
    suburb: "Papakura",
    price: 640,
    beds: 2,
    baths: 1,
    carparks: 1,
    status: "Rented",
    img: "/media/rentals/rent-Dignity Street, Papakura-1.avif",
    gallery: ["/media/rentals/rent-Dignity Street, Papakura-1.avif"],
  },
];

export async function getProperties(): Promise<Property[]> {
  // Phase 2: query the MRI Palace-synced PostgreSQL cache when configured.
  // Falls back to the Phase 1 seed data when the DB is unset or unreachable,
  // so the site always renders.
  const prisma = getPrisma();
  if (prisma) {
    try {
      const rows = await prisma.property.findMany({
        where: { active: true },
        orderBy: { price: "asc" },
      });
      if (rows.length > 0) {
        return rows.map((r) => ({
          id: r.id,
          title: r.title,
          city: r.city,
          suburb: r.suburb,
          price: r.price,
          beds: r.beds,
          baths: r.baths,
          carparks: r.carparks,
          status: r.status === "Rented" ? "Rented" : "Available",
          date: r.availableDate ?? undefined,
          img: r.images[0] ?? "",
          gallery: r.images,
        }));
      }
    } catch (err) {
      console.error("[getProperties] DB query failed, using seed data:", err);
    }
  }
  return SEED;
}
