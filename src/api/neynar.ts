// Minimal Neynar API client placeholder
import { config } from "../../config";

export async function getUser(fid: number) {
  console.log(`Fetching user ${fid} from Neynar API...`);
  // TODO: integrate real HTTP client
  return { fid, username: "demo_user", status: "mock" };
}
