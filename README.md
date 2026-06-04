# AI Spend Scout

AI Spend Scout is a free web app for startup founders and engineering managers who want to find wasted spend across AI tools like Cursor, Claude, ChatGPT, Copilot, Gemini, and API usage. It gives an instant audit, captures leads only after showing value, and creates shareable public audit URLs.

**Live URL:** Add your deployed Vercel URL here.

## Screenshots / Demo

Add 3 screenshots after deployment:
1. Landing + spend input form
2. Audit results dashboard
3. Public share page

Or add a 30-second Loom/YouTube demo link.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
npm test
```

## Deploy

Deploy to Vercel. Add the environment variables from `.env.example`.

## Decisions

1. **Next.js + TypeScript:** Chosen because the assignment needs SEO/Open Graph pages, API routes, and deployability in one repo.
2. **Hardcoded audit rules:** The audit math is deterministic and testable; AI is only used for the personalized summary.
3. **Supabase optional fallback:** The app runs locally without Supabase, but production storage uses Supabase tables.
4. **Lead capture after value:** The email form appears after the audit result, matching the assignment’s requirement.
5. **Plain pricing dataset:** Pricing lives in code plus `PRICING_DATA.md` so every recommendation can be traced to a vendor source.
