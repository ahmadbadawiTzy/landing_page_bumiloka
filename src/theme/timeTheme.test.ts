import { describe, expect, it } from "vitest";
import {
  getThemeForHour,
  getTimeBasedTheme,
  resolveThemePreference,
} from "./timeTheme";

describe("getThemeForHour", () => {
  it("uses light mode from 06:00 to 17:59", () => {
    for (const hour of [6, 9, 12, 15, 17]) {
      expect(getThemeForHour(hour)).toBe("light");
    }
  });

  it("uses dark mode from 18:00 to 05:59", () => {
    for (const hour of [18, 20, 23, 0, 2, 5]) {
      expect(getThemeForHour(hour)).toBe("dark");
    }
  });

  it("falls back to light for invalid hours", () => {
    expect(getThemeForHour(-1)).toBe("light");
    expect(getThemeForHour(24)).toBe("light");
    expect(getThemeForHour(Number.NaN)).toBe("light");
  });
});

describe("getTimeBasedTheme", () => {
  it("reads the local hour from the given date", () => {
    // Dates are constructed in local time, so getHours() is deterministic
    // regardless of the machine's timezone.
    expect(getTimeBasedTheme(new Date(2026, 0, 15, 10, 0))).toBe("light");
    expect(getTimeBasedTheme(new Date(2026, 5, 15, 17, 59))).toBe("light");
    expect(getTimeBasedTheme(new Date(2026, 5, 15, 18, 0))).toBe("dark");
    expect(getTimeBasedTheme(new Date(2026, 5, 15, 3, 30))).toBe("dark");
  });
});

describe("resolveThemePreference", () => {
  it("prefers a stored manual choice over the time-based default", () => {
    // 10:00 would default to light, but a stored dark choice wins.
    expect(resolveThemePreference("dark", new Date(2026, 0, 1, 10, 0))).toBe(
      "dark"
    );
    // 20:00 would default to dark, but a stored light choice wins.
    expect(resolveThemePreference("light", new Date(2026, 0, 1, 20, 0))).toBe(
      "light"
    );
  });

  it("uses the time-based default when nothing is stored", () => {
    expect(resolveThemePreference(null, new Date(2026, 0, 1, 10, 0))).toBe(
      "light"
    );
    expect(resolveThemePreference(null, new Date(2026, 0, 1, 20, 0))).toBe(
      "dark"
    );
    expect(resolveThemePreference(undefined, new Date(2026, 0, 1, 20, 0))).toBe(
      "dark"
    );
  });

  it("treats legacy or invalid stored values as 'no preference'", () => {
    // Legacy "system" values from the old implementation resolve via time.
    expect(resolveThemePreference("system", new Date(2026, 0, 1, 10, 0))).toBe(
      "light"
    );
    expect(resolveThemePreference("system", new Date(2026, 0, 1, 20, 0))).toBe(
      "dark"
    );
    expect(resolveThemePreference("blue", new Date(2026, 0, 1, 20, 0))).toBe(
      "dark"
    );
  });
});
