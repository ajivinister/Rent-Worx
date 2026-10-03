import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import CtaBanner from "@/components/CtaBanner";
import FormspreeForm from "@/components/forms/FormspreeForm";

export const metadata: Metadata = {
  title: "Contact | Rent Worx Property Management",
  description:
    "Get in touch with Rajiv and the Rent Worx team. Call or WhatsApp +64 21 712 912, email rajiv@rentworx.co.nz, or send a message. Auckland property management.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner image="/media/contact/contact-banner.avif" title="Get in Touch" subtitle="Reach out to Rajiv and the Rent Worx team." />

      <div className="container section-pad">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
          <div className="deep-card" style={{ padding: "2rem", textAlign: "center" }}>
            <h4 style={{ marginBottom: "0.5rem", color: "var(--accent-gold)" }}>Call or WhatsApp</h4>
            <p style={{ fontSize: "1.3rem", fontWeight: 700 }}>+64 21 712 912</p>
          </div>
          <div className="deep-card" style={{ padding: "2rem", textAlign: "center" }}>
            <h4 style={{ marginBottom: "0.5rem", color: "var(--accent-gold)" }}>Email</h4>
            <p style={{ fontSize: "1.15rem", fontWeight: 600 }}>rajiv@rentworx.co.nz</p>
          </div>
          <div className="deep-card" style={{ padding: "2rem", borderBottom: "4px solid var(--danger)", textAlign: "center" }}>
            <h4 style={{ color: "var(--danger)", marginBottom: "0.5rem" }}>Emergency Situations</h4>
            <p>For urgent threats involving fire, theft, or physical injury, dial <strong>111</strong> immediately.</p>
          </div>
        </div>

        <div className="card-split-form">
          <div className="form-content">
            <h3 style={{ marginBottom: "1.5rem", fontSize: "1.8rem", color: "var(--accent-gold)" }}>Send a Direct Message</h3>
            <FormspreeForm formId="mgavvlna" successMsg="Message Sent! Rajiv will get back to you shortly.">
              <div className="form-group">
                <label>Your Full Name</label>
                <input type="text" name="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="_replyto" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" className="form-control" />
              </div>
              <div className="form-group">
                <label>Enquiry Details</label>
                <textarea name="message" className="form-control" rows={4} required />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: "0.5rem" }}>Send Message</button>
            </FormspreeForm>
          </div>
          <div className="form-img-container">
            <Image src="/media/contact/contact-form.avif" alt="Contact Us" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div className="deep-card" style={{ height: 420, padding: 0, marginTop: "2rem", position: "relative", overflow: "hidden", borderRadius: 8 }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 55, background: "rgba(34, 34, 34, 0.95)", display: "flex", alignItems: "center", padding: "0 20px", zIndex: 10 }}>
            <span style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 600 }}>Rent Worx Locations</span>
          </div>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1sB65_sNSQlJwd0DxH71ipZbuediCHNQ&ehbc=2E312F"
            width="100%"
            style={{ border: 0, height: 480, position: "absolute", top: -60, left: 0 }}
            title="Rent Worx Locations"
          />
        </div>
      </div>

      <CtaBanner image="/media/contact/contact-cta.avif" title="Let's Talk Property" text="Partner with the experts in Auckland real estate management." button={{ href: "https://wa.me/6421712912", label: "Chat on WhatsApp", external: true }} />
    </>
  );
}
