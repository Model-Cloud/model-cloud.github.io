# Run a Node

ModelCloud nodes earn by serving inference requests. High-level steps:

1. Register a node in the Console and copy your node ID/secret.
2. Install the node agent on your machine or server.
3. Authenticate with HQ and sync deployed models.
4. Pass health checks (latency, uptime) and start earning.

## Requirements
- Recent GPU drivers and sufficient VRAM for your models
- Stable network and power
- Optional: llama.cpp server if using that runner

## Tips
- Keep latency low: pin models, avoid swapping, prefer NVMe storage
- Maintain uptime for higher reputation and rewards
