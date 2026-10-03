import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Landlords | Rent Worx Property Management",
  description:
    "Specialised property management for Auckland landlords — proactive updates, rigorous tenant selection, Healthy Homes compliance, flawless financials and transparent reporting.",
};

const solutions: { title: string; text: string; svg: React.ReactNode }[] = [
  { title: "Proactive Updates", text: "We keep you perfectly informed, managing flawless communication between you and your tenants.", svg: (<><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>) },
  { title: "Rapid Response", text: "Tenant requests or owner queries—we handle everything instantly with swift, decisive action.", svg: (<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />) },
  { title: "Dedicated Bilingual Manager", text: "You get a personal, dual-language property expert managing your daily operations.", svg: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>) },
  { title: "Maximum Market Yield", text: "We keep our finger on Auckland's pulse to secure top-tier rental returns and zero vacancies.", svg: (<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>) },
  { title: "Flawless Financial Management", text: "Rent collections, invoices, and property expenses are sorted and paid right on time.", svg: (<><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>) },
  { title: "24/7 Digital Portal", text: "Track your investments instantly with easy online access to statements, ledgers, and documents.", svg: (<><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>) },
  { title: "Premium Tenant Selection", text: "We safeguard your property by placing premier tenants through rigorous background and credit vetting.", svg: (<><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></>) },
  { title: "Total Maintenance Care", text: "We coordinate all repairs seamlessly, keeping you informed and getting things done only with your approval.", svg: (<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />) },
  { title: "Routine Photo Inspections", text: "We conduct regular property reviews, providing you with detailed photo reports to protect your asset.", svg: (<><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></>) },
  { title: "Zero-Headache Operations", text: "We take the stress and guesswork out of land lording so you can simply enjoy your returns.", svg: (<><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></>) },
  { title: "Healthy Homes Auditing", text: "Continuous compliance oversight ensuring your property meets heating, insulation, ventilation, and moisture ingress laws.", svg: (<><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M9 14l2 2 4-4" /></>) },
  { title: "Vacancy & Tenant Retention", text: "We work proactively to minimise vacancy periods and maintain good tenant relationships, helping keep your property occupied and your rental income consistent.", svg: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></>) },
];

const faqs: FaqItem[] = [
  { q: "What does professional management cost, and what do I get for it?", a: "Our management fee is a percentage of the rent we collect, clearly stated upfront with no hidden extras. It covers tenant screening, rent collection, routine inspections, maintenance coordination, and full compliance oversight. Marketing costs, where applicable, are charged separately. You receive your rent and enjoy peace of mind, hassle-free." },
  { q: "How much will your service cost me?", a: (<><strong>Management Fees From Just 5%</strong><br />Our property management packages range from 5% to 7% + GST, depending on the size of your portfolio and the level of support you want. We don&apos;t believe in one-size-fits-all fees. Call us today to find out which package fits your investment goals perfectly!</>) },
  { q: "Do you collect a bond?", a: "Yes. The Residential Tenancies Act requires that no more than four weeks' bond be collected. Unless otherwise agreed, Rent Worx considers three weeks to be the minimum that should be paid. The bond is paid before the tenant takes possession and is held by the Bond Centre until the tenant vacates." },
  { q: "How often do you pay Landlord?", a: "We credit your funds directly into your bank account twice a month. To keep your books simple, we email you a comprehensive monthly statement on the first working day of the month, completely detailing all income, expenses, and attached invoice copies." },
  { q: "Will I be charged for a vacant property?", a: "NO." },
  { q: "Does Rent Worx guarantee me for any loss of rent?", a: "NO." },
  { q: "How often do you inspect my property?", a: "We carry out regular property inspections, typically completing four per year unless agreed otherwise before management begins. Please check your insurance policy requirements, as most policies mandate a specific inspection frequency. Share this detail with your property manager, and we will align our schedule to keep you fully covered." },
  { q: "How do you handle missed rent payments?", a: "We monitor rent payments digitally so we can spot a missed payment instantly and start debt recovery immediately. While we do everything we can to resolve issues early, we will escalate the matter to formal mediation or the Tenancy Tribunal if necessary. We do not charge for our time during these processes. You will only need to cover the standard government application fee, which is currently $29.00 including GST." },
  { q: "I will be moving overseas - can you handle all repairs?", a: "Yes. We use a trusted team of skilled, competitively priced tradespeople who prioritize our calls for fast turnarounds. If you have a preferred contractor, we are happy to use them. Important Note: By law, if you are outside of New Zealand for more than 21 consecutive days, you must appoint a local agent to manage your property." },
];

export default function LandlordsPage() {
  return (
    <>
      <PageBanner image="/media/landlord/llord-banner.avif" title="Local Hands, Loyal Partners for Auckland Landlords" subtitle="Sharp, proactive management boosting your financial returns" />

      <div className="container section-pad">
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.6rem" }}>Specialised Solutions</h2>
          <p style={{ color: "var(--text-secondary)" }}>Comprehensive management ensuring absolute peace of mind.</p>
        </div>

        <div className="four-col-grid" style={{ marginBottom: "5rem" }}>
          {solutions.map((s) => (
            <div className="anim-card text-center" key={s.title} style={{ borderTop: "4px solid var(--accent-gold)" }}>
              <svg width="40" height="40" stroke="var(--accent-gold)" fill="none" strokeWidth="1.5" style={{ marginBottom: "1rem" }} viewBox="0 0 24 24">
                {s.svg}
              </svg>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div className="split-row reverse">
          <div className="split-text">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>Local Hands. Loyal Partners</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              We protect your capital and eliminate landlord risk through systematic workflows. From detailed photographic property records and vetted trade maintenance to strict arrears management, we look after your asset like our own.
            </p>
          </div>
          <div className="fade-img-wrapper">
            <Image src="/media/landlord/llord-standard.avif" alt="Local Hands. Loyal Partners" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div style={{ background: "var(--bg-secondary)", padding: "4rem", borderRadius: 8, boxShadow: "var(--card-shadow)", textAlign: "center", marginTop: "4rem", border: "1px solid var(--glass-border)" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--accent-primary)", marginBottom: "1rem" }}>Upgrade to Rent Worx Experience</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: 800, margin: "0 auto 3rem" }}>
            Ready to experience property management that actually works for you? Whether you&apos;re looking for an up-to-date market analysis or ready to make the switch, we make the transition effortless.
          </p>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/appraisal" className="btn-primary" style={{ padding: "1rem 3rem", fontSize: "1.1rem" }}>Book an Appraisal</Link>
            <Link href="/switch" className="btn-outline" style={{ width: "auto", padding: "1rem 3rem", fontSize: "1.1rem" }}>Switch to Us</Link>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "6rem auto 0" }}>
          <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "1rem" }}>Managing &amp; Protecting Your Investment</h2>
          <p className="text-center" style={{ color: "var(--accent-gold)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "3rem" }}>Landlord FAQs</p>
          <FaqAccordion items={faqs} />
        </div>
      </div>

      <CtaBanner image="/media/landlord/llord-cta.avif" title="Ready to maximize your yield?" text="Secure a comprehensive, data-driven analysis of your rental investment today." button={{ href: "/appraisal", label: "Request a Free Appraisal" }} />
    </>
  );
}
