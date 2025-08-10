# ModelCloud Documentation

Welcome to **ModelCloud** – the decentralized AI inference network that makes large language models accessible, affordable, and globally distributed.

## What is ModelCloud?

ModelCloud is a revolutionary platform that transforms how AI inference works by creating a decentralized marketplace where:

- **Developers** get instant access to powerful language models through our OpenAI-compatible API
- **GPU owners** monetize their hardware by running inference nodes and earning per token
- **Everyone** benefits from reduced latency, lower costs, and censorship-resistant AI

## Core Features

### 🚀 **OpenAI-Compatible API**
Drop-in replacement for OpenAI's API with zero code changes required. Start using models like Llama, Mistral, and more through familiar endpoints.

```bash
curl -X POST "https://api.modelcloud.ai/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -d '{"model": "llama-3.2-3b", "messages": [{"role": "user", "content": "Hello!"}]}'
```

### ⚡ **Intelligent Routing**
Our smart routing engine automatically selects the fastest available node based on:
- Geographic proximity
- Node performance metrics
- Real-time latency measurements
- Model availability

### 💰 **Decentralized Marketplace**
- **For Developers**: Pay only for successful inference, with transparent per-token pricing
- **For Node Operators**: Earn cryptocurrency for every token generated on your hardware
- **Global Network**: Redundancy and reliability through distributed infrastructure

### 🔒 **Privacy & Security**
- No data logging or storage
- End-to-end encryption
- Censorship-resistant architecture
- Your prompts never leave the inference process

## Getting Started

### For Developers

1. **[Quick Start Guide](quickstart.md)** - Get up and running in 5 minutes
2. **[Chat Completions API](api/chat-completions.md)** - Complete API reference
3. **[Routing System](routing.md)** - Understanding how requests are routed

### For Node Operators

1. **[Run a Node](nodes/run-a-node.md)** - Setup your GPU for inference
2. **[Payout System](nodes/payouts.md)** - How earnings work
3. **[Hardware Requirements](nodes/run-a-node.md#requirements)** - Minimum specs and recommendations

## Why Choose ModelCloud?

| Traditional AI APIs | ModelCloud |
|---------------------|------------|
| Centralized servers | Distributed globally |
| Fixed pricing | Market-driven rates |
| Limited model selection | Growing ecosystem |
| Potential censorship | Censorship-resistant |
| Single point of failure | Redundant infrastructure |
| Data retention policies | Zero data storage |

## Use Cases

- **Chatbots & Assistants**: Build conversational AI with low latency
- **Content Generation**: Scale content creation with distributed compute
- **Code Generation**: Integrate AI coding assistants
- **Research & Experimentation**: Access diverse models cost-effectively
- **Edge Computing**: Reduce latency with geographically distributed nodes

## Network Statistics

ModelCloud's decentralized network provides:
- **Global Coverage**: Nodes across 6 continents
- **Model Variety**: 15+ popular open-source models
- **Uptime**: 99.9% network availability
- **Performance**: Average response time under 2 seconds

## Recent Updates

📖 **[Blog: OpenAI-Compatible Router](blog/openai-compatible-router.md)** - Deep dive into our routing architecture

📖 **[Blog: Running a Node](blog/run-a-node.md)** - Complete guide to joining the network

📖 **[Blog: Routing & Latency](blog/routing-latency-design.md)** - How we optimize for speed

## Community & Support

- **[GitHub](https://github.com/modelcloud/modelcloud)** - Open source components
- **Discord** - Join our community (coming soon)
- **Documentation** - You're reading it!
- **Status Page** - Real-time network health (coming soon)

## Ready to Build?

[Get Started](quickstart.md){ .md-button .md-button--primary }
[Run a Node](nodes/run-a-node.md){ .md-button }
[API Reference](api/chat-completions.md){ .md-button }

---

> **Need help?** Check out our [Quick Start Guide](quickstart.md) or explore the [API documentation](api/chat-completions.md). Ready to monetize your GPU? Learn how to [run a node](nodes/run-a-node.md).
