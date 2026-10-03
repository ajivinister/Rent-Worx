import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import CtaBanner from "@/components/CtaBanner";
import FormspreeForm from "@/components/forms/FormspreeForm";

export const metadata: Metadata = {
  title: "Rental Appraisal | Rent Worx Property Management",
  description:
    "Request an accurate, up-to-date rental appraisal for your Auckland property. Data-backed weekly returns, localized area analysis and official baseline rents.",
};

const features: { title: string; text: string; svg: React.ReactNode }[] = [
  { title: "Targeted Weekly Returns", text: "A realistic estimation of the peak weekly rent your property can realistically command.", svg: (<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>) },
  { title: "Localized Area Analysis", text: "Concrete comparisons showing the performance of similar rental properties nearby.", svg: (<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>) },
  { title: "Official Baseline Data", text: "Verified market statistics detailing lower, median, and upper-tier rents based on bedroom counts.", svg: (<><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></>) },
  { title: "Suburban Growth Indicators", text: "Comprehensive data regarding your property's unique features, local infrastructure, and neighbourhood amenities.", svg: (<><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></>) },
];

export default function AppraisalPage() {
  return (
    <>
      <PageBanner image="/media/appraisal/rapp-banner.avif" title="Rental Appraisal." subtitle="We Handle the Details. You Enjoy the Returns." />

      <div className="container section-pad">
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.6rem", color: "var(--accent-gold)" }}>Appraisal Request</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: 900, margin: "0 auto" }}>
            Please contact our team today if you require an accurate, up-to-date rental assessment in the Auckland region. Ensuring your asset is correctly aligned with the current market is essential for maximizing your overall yields. Furthermore, an official appraisal serves as a vital document to help determine your borrowing capacity and secure investment finance with major banks.
          </p>
        </div>

        <div className="two-by-two-grid" style={{ marginBottom: "5rem" }}>
          {features.map((f) => (
            <div className="tilt-card" key={f.title}>
              <svg width="36" height="36" stroke="var(--accent-gold)" fill="none" strokeWidth="1.5" style={{ marginBottom: "1rem" }} viewBox="0 0 24 24">
                {f.svg}
              </svg>
              <h4 style={{ fontSize: "1.2rem" }}>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>

        <div className="card-split-form">
          <div className="form-img-container">
            <Image src="/media/appraisal/rapp-form.avif" alt="Appraisal Request" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
          <div className="form-content">
            <h3 style={{ marginBottom: "1.5rem", fontSize: "1.8rem", color: "var(--accent-gold)" }}>Please Complete the Rental Appraisal Form</h3>
            <FormspreeForm formId="xoevvnkj" successMsg="Appraisal Request Submitted! Rajiv will review and contact you shortly.">
              <div className="form-grid">
                <div className="form-group form-full">
                  <label>Street Address</label>
                  <input type="text" name="address" className="form-control" required placeholder="123 Example Street" />
                </div>
                <div className="form-group form-full">
                  <label>City / Suburb</label>
                  <input type="text" name="city_suburb" className="form-control" required placeholder="Auckland Suburb" />
                </div>
                <div className="form-group">
                  <label>Property Type</label>
                  <select name="property_type" className="form-control" required>
                    <option>Standalone House</option>
                    <option>Townhouse</option>
                    <option>Apartment / Unit</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Bedrooms</label>
                  <input type="number" name="bedrooms" className="form-control" min={1} max={10} required />
                </div>
                <div className="form-group">
                  <label>Bathrooms</label>
                  <input type="number" name="bathrooms" className="form-control" min={1} max={6} step={0.5} required />
                </div>
                <div className="form-group">
                  <label>Garage (Cars)</label>
                  <select name="garage" className="form-control" required>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="form-group form-full">
                  <label>Available Timing</label>
                  <input type="datetime-local" name="available_timing" className="form-control" required />
                </div>
                <div className="form-group form-full">
                  <label>Management Intent</label>
                  <select name="intent" className="form-control" required>
                    <option>Switching management agencies</option>
                    <option>First-time investor seeking guidance</option>
                    <option>Casual placement / tenant search only</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Owner Name</label>
                  <input type="text" name="name" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Phone (+64)</label>
                  <input type="tel" name="phone" className="form-control" required />
                </div>
                <div className="form-group form-full">
                  <label>Email Address</label>
                  <input type="email" name="_replyto" className="form-control" required />
                </div>
                <div className="form-group form-full">
                  <button type="submit" className="btn-primary" style={{ width: "100%" }}>Submit for Appraisal</button>
                </div>
              </div>
            </FormspreeForm>
          </div>
        </div>
      </div>

      <CtaBanner image="/media/appraisal/rapp-cta.avif" title="Need immediate advice?" text="Call us directly for a confidential discussion about your portfolio." button={{ href: "/contact", label: "Contact Us" }} />
    </>
  );
}
