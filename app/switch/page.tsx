import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import CtaBanner from "@/components/CtaBanner";
import FormspreeForm from "@/components/forms/FormspreeForm";

export const metadata: Metadata = {
  title: "Switch to Rent Worx | Property Management",
  description:
    "Seamlessly transition your Auckland rental portfolio to Rent Worx. We handle the entire handover with your existing agency and tenants.",
};

export default function SwitchPage() {
  return (
    <>
      <PageBanner image="/media/switch/switch-banner.avif" title="Switch to Rent Worx" subtitle="Seamlessly transition your portfolio to Auckland's dedicated property management experts." />

      <div className="container section-pad">
        <div className="card-split-form">
          <div className="form-content">
            <h3 style={{ marginBottom: "1.5rem", fontSize: "1.8rem", color: "var(--accent-gold)" }}>Initiate Your Switch</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              Fill out your details below. We handle the entire handover process with your existing agency and tenants.
            </p>
            <FormspreeForm formId="xljdyapz" successMsg="Request Received! Rajiv will contact you shortly to arrange the switch.">
              <input type="hidden" name="subject" value="New Switch Agency Request" />
              <div className="form-grid">
                <div className="form-group form-full">
                  <label>Your Full Name</label>
                  <input type="text" name="name" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="_replyto" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" className="form-control" required />
                </div>
                <div className="form-group form-full">
                  <label>Current Management Agency (Optional)</label>
                  <input type="text" name="current_agency" className="form-control" />
                </div>
                <div className="form-group form-full">
                  <label>Property Address(es)</label>
                  <textarea name="properties" className="form-control" rows={3} required />
                </div>
                <div className="form-group form-full">
                  <button type="submit" className="btn-primary" style={{ width: "100%" }}>Authorize Switch</button>
                </div>
              </div>
            </FormspreeForm>
          </div>
          <div className="form-img-container">
            <Image src="/media/switch/switch-form.avif" alt="Switch to Rent Worx" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>

      <CtaBanner image="/media/switch/switch-cta.avif" title="Expert Rental Appraisal" text="Ensure your investment is correctly aligned with the current market." button={{ href: "/appraisal", label: "Request Rent Appraisal" }} />
    </>
  );
}
