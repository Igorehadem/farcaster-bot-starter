// Farcaster Frame handler (placeholder)
export async function handleFrameRequest(payload: any) {
  console.log("📨 Frame interaction received:", payload);
  return { success: true, echo: payload };
}
