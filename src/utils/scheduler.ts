// Simple scheduler utility
export function runInterval(task: () => void, ms: number) {
  console.log(`⏱️  Scheduler started: every ${ms}ms`);
  setInterval(task, ms);
}
