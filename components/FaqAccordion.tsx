"use client";

import { useState, type ReactNode } from "react";

export type FaqItem = { q: string; a: ReactNode };

// Auto-closing FAQ accordion (opening one closes the others), matching
// Aji's toggleFaq behaviour.
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div className={`faq-item${openIndex === i ? " open" : ""}`} key={i}>
          <button
            type="button"
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            {item.q}
            <span className="faq-icon">▼</span>
          </button>
          <div className="faq-answer">{item.a}</div>
        </div>
      ))}
    </div>
  );
}
