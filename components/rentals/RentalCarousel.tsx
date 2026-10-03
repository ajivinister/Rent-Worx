"use client";

import { useEffect, useState } from "react";

// Decorative crossfading background carousel for the Rentals banner
// (14 images, 6s interval — mirrors Aji's initRentalCarousel).
const COUNT = 14;

export default function RentalCarousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIdx((i) => (i + 1) % COUNT), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
      {Array.from({ length: COUNT }, (_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('/media/rentals/rental-caro-${i + 1}.avif')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === idx ? 1 : 0,
            transition: "opacity 1.5s ease",
          }}
        />
      ))}
    </div>
  );
}
