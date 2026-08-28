import { useState } from "react";

/**
 * Returns today's day-of-week index (0 = Sunday … 6 = Saturday).
 * Used purely as a progressive enhancement to highlight the current day in
 * the hours table — the table itself is complete, static markup, so the
 * schedule stays fully readable without this JavaScript-driven highlight.
 */
export function useCurrentDayIndex(): number {
  const [dayIndex] = useState(() => new Date().getDay());
  return dayIndex;
}
