# API: Chat Completions

Endpoint: `POST /v1/chat/completions`

Request body (partial):
```json
{
  "model": "TinyLlama 1.1B",
  "messages": [
    { "role": "developer", "content": "You are a helpful assistant." },
    { "role": "user", "content": "Hello!" }
  ],
  "temperature": 0.8,
  "stream": false
}
```

Response (summary):
```json
{
  "id": "...",
  "object": "chat.completion",
  "created": 1720000000,
  "model": "TinyLlama 1.1B",
  "choices": [
    {
      "index": 0,
      "message": { "role": "assistant", "content": "..." },
      "finish_reason": "stop"
    }
  ]
}
```

Notes:
- Compatible with OpenAI-style chat schema
- Use streaming for low-latency token delivery
- Timeouts depend on model and router configuration
