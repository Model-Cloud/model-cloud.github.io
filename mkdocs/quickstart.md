---
hide:
  - navigation
---

# Quickstart

This guide helps you make your first request to ModelCloud.

## 1. Get an API Key
Sign up and retrieve your API key from the Console.

## 2. Make a Chat Completion request
```bash
curl https://api.modelcloud.example.com/v1/chat/completions \
  -H "Authorization: Bearer $MC_API_KEY" \
  -H "Content-Type": "application/json" \
  -d '{
    "model": "TinyLlama 1.1B",
    "messages": [
      { "role": "developer", "content": "You are a helpful assistant." },
      { "role": "user", "content": "Hello!" }
    ]
  }'
```

## 3. Stream responses (optional)
Use `stream: true` to receive tokens as they are generated.

## 4. Next steps
- Review limits and timeouts
- Explore model catalog & BYO models
- Integrate SDKs (coming soon)
