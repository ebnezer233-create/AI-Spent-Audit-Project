# Reflection

## 1. Hardest bug

The hardest bug was keeping the audit engine deterministic while still making the UI feel instant. My first version tried to call the LLM before showing any results, which made failures and slow API responses block the whole product. I tested the hypothesis that the audit engine should run locally first, then the server could enhance it. The fix was to generate an immediate fallback audit on the client, then replace it with the API result if available. This made the app resilient and easier to test.

## 2. Decision I reversed

I originally planned to let the LLM decide recommendations. I reversed that because the assignment specifically values defensible financial reasoning. LLM output can be persuasive but inconsistent. I moved the math into a typed audit engine and used AI only for a narrative summary.

## 3. Week 2 build

In week 2 I would add benchmark mode, PDF export, analytics instrumentation, and a better pricing update workflow. I would also add a small admin page for Credex to see high-savings leads by company size and stack.

## 4. AI usage

I used AI tools for brainstorming UI copy, edge cases, and documentation drafts. I did not trust AI with pricing math, sources, or final audit logic without checking. One specific mistake AI made was suggesting savings for every enterprise plan automatically, but enterprise pricing can be justified by compliance needs, so I changed the logic to be conservative.

## 5. Self-rating

- Discipline: 8/10 — consistent daily progress and documentation.
- Code quality: 7/10 — typed core logic and tests, but production validation could be deeper.
- Design sense: 7/10 — clean UI with strong savings hero, but more screenshots and animations could help.
- Problem-solving: 8/10 — separated deterministic math from AI narrative.
- Entrepreneurial thinking: 8/10 — lead capture, viral URL, and GTM are aligned with Credex’s business.
