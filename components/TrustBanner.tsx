"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { target: number; suffix: string; label: string };

const stats: Stat[] = [
  { target: 4, suffix: "+", label: "Properties Managed" },
  { target: 8, suffix: "+", label: "Happy Clients" },
  { target: 100, suffix: "%", label: "Customer Satisfaction" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const speed = target > 100 ? 50 : 20;
            const inc = target / speed;
            const tick = () => {
              setValue((prev) => {
                const next = Math.ceil(prev + inc);
                if (next < target) {
                  setTimeout(tick, 30);
                  return next;
                }
                return target;
              });
            };
            tick();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <h3>
      <span ref={ref}>{value}</span>
      {suffix}
    </h3>
  );
}

export default function TrustBanner() {
  return (
    <div className="trust-banner">
      <div className="container">
        <h2 className="text-center" style={{ fontSize: "2.2rem", color: "#fff", marginBottom: "2.5rem" }}>
          Over 20 Years in Real Estate.
        </h2>
        <div className="trust-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {stats.map((s) => (
            <div className="trust-item" key={s.label}>
              <Counter target={s.target} suffix={s.suffix} />
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
