// Mock Base onchain event notifier
export function notifyEvent(event: string, data: unknown) {
  console.log(`🔔 Base Event: ${event}`, data);
}
