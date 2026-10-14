/**
 * Time-aware default theme for BumiLoka.
 *
 * Schedule (device LOCAL time, not UTC/server time):
 * - Light Mode: 06:00 – 17:59 (pagi, siang, sore)
 * - Dark Mode:  18:00 – 05:59 (malam, dini hari)
 *
 * This schedule only provides the INITIAL default theme when the user has
 * never chosen one manually. A manual choice made via ThemeToggle always wins
 * and is never overwritten by the clock.
 *
 * NOTE: The schedule constants are duplicated in the inline anti-FOUC script
 * in `src/app/layout.tsx` (runs before hydration). Keep both in sync.
 */

export type ResolvedTheme = "light" | "dark";

/** Hour (local) when Light Mode starts. */
export const LIGHT_MODE_START_HOUR = 6;
/** Hour (local) when Dark Mode starts. */
export const DARK_MODE_START_HOUR = 18;

/**
 * Pure mapping from a local hour (0–23) to the default theme.
 * Invalid hours fall back to the safe default (light).
 */
export function getThemeForHour(hour: number): ResolvedTheme {
  if (hour >= LIGHT_MODE_START_HOUR && hour < DARK_MODE_START_HOUR) {
    return "light";
  }
  if (hour >= 0 && hour <= 23) {
    return "dark";
  }
  return "light";
}

/**
 * Time-based default theme using the local time of the given date
 * (defaults to "now"). Pure and testable — pass a mocked Date in tests.
 */
export function getTimeBasedTheme(now: Date = new Date()): ResolvedTheme {
  return getThemeForHour(now.getHours());
}

/**
 * Resolves the theme to apply at startup.
 *
 * Priority:
 * 1. Manual preference stored in localStorage ("light" | "dark") — always wins.
 * 2. Time-based default from the device's local time.
 * 3. Safe fallback (light) when the time cannot be determined.
 */
export function resolveThemePreference(
  storedValue: string | null | undefined,
  now?: Date
): ResolvedTheme {
  if (storedValue === "light" || storedValue === "dark") {
    return storedValue;
  }
  // No usable stored preference (null, legacy "system", or invalid value):
  // fall back to the time-based default.
  return getTimeBasedTheme(now);
}
