/**
 * Generate unique GUID/UUID (if invoked no more than once per millisecond)
 */
export function generateUUID(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
