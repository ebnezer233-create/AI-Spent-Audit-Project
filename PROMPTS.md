# Prompts

## Audit summary prompt

```text
Write a concise ~100-word AI spend audit summary for a {teamSize}-person team using AI mostly for {useCase}. Monthly savings estimate: ${totalSavings}. Tools: {tool list}. Be specific, finance-literate, and honest. Do not invent numbers.
```

## Why this prompt

The audit engine already calculates savings. The LLM is only asked to turn structured facts into a readable executive summary. The prompt explicitly says not to invent numbers because pricing and savings should come from deterministic code.

## Tried and rejected

I tried asking the model to produce recommendations directly, but the output was too inconsistent and occasionally created unsupported savings. That is why the final design keeps audit math in code.
