import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Services | Rent Worx Property Management",
  description:
    "Full-spectrum Auckland property management services: rent collection, tenant screening, inspections, repairs, marketing, meth testing, financial support and Tenancy Tribunal support.",
};

const services: { title: string; text: string; img: string; alt: string; svg: React.ReactNode }[] = [
  { title: "Rent Collection", text: "We manage rent collection and monitor payments closely, helping ensure rent is received on time and keeping you informed of any issues.", img: "/media/services/service-rent.avif", alt: "Rent Collection", svg: (<><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>) },
  { title: "Tenant Screening", text: "Finding the right tenant matters. We carry out a thorough application and screening process, including appropriate reference and background checks, to help identify suitable tenants for your property.", img: "/media/services/service-screening.avif", alt: "Tenant Screening", svg: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>) },
  { title: "Property Inspections", text: "Regular property inspections help us identify maintenance needs early, monitor the condition of your property and keep you informed with clear inspection reports.", img: "/media/services/service-inspection.avif", alt: "Property Inspections", svg: (<><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></>) },
  { title: "Repairs & Maintenance", text: "We work with a trusted network of qualified tradespeople to handle repairs and maintenance promptly and professionally, helping keep your property well maintained.", img: "/media/services/services-maint.avif", alt: "Repairs & Maintenance", svg: (<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />) },
  { title: "Property Knowledge", text: "With a strong understanding of the local property market and tenancy requirements, we help ensure your property is managed in line with current regulations and good industry practice.", img: "/media/services/service-knowledge.avif", alt: "Local Expertise", svg: (<><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></>) },
  { title: "Property Marketing", text: "We present your property professionally across relevant platforms, arrange viewings and work to attract suitable tenants for your rental.", img: "/media/services/service-marketing.avif", alt: "Property Marketing", svg: (<><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>) },
  { title: "Methamphetamine Testing", text: "Where required, we can arrange methamphetamine testing to help identify potential contamination and provide greater peace of mind for property owners.", img: "/media/services/service-testing.avif", alt: "Methamphetamine Testing", svg: (<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />) },
  { title: "End-of-Year Financial Support", text: "We keep your property management records organised throughout the year, making it easier to access the information you need for your end-of-year accounting and tax requirements.", img: "/media/services/services-finance.avif", alt: "End-of-Year Financial Support", svg: (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>) },
  { title: "Tenancy Tribunal Support", text: "If a tenancy matter reaches the Tenancy Tribunal, we can assist with the process and represent you where appropriate, helping you understand the process and protect your interests.", img: "/media/services/services-tribunal.avif", alt: "Tenancy Tribunal Support", svg: (<path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />) },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner image="/media/services/services-banner.avif" title="Our Property Management Services" subtitle="Full-spectrum operational and compliance support." />

      <div className="container section-pad">
        {services.map((s, i) => (
          <div className={`split-row${i % 2 === 1 ? " reverse" : ""}`} key={s.title} style={i === services.length - 1 ? { marginBottom: 0 } : undefined}>
            <div className="split-text">
              <svg style={{ width: 50, height: 50, stroke: "var(--accent-gold)", fill: "none", strokeWidth: 1.5, marginBottom: "1rem" }} viewBox="0 0 24 24">
                {s.svg}
              </svg>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
            <div className="fade-img-wrapper">
              <Image src={s.img} alt={s.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        ))}
      </div>

      <CtaBanner image="/media/services/services-cta.avif" title="Ready to delegate?" text="Discover how our services can streamline your investment." button={{ href: "/contact", label: "Contact Our Team" }} />
    </>
  );
}
