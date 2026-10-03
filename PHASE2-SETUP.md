# Rent Worx — Phase 2 Integration Setup

Phase 1 (the Next.js frontend) is complete and runs on seed data with **no
configuration required**. Phase 2 wires the three PropTech integrations from
`Migration&Integrations.docx`. This file explains what's already scaffolded and
the exact steps to go live once credentials arrive.

> **Nothing here blocks Phase 1.** Every integration degrades gracefully: no DB
> → seed listings; no Palace creds → sync route returns 503; no Tenancy env →
> sensible default redirect. The site always renders.

---

## What's already built (no-regret scaffolding)

| Piece | File | State |
|---|---|---|
| PostgreSQL cache schema | `prisma/schema.prisma` (`Property` model) | ✅ ready to migrate |
| Prisma client singleton | `lib/db.ts` (`getPrisma()` → null if no `DATABASE_URL`) | ✅ |
| Data layer seam | `lib/properties.ts` (`getProperties()` → DB, else seed) | ✅ |
| MRI Palace client | `lib/palace.ts` (`fetchActivePalaceListings()`) | 🔸 stub — awaiting API docs |
| Trade Me fallback | `lib/trademe.ts` (`fetchTradeMeRentals()`) | 🔸 stub — awaiting key + agency id |
| Tenancy.co.nz redirect | `lib/tenancy.ts` (`buildTenancyRedirect()`) | ✅ (used by property modal) |
| Sync pipeline endpoint | `app/api/sync/palace/route.ts` (secured) | ✅ (503 until configured) |
| Env template | `.env.example` | ✅ |

The Rentals page (`/rentals`) is already **SSR** (`dynamic = "force-dynamic"`),
so it reflects the live cache the moment the DB is populated — no code change.

---

## Credentials needed from Aji / Rajiv

1. **MRI Palace** — API base URL + key, and the **API docs** (so we can map their
   response in `lib/palace.ts`). Confirm Rajiv's Palace account has API access.
2. **Trade Me** — consumer key/secret + OAuth token/secret, and the **Rent Worx
   agency id**.
3. **Tenancy.co.nz** — the TPS Portal redirect base URL + the exact param format
   (and any token) for application / viewing handoff.
4. **PostgreSQL host** — Vercel Postgres / Neon / Supabase (Aji's call, he hosts).

---

## Go-live steps (when the above arrive)

```bash
# 1. Provision Postgres, then set env (locally in .env.local, in prod on Vercel)
cp .env.example .env.local      # fill DATABASE_URL + Palace/TradeMe/Tenancy + SYNC_SECRET

# 2. Create the table
npx prisma migrate deploy        # or: npx prisma migrate dev --name init

# 3. Implement the two stubs now that we have the API docs
#    - lib/palace.ts    fetchActivePalaceListings()
#    - lib/trademe.ts   fetchTradeMeRentals()  (fallback only)

# 4. Run the first sync (populates the cache)
curl -X POST "https://<site>/api/sync/palace" -H "x-sync-secret: $SYNC_SECRET"

# 5. Schedule recurring sync (Vercel Cron → POST /api/sync/palace) or wire a
#    Palace webhook to the same endpoint.
```

Once synced, `/rentals` serves the real listings automatically (DB path in
`getProperties()`), the detail modal's **Apply Now / Book a Viewing** buttons
deep-link into the branded Tenancy.co.nz flow, and the 5 Trade Me cards keep
routing to prefiltered Trade Me searches.

---

## Privacy note (NZ Privacy Act)

No tenant PII or credit data is ever stored in this app. Applications and
viewings are handed off to Tenancy.co.nz via redirect (`lib/tenancy.ts`), which
pushes results back into MRI Palace. Keep it that way.
