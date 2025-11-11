import { getRecentCasts, postDemoCast } from "./api/neynar";
import { config } from "../config";

async function main() {
  console.log(`[INIT] Farcaster Bot Starter (API=${config.neynarKey ? "✓" : "✗"})`);
  const casts = await getRecentCasts();
  console.log("Recent casts:", casts.length);
  await postDemoCast("Hello from Farcaster Bot Starter demo 🚀");
}

main();
