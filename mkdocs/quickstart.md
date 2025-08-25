---
hide:
  - navigation
---

# Quickstart

This guide helps you make your first request to ModelCloud and run a node.

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

## 3. Run a node (prebuilt binaries)

1) Download a prebuilt asset from the [Downloads](downloads.md) page.

2) Extract the archive and set environment variables.

Linux/macOS:
```bash
tar -xzf mc-node-<os>-<arch>.tar.gz
export MC_NODE_ID="your-node-id"
export MC_NODE_SECRET="your-node-secret"
# Optional overrides
export MC_GRPC_URL="localhost:9090"
export MC_MODELS_DIR="/tmp/mc-models"
# If llama-server is not in PATH
# export MC_LLAMA_SERVER_BIN_PATH="/path/to/llama-server"
./mc-node-<os>-<arch>
```

Windows (PowerShell):
```powershell
Expand-Archive mc-node-windows-<arch>.zip
$env:MC_NODE_ID="your-node-id"
$env:MC_NODE_SECRET="your-node-secret"
$env:MC_GRPC_URL="localhost:9090"
$env:MC_MODELS_DIR="C:\\mc-models"
# If llama-server is not in PATH
# $env:MC_LLAMA_SERVER_BIN_PATH="C:\\path\\to\\llama-server.exe"
./mc-node-windows-<arch>.exe
```

Requirements:
- MC_NODE_ID and MC_NODE_SECRET are required
- HQ address is MC_GRPC_URL (default localhost:9090)
- llama.cpp `llama-server` must be installed or set MC_LLAMA_SERVER_BIN_PATH

## 4. Stream responses (optional)
Use `stream: true` to receive tokens as they are generated.

## 5. Next steps
- Review limits and timeouts
- Explore model catalog & BYO models
- Integrate SDKs (coming soon)
