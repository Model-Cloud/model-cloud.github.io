---
draft: false
date: 2025-08-09
categories:
    - Launch
pin: true
---

# Why we built an OpenAI-compatible router on a decentralized network

> Compatibility lowers switching costs; routing lowers latency and cost.

Most teams standardized on OpenAI’s Chat Completions API. We designed ModelCloud to be drop‑in compatible, so you can point existing clients at our router and immediately benefit from a global, decentralized GPU network.

## The problem we’re solving

Running AI inference is expensive and spiky. Centralized providers bundle compute, routing and pricing in a way that makes it hard to optimize latency and cost. Meanwhile, there’s growing supply of idle GPUs – at the edge, in labs, in small datacenters – that can serve traffic competitively if we can route requests intelligently.

## Our approach

- **API compatibility**: we support `POST /v1/chat/completions`, messages arrays, temperature, and common parameters, so migrations are trivial.
- **Decentralized supply**: model nodes authenticate with HQ and sync deployments. Nodes run model backends (e.g. llama.cpp), and pull orders via gRPC.
- **Intelligent routing**: the router matches requests to nodes by recent health, observed latency (P50/P95), and model availability. If a node degrades, traffic rebalances automatically.
- **Transparent economics**: node operators earn per usage; buyers see clear per‑1K token pricing and can bring their own models where licensing allows.

## How it works (high level)

1. Your client calls our router:
   ```bash
   curl https://api.modelcloud.example.com/v1/chat/completions \
     -H "Authorization: Bearer $MC_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "model": "TinyLlama 1.1B",
       "messages": [
         { "role": "developer", "content": "You are a helpful assistant." },
         { "role": "user", "content": "Hello!" }
       ]
     }'
   ```
2. The router enqueues an order for the requested model.
3. A model node pulls the order via gRPC (`TakeOrder`), runs inference (e.g. llama.cpp), then completes via `CompleteOrder`.
4. The router returns a standard Chat Completions response.

## Why compatibility matters

- **Zero‑friction trials**: point staging at ModelCloud, no client rewrites.
- **Tooling works**: observability and SDKs built for OpenAI still operate.
- **Future‑proof**: you can A/B providers behind a single client.

## Why decentralization wins

- **Lower latency**: route to the nearest healthy node.
- **Better prices**: tap into diverse supply and market dynamics.
- **Resilience**: avoid single‑provider outages; auto‑rebalance under load.

## What’s next

- Streaming tokens with backpressure
- Model selection hints & routing policies
- Node reputation and dynamic rewards

If you’re interested in trying ModelCloud or running a node, head to the Console to get started.

<!-- more -->

## Appendix: Supported parameters (preview)

- `model`: string (required)
- `messages`: array of role/content objects (required)
- `temperature`, `top_p`, `top_k`, `repeat_penalty`, `seed`
- `stream`: boolean

Note: exact parameter set depends on the underlying model backend and will continue to expand.
