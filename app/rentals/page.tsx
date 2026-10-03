import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PropertyGrid from "@/components/rentals/PropertyGrid";
import RentalCarousel from "@/components/rentals/RentalCarousel";
import { getProperties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Rent / Viewings | Rent Worx Property Management",
  description:
    "Browse available rental properties across Auckland managed by Rent Worx, or explore more listings on Trade Me. Filter by city, bedrooms and weekly rent.",
};

// SSR so listings reflect the live MRI Palace-synced data (Phase 2).
export const dynamic = "force-dynamic";

const tradeMe = [
  { label: "Studio", href: "https://www.trademe.co.nz/a/property/residential/rent/auckland/search?bedrooms_min=0" },
  { label: "1 Bedroom", href: "https://www.trademe.co.nz/a/property/residential/rent/auckland/search?bedrooms_min=1" },
  { label: "2 Bedrooms", href: "https://www.trademe.co.nz/a/property/residential/rent/auckland/search?bedrooms_min=2" },
  { label: "3 Bedrooms", href: "https://www.trademe.co.nz/a/property/residential/rent/auckland/search?bedrooms_min=3" },
  { label: "3+ Bedrooms", href: "https://www.trademe.co.nz/a/property/residential/rent/auckland/search?bedrooms_min=4&bedrooms_max=6&sort_order=expirydesc" },
];

export default async function RentalsPage() {
  const properties = await getProperties();

  return (
    <>
      <div className="page-banner" style={{ padding: 0, overflow: "hidden" }}>
        <RentalCarousel />
        <div className="glass-text-box" style={{ position: "relative", zIndex: 2 }}>
          <h1>Available Rentals</h1>
          <p>Find your perfect home across Auckland.</p>
        </div>
      </div>

      <div className="container section-pad">
        <PropertyGrid properties={properties} />

        {/* Trade Me syndication — prefiltered external searches (open in new tab). */}
        <div style={{ marginTop: "5rem", borderTop: "2px solid var(--glass-border)", paddingTop: "4rem" }}>
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>More Listings on Trade Me</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 650, margin: "0 auto" }}>
              Looking for other configurations? Browse active Trade Me Auckland rentals by room requirement.
            </p>
          </div>
          <div className="five-col-grid">
            {tradeMe.map((t) => (
              <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer" className="anim-card text-center">
                <h4>{t.label}</h4>
                <p style={{ color: "var(--accent-gold)", fontWeight: 600, fontSize: "0.85rem" }}>Browse on Trade Me ↗</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner image="/media/rentals/rental-cta.avif" title="Can't find what you're looking for?" text="Contact our leasing agents for upcoming unlisted homes." button={{ href: "/contact", label: "Contact Us" }} />
    </>
  );
}
