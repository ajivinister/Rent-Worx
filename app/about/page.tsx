import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Rent Worx Property Management",
  description:
    "The Rent Worx story. Led by Rajiv Kumar, a boutique Auckland property management team with 20+ years in real estate — dedicated, bilingual, and entirely all-in.",
};

const reasonsA = [
  { n: 1, title: "Focused Management:", text: " Our focus is entirely on managing rental properties and supporting landlords and tenants." },
  { n: 2, title: "Exhaustive Tenant Screening:", text: " Complete identity, credit, reference, affordability, and Tenancy Tribunal records checked for every adult applicant." },
  { n: 3, title: "Zero-Tolerance Arrears Policy:", text: " Automated tracking systems monitor rent payments daily, ensuring immediate intervention and rapid legal notices upon default." },
];
const reasonsB = [
  { n: 4, title: "Photographic Condition Audits:", text: " Comprehensive routine inspections delivered directly to your inbox with clear property recommendations." },
  { n: 5, title: "Statutory Compliance:", text: " Continuous Healthy Homes standards and Residential Tenancies Act tracking to protect owners from expensive tribunal liabilities." },
  { n: 6, title: "Localized Market Expertise:", text: " Specialized, on-the-ground property management across Auckland communities." },
];

function ReasonCard({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="reason-long-card">
      <span className="faded-num">{n}</span>
      <p style={{ position: "relative", zIndex: 2, margin: 0, fontSize: "1.1rem", lineHeight: 1.6 }}>
        <strong>{title}</strong>
        {text}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageBanner image="/media/about/about-banner.avif" title="The Rent Worx Story" subtitle="Dedicated Operational Focus" />

      <div className="container section-pad">
        <div className="split-row" style={{ marginBottom: "3rem" }}>
          <div className="split-text" style={{ flex: 1.2 }}>
            <h2 style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>About Rajiv &amp; Rent Worx</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Led by Rajiv Kumar, Rent Worx was founded on a simple but powerful philosophy: residential property management demands absolute, dedicated operational focus.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              A name synonymous with the Auckland real estate industry, Rajiv launched Rent Worx to elevate the standards of traditional property management. We believe that looking after an investment property shouldn&apos;t be a sideline service—it requires a boutique team that is entirely all-in.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: 0 }}>
              <strong>Language spoken by Rajiv: English, Hindi, Punjabi</strong>
            </p>
          </div>

          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", alignSelf: "stretch" }}>
            <div className="rajiv-hero-box float-anim">
              <Image src="/media/about/Rentworx_Rajiv.avif" alt="Rajiv Kumar - Rent Worx" fill sizes="380px" style={{ objectFit: "cover", borderRadius: "inherit" }} />
              <div className="floating-badge">
                <div className="badge-icon">✦</div>
                <div className="badge-text">
                  <strong>20+yrs</strong>
                  <span>in Real Estate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="two-col-grid" style={{ marginBottom: "5rem" }}>
          <div className="tilt-card" style={{ borderTop: "4px solid var(--accent-gold)" }}>
            <svg width="30" height="30" stroke="var(--accent-gold)" fill="none" strokeWidth="1.5" style={{ marginBottom: "0.5rem" }} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
            </svg>
            <h4 style={{ marginBottom: "0.3rem" }}>Our Vision</h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>We protect your portfolio by focusing fiercely on core pillars that ensure long-term stability and high yields.</p>
          </div>
          <div className="tilt-card" style={{ borderTop: "4px solid var(--accent-primary)" }}>
            <svg width="30" height="30" stroke="var(--accent-primary)" fill="none" strokeWidth="1.5" style={{ marginBottom: "0.5rem" }} viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h4 style={{ marginBottom: "0.3rem", color: "var(--accent-primary)" }}>Our Mission</h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>At Rent Worx, we don&apos;t just oversee rentals—we partner with you to make sure your investments genuinely thrive.</p>
          </div>
        </div>

        <div className="section-pad" style={{ paddingTop: 0 }}>
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h2 style={{ fontSize: "2.5rem", color: "var(--accent-gold)" }}>Reasons Landlords Choose Rent Worx</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>Six operational commitments that set our management apart.</p>
          </div>

          <div className="split-row" style={{ alignItems: "center", marginBottom: "3rem" }}>
            <div className="reasons-list" style={{ flex: 2 }}>
              {reasonsA.map((r) => (
                <ReasonCard key={r.n} {...r} />
              ))}
            </div>
            <div className="fade-img-wrapper" style={{ flex: 1 }}>
              <Image src="/media/about/about-reason1.avif" alt="Property Management Focus" fill sizes="(max-width: 1024px) 100vw, 33vw" style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="split-row reverse" style={{ alignItems: "center" }}>
            <div className="reasons-list" style={{ flex: 2 }}>
              {reasonsB.map((r) => (
                <ReasonCard key={r.n} {...r} />
              ))}
            </div>
            <div className="fade-img-wrapper" style={{ flex: 1 }}>
              <Image src="/media/about/about-reason2.avif" alt="Auckland Local Expertise" fill sizes="(max-width: 1024px) 100vw, 33vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>

      <CtaBanner image="/media/about/about-cta.avif" title="Our Absolute Commitment" text="We treat every managed residence as a cornerstone financial asset. Through transparent accounting and continuous compliance, we protect your peace of mind." button={{ href: "/contact", label: "Get in touch" }} />
    </>
  );
}
