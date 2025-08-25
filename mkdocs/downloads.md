---
title: Downloads
description: Prebuilt binaries for running a ModelCloud node
---

# Downloads

Prebuilt binaries for the Go-based ModelCloud Node. Choose the asset that matches your platform and architecture.

## Latest release

- Visit the Releases page and download the appropriate archive for your system:
  - Linux: `mc-node-linux-amd64.tar.gz`, `mc-node-linux-arm64.tar.gz`
  - macOS: `mc-node-darwin-amd64.tar.gz`, `mc-node-darwin-arm64.tar.gz`
  - Windows: `mc-node-windows-amd64.zip`, `mc-node-windows-arm64.zip`

After download, extract the archive and run the binary. See Quickstart for environment variables and setup.

## How to run

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

## Requirements

- `MC_NODE_ID` and `MC_NODE_SECRET` are required.
- The node connects to HQ at `MC_GRPC_URL` (default `localhost:9090`).
- The runner uses llama.cpp's `llama-server`. Install it or set `MC_LLAMA_SERVER_BIN_PATH`.

For more details, see Quickstart.


