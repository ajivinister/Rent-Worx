// =============================================================
// Trade Me integration (Phase 2) — listing syndication FALLBACK.
//
// Per Migration&Integrations.docx: the primary path is MRI Palace automatically
// pushing active listings to Trade Me (strict data parity). This server-side
// fetch is the FALLBACK — it queries the Trade Me API filtered by the Rent Worx
// agency id if direct Palace→website parity is unavailable.
//
// The 5 external "routing cards" (Studio / 1 / 2 / 3 / 3+ beds) on the Rentals
// page are static deep links and need no API — they already work.
//
// STUB until Trade Me API key + agency id are provided. Server-only.
// =============================================================

import type { PalaceSyncRecord } from "./palace";

const BASE = process.env.TRADEME_API_BASE ?? "https://api.trademe.co.nz/v1";
const CONSUMER_KEY = process.env.TRADEME_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.TRADEME_CONSUMER_SECRET;
const OAUTH_TOKEN = process.env.TRADEME_OAUTH_TOKEN;
const OAUTH_TOKEN_SECRET = process.env.TRADEME_OAUTH_TOKEN_SECRET;
const AGENCY_ID = process.env.TRADEME_AGENCY_ID;

export function isTradeMeConfigured(): boolean {
  return Boolean(CONSUMER_KEY && CONSUMER_SECRET && OAUTH_TOKEN && OAUTH_TOKEN_SECRET && AGENCY_ID);
}

export async function fetchTradeMeRentals(): Promise<PalaceSyncRecord[]> {
  if (!isTradeMeConfigured()) {
    throw new Error(
      "Trade Me not configured — set TRADEME_CONSUMER_KEY/SECRET, OAUTH tokens and TRADEME_AGENCY_ID."
    );
  }

  // TODO(Phase 2): implement the real Trade Me API call once credentials arrive.
  //   GET `${BASE}/Search/Property/Rental.json?member_listing=${AGENCY_ID}&...`
  //   with an OAuth 1.0a Authorization header built from the consumer/oauth keys.
  //   Map each listing to PalaceSyncRecord (reuse the cache shape).
  throw new Error("Trade Me fetch not implemented — awaiting API key + agency id.");
}
