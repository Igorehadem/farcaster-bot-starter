/* Farcaster Bot Starter – placeholder for future Neynar/Warpcast integration */
import 'dotenv/config';

function nowISO() {
  return new Date().toISOString();
}

function main() {
  const interval = Number(process.env.POST_INTERVAL_MINUTES || 60);
  console.log("👋 Farcaster Bot Starter initialized at", nowISO());
  console.log("Configured interval (minutes):", interval);
}

main();
