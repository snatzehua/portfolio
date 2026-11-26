/** Public project periods use one year or an ascending span of years. */
export function isYearOnlyProjectPeriod(value: unknown): value is string {
  if (typeof value !== "string" || !/^[1-9]\d{3}(?:–[1-9]\d{3})?$/.test(value)) return false;
  const [start, end] = value.split("–").map(Number);
  return end === undefined || start < end;
}
