// Centralized configuration loader
export const config = {
  neynarKey: process.env.NEYNAR_API_KEY || "",
  signerUUID: process.env.FARCASTER_SIGNER_UUID || "",
  baseRpcUrl: process.env.BASE_RPC_URL || "",
  logLevel: process.env.LOG_LEVEL || "info"
};

// Simple runtime check
if (!config.neynarKey) console.warn("⚠️  Missing NEYNAR_API_KEY in environment");
