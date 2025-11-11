/**
 * Minimal Neynar REST API integration
 * Docs: https://docs.neynar.com/reference
 */

import { config } from "../../config";

const NEYNAR_API_URL = "https://api.neynar.com/v2/farcaster";

/**
 * Get recent casts from Neynar
 */
export async function getRecentCasts(fid?: number) {
  const url = new URL(`${NEYNAR_API_URL}/casts`);
  url.searchParams.set("limit", "5");
  if (fid) url.searchParams.set("fid", fid.toString());

  const res = await fetch(url, {
    headers: { api_key: config.neynarKey },
  });

  if (!res.ok) {
    console.error("Failed to fetch casts:", res.statusText);
    return [];
  }

  const data = await res.json();
  console.log(`✅ Retrieved ${data?.casts?.length || 0} casts`);
  return data.casts || [];
}

/**
 * Post demo content via Neynar (stub only)
 */
export async function postDemoCast(content: string) {
  console.log("🧩 Simulating Farcaster post:", content);
  // TODO: integrate Neynar POST /cast endpoint
  return { success: true, message: "Simulated post complete" };
}
