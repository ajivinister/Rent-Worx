"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/landlords", label: "Landlords" },
  { href: "/tenants", label: "Tenants" },
  { href: "/rentals", label: "Rent / Viewings" },
  { href: "/appraisal", label: "Rent Appraisal", btn: true },
  { href: "/services", label: "Services", btn: true },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("rw_theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <nav id="navbar">
      <div className="container nav-inner">
        <Link href="/" className="logo-container" onClick={() => setOpen(false)}>
          <Image src="/media/common/rentworx-logo-light.avif" alt="Rent Worx" className="logo-light" width={237} height={100} priority />
          <Image src="/media/common/rentworx-logo-dark.avif" alt="Rent Worx" className="logo-dark" width={237} height={100} priority />
          <span className="logo-tagline">Your Property. Our Priority.</span>
        </Link>

        <button className="mobile-menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          ☰
        </button>

        <div className={`nav-links${open ? " mobile-active" : ""}`} id="nav-links">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            const cls = l.btn ? "btn-nav" : active ? "active-link" : "";
            return (
              <Link key={l.href} href={l.href} className={cls} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            );
          })}
          <button onClick={toggleTheme} style={{ fontSize: "1.2rem", marginLeft: "10px" }} aria-label="Toggle light/dark theme">
            🌓
          </button>
        </div>
      </div>
    </nav>
  );
}
