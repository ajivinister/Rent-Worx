import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/home/Hero";
import TrustBanner from "@/components/TrustBanner";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";

export default function HomePage() {
  return (
    <>
      <Hero />

      <TrustBanner />

      <div className="container section-pad">
        <div className="split-row" style={{ marginBottom: "4rem" }}>
          <div className="split-text">
            <h2 style={{ fontSize: "2.6rem", marginBottom: "1.5rem" }}>Property Management That Works For You</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              At Rent Worx, we believe property management is about more than managing a rental — it’s about looking after your property as if it matters to us too.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              We provide personal, reliable property management across Auckland, with a simple focus: good tenants, well-maintained properties and clear communication with owners.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "2rem" }}>
              We take the time to understand you, your property and what matters to you. We keep things straightforward, stay on top of the details and are always here when you need us. Our aim is simple — to make property ownership easier, with a property manager you can trust.
            </p>
          </div>
          <div className="fade-img-wrapper" style={{ alignSelf: "stretch", flex: 1 }}>
            <Image src="/media/home/home-pm-auckland.avif" alt="Property Management That Works For You" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div className="text-center" style={{ marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "2rem", color: "var(--accent-gold)" }}>Our Strategic Pillars</h3>
        </div>
        <div className="four-col-grid">
          <div className="tilt-card text-center">
            <svg width="40" height="40" stroke="var(--accent-gold)" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
              <polygon points="11 19 2 12 11 5 11 19" />
              <polygon points="22 19 13 12 22 5 22 19" />
            </svg>
            <h4>High-Impact Placement</h4>
            <p>Marketing campaigns engineered to attract verified tenants.</p>
          </div>
          <div className="tilt-card text-center">
            <svg width="40" height="40" stroke="var(--accent-gold)" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <h4>Comprehensive Vetting</h4>
            <p>Affordability, credit, tribunal, and reference checks.</p>
          </div>
          <div className="tilt-card text-center">
            <svg width="40" height="40" stroke="var(--accent-gold)" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <h4>Healthy Homes Certified</h4>
            <p>Active oversight ensuring ongoing NZ legislative compliance.</p>
          </div>
          <div className="tilt-card text-center">
            <svg width="40" height="40" stroke="var(--accent-gold)" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <h4>Accounting</h4>
            <p>Absolute transparency with 24/7 financial reporting access.</p>
          </div>
        </div>
      </div>

      <div className="cta-banner" style={{ backgroundImage: "url('/media/home/home-cta.avif')" }}>
        <div className="glass-text-box">
          <h2>The Rent Worx Difference</h2>
          <p>Personal care, proactive updates, and zero stress. We manage the hard work so you can enjoy the returns.</p>
          <Link href="/appraisal" className="btn-primary">Request a Free Appraisal</Link>
        </div>
      </div>

      <div style={{ paddingTop: "5rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Testimonials</h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "3rem" }}>What Auckland owners say about partnering with Rent Worx.</p>
      </div>
      <TestimonialsMarquee />
    </>
  );
}
