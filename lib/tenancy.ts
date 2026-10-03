// =============================================================
// Tenancy.co.nz handoff (Phase 2).
//
// Per Migration&Integrations.docx: to comply with the NZ Privacy Act we never
// store tenant PII / credit data locally. Instead we build a redirect to the
// branded Tenancy.co.nz (TPS Portal) flow, mapping the property id into the
// URL params. Tenancy.co.nz completes eBundle applications / viewings and
// pushes the result back into MRI Palace.
//
// Client-safe: only uses NEXT_PUBLIC_ env + URL building (no secrets, no DB).
// TODO(Phase 2): replace the base URL + param names with the real TPS Portal
// redirect format once the tokens/links are provided.
// =============================================================

const BASE =
  process.env.NEXT_PUBLIC_TENANCY_REDIRECT_BASE ?? "https://app.tenancy.co.nz/redirect";
const AGENCY = process.env.NEXT_PUBLIC_TENANCY_AGENCY ?? "rentworx";

export type TenancyAction = "apply" | "viewing";

export function buildTenancyRedirect(propertyId: number | string, action: TenancyAction) {
  try {
    const url = new URL(BASE);
    url.searchParams.set("agency", AGENCY);
    url.searchParams.set("propertyId", String(propertyId));
    url.searchParams.set("action", action);
    return url.toString();
  } catch {
    return `${BASE}?agency=${AGENCY}&propertyId=${propertyId}&action=${action}`;
  }
}
