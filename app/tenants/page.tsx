import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Tenants | Rent Worx Property Management",
  description:
    "Tenant services & resources from Rent Worx — safe, compliant, well-maintained Auckland rentals, prompt maintenance, and helpful resident resources.",
};

const whyRent: { title: string; text: string; svg: React.ReactNode }[] = [
  { title: "Healthy Homes", text: "Every property is audited to ensure it is warm, dry, and fully compliant.", svg: (<><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>) },
  { title: "Rapid Response", text: "We resolve maintenance logs quickly so your home stays in top shape.", svg: (<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />) },
  { title: "Support", text: "Residents benefit from an emergency dispatch line for urgent issues.", svg: (<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />) },
  { title: "Simple Processes", text: "Manage your tenancy effortlessly via our transparent online portal.", svg: (<><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></>) },
];

const resources: { title: string; svg: React.ReactNode; links: { label: string; href: string }[] }[] = [
  {
    title: "Rights & Legal",
    svg: (<><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></>),
    links: [
      { label: "Tenancy Services NZ ↗", href: "https://www.tenancy.govt.nz/" },
      { label: "Community Law Centres ↗", href: "https://communitylaw.org.nz/" },
      { label: "Citizens Advice Bureau ↗", href: "https://www.cab.org.nz/" },
    ],
  },
  {
    title: "Advocacy & Disputes",
    svg: (<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />),
    links: [
      { label: "Tenancy Tribunal ↗", href: "https://www.tenancy.govt.nz/disputes/tribunal/" },
      { label: "Renters United Advocacy ↗", href: "https://rentersunited.org.nz/" },
      { label: "CAB Financial Advice ↗", href: "https://www.cab.org.nz/" },
    ],
  },
  {
    title: "Logistics",
    svg: (<><circle cx="12" cy="12" r="10" /><polyline points="12 16 16 12 12 8" /><line x1="8" y1="12" x2="16" y2="12" /></>),
    links: [
      { label: "NZTA – Vehicles ↗", href: "https://www.nzta.govt.nz/" },
      { label: "NZ Post – Address Change ↗", href: "https://www.nzpost.co.nz/" },
      { label: "Salvation Army Support ↗", href: "https://www.salvationarmy.org.nz/" },
    ],
  },
  {
    title: "Search Portals",
    svg: (<><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>),
    links: [
      { label: "Trade Me Rentals ↗", href: "https://www.trademe.co.nz/a/property/residential/rent" },
      { label: "Real Estate NZ ↗", href: "https://www.realestate.co.nz/residential/rental" },
      { label: "Kāinga Ora ↗", href: "https://kaingaora.govt.nz/" },
    ],
  },
  {
    title: "Community",
    svg: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>),
    links: [
      { label: "Rubbish Collection Days ↗", href: "https://www.aucklandcouncil.govt.nz/en/rubbish-recycling/rubbish-recycling-collections/rubbish-recycling-collection-days.html" },
      { label: "Get Connected Easily ↗", href: "https://www.fastconnect.co.nz/applications/apply_now" },
      { label: "Local Council Services ↗", href: "https://www.aucklandcouncil.govt.nz" },
    ],
  },
];

const faqs: FaqItem[] = [
  { q: "HOW DO I APPLY?", a: (<>An application form is available by clicking <Link href="/rentals" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>here</Link>. Note each applicant is subject to a background and credit check.</>) },
  { q: "WHAT ARE YOUR MOVE IN COST?", a: "On approval, every tenant is required to pay a four week bond and two week's rent in advance, unless stated otherwise in advertising." },
  { q: "HOW OFTEN DO YOU DO INSPECTION?", a: "We will inspect your home each quarter, unless otherwise stated by the property owner. All inspections and property access is done in accordance with the Residential Tenancies Act." },
  { q: "I WORK FULL TIME, HOW CAN I VIEW PROPERTY?", a: "We are available for viewings by appointment to suit." },
  { q: "WHAT NOTICE DO I HAVE TO GIVE TO LEAVE MY TENANCY?", a: "If you are on a periodic tenancy, the required notice is 21 days and must be provided in writing. Please note that legal service times apply. A vacate notice template is available in our forms section OR Tenancy Services provides an official template for this exact scenario." },
  { q: "I NEED SOMETHING FIXED", a: "Please contact us via email for all non-urgent maintenance. For urgent maintenance, please call and text." },
];

export default function TenantsPage() {
  return (
    <>
      <PageBanner image="/media/tenant/tenant-banner.avif" title="Tenant Services & Resources" subtitle="Prompt support, transparent communication, and verified compliant rentals." />

      <div className="container section-pad">
        <div className="split-row" style={{ marginBottom: "5rem" }}>
          <div className="split-text" style={{ flex: 1.3 }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Welcome to Your Next Home</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              We connect quality residents with safe, compliant, and well-maintained properties built on mutual respect and open communication. With Rent Worx, you get a dedicated team that values your peace of mind.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Our processes are simple, stress-free, and we are always just a phone call away to ensure your renting experience is smooth from start to finish.
            </p>
          </div>
          <div className="fade-img-wrapper" style={{ flex: 1, alignSelf: "stretch" }}>
            <Image src="/media/tenant/tenant-welcome.avif" alt="Welcome to Your Next Home" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div className="split-row reverse" style={{ marginBottom: "5rem" }}>
          <div className="split-text" style={{ flex: 1.3 }}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--accent-gold)" }}>Why Rent With Us:</h3>
            <div className="two-by-two-grid">
              {whyRent.map((c) => (
                <div className="tilt-card" key={c.title} style={{ padding: "1.5rem" }}>
                  <svg width="30" height="30" stroke="var(--accent-gold)" fill="none" strokeWidth="1.5" style={{ marginBottom: "0.5rem" }} viewBox="0 0 24 24">
                    {c.svg}
                  </svg>
                  <h4 style={{ marginBottom: "0.2rem" }}>{c.title}</h4>
                  <p style={{ fontSize: "0.85rem" }}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-img-wrapper" style={{ flex: 1, alignSelf: "stretch" }}>
            <Image src="/media/tenant/tenant-why.avif" alt="Why Rent With Us" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>Essential Resident Resources</h2>
          <div className="five-col-grid">
            {resources.map((r) => (
              <div className="useful-link-category tilt-card" key={r.title} style={{ padding: "1.5rem" }}>
                <svg width="30" height="30" stroke="var(--accent-gold)" fill="none" strokeWidth="1.5" style={{ marginBottom: "1rem" }} viewBox="0 0 24 24">
                  {r.svg}
                </svg>
                <h4 style={{ marginBottom: "1rem", color: "var(--accent-gold)" }}>{r.title}</h4>
                {r.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-secondary)", fontSize: "0.85rem", fontWeight: 500 }}>
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "6rem auto 0" }}>
          <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "1rem" }}>Renting with Rent Worx</h2>
          <p className="text-center" style={{ color: "var(--accent-gold)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "3rem" }}>Tenant FAQ</p>
          <FaqAccordion items={faqs} />
        </div>
      </div>

      <CtaBanner image="/media/tenant/tenant-cta.avif" title="Looking for a new home?" text="Browse our active Auckland listings." button={{ href: "/rentals", label: "Browse Available Rentals" }} />
    </>
  );
}
