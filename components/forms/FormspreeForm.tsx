"use client";

import { useForm } from "@formspree/react";
import { useEffect, useRef, type ReactNode } from "react";
import { showToast } from "@/lib/toast";

// Shared Formspree form wrapper (per Formspree-Integration.docx):
//  - uses @formspree/react useForm(formId)
//  - submit button shows "Submitting..." and is disabled during submit
//  - success → reset fields + success toast
//  - error → error toast
// `children` holds the full field markup INCLUDING the submit button, so each
// page keeps its own layout.
export default function FormspreeForm({
  formId,
  successMsg,
  children,
}: {
  formId: string;
  successMsg: string;
  children: ReactNode;
}) {
  const [state, handleSubmit] = useForm(formId);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      showToast(successMsg);
      formRef.current?.reset();
    }
  }, [state.succeeded, successMsg]);

  useEffect(() => {
    if (state.errors) {
      showToast("Something went wrong. Please call +64 21 712 912.");
    }
  }, [state.errors]);

  // Reflect the submitting lifecycle on the page's own submit button.
  useEffect(() => {
    const btn = formRef.current?.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    if (!btn) return;
    if (state.submitting) {
      if (!btn.dataset.orig) btn.dataset.orig = btn.textContent ?? "Submit";
      btn.textContent = "Submitting...";
      btn.disabled = true;
    } else {
      if (btn.dataset.orig) btn.textContent = btn.dataset.orig;
      btn.disabled = false;
    }
  }, [state.submitting]);

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
