import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-col" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", alignSelf: "flex-start" }}>
            <Image src="/media/common/rentworx-logo-light.avif" alt="Rent Worx" className="footer-logo-light" width={237} height={100} style={{ height: 100, width: "auto", marginBottom: 0 }} />
            <Image src="/media/common/rentworx-logo-dark.avif" alt="Rent Worx" className="footer-logo-dark" width={237} height={100} style={{ height: 100, width: "auto", marginBottom: 0, display: "none" }} />
            <span style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "1rem", color: "inherit", marginTop: "-0.5rem" }}>
              Your Property. Our Priority.
            </span>
          </div>
          <p style={{ marginTop: "0.2rem", textAlign: "left" }}>Dedicated Property Management in Auckland.</p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/landlords">Landlords</Link></li>
            <li><Link href="/tenants">Tenants</Link></li>
            <li><Link href="/rentals">Available Rentals</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Discover</h4>
          <ul>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/appraisal">Rental Appraisal</Link></li>
            <li><Link href="/about">About Rajiv Kumar</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="mailto:rajiv@rentworx.co.nz" aria-label="Email Rent Worx">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container" style={{ textAlign: "center", borderTop: "1px solid var(--glass-border)", paddingTop: "2rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>
        &copy; 2026 Rent Worx Property Management. All rights reserved.
      </div>
    </footer>
  );
}
