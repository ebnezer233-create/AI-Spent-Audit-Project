# Tests

Run all tests:

```bash
npm test
```

## Automated tests

1. `src/lib/auditEngine.test.ts` — downgrades Cursor Business for very small teams.
2. `src/lib/auditEngine.test.ts` — does not manufacture savings for optimal spend.
3. `src/lib/auditEngine.test.ts` — recommends Copilot Business over Enterprise for small teams.
4. `src/lib/auditEngine.test.ts` — downgrades Claude Max when the use case is not research-heavy.
5. `src/lib/auditEngine.test.ts` — flags large API spend for optimization and discounted credits.
