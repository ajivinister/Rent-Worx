"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Background video hero with the logo + tagline "emerging" after a delay,
// mirroring Aji's initHeroVideoEmergence timings (logo 10s, tagline 15s).
export default function Hero() {
  const [logoVisible, setLogoVisible] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLogoVisible(true), 10000);
    const t2 = setTimeout(() => setTagVisible(true), 15000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero-video-wrapper">
        {/* suppressHydrationWarning: some browser extensions inject attributes
            (e.g. data-video) onto <video> before hydration, which would
            otherwise trip React's SSR/client attribute check. */}
        <video autoPlay muted loop playsInline poster="/media/home/home-cta.avif" preload="auto" suppressHydrationWarning>
          <source src="/media/home/home-hero-clip.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <Image
          src="/media/common/rentworx-logo-light.avif"
          alt="Rent Worx"
          className={`hero-dyn-logo${logoVisible ? " visible" : ""}`}
          width={237}
          height={100}
          priority
        />
        <h2 className={`hero-dyn-tag${tagVisible ? " visible" : ""}`}>
          YOUR PROPERTY<br />OUR PRIORITY
          <span className="hero-subtext">
            Boutique property management with a personal touch—keeping you connected and your investment effortless.
          </span>
        </h2>
      </div>
    </div>
  );
}
