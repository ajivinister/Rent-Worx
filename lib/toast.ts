// Client-side toast (mirrors Aji's showToast — appends into #toast-container
// which lives in the root layout). Call only from client components.
export function showToast(msg: string) {
  if (typeof document === "undefined") return;
  const cont = document.getElementById("toast-container");
  if (!cont) return;
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = `✅ ${msg}`;
  cont.appendChild(t);
  setTimeout(() => t.remove(), 4500);
}
