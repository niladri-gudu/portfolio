export type Season = {
  key: string;
  name: string;
  emoji: string;
  from: { month: number; day: number };
  to: { month: number; day: number };
};

export const SEASONS: Season[] = [
  {
    key: "winter",
    name: "Winter",
    emoji: "❄️",
    from: { month: 12, day: 1 },
    to: { month: 2, day: 28 },
  },
  {
    key: "spring",
    name: "Spring",
    emoji: "🌱",
    from: { month: 3, day: 1 },
    to: { month: 4, day: 30 },
  },
  {
    key: "summer",
    name: "Summer",
    emoji: "☀️",
    from: { month: 5, day: 1 },
    to: { month: 6, day: 30 },
  },
  {
    key: "monsoon",
    name: "Monsoon",
    emoji: "☔",
    from: { month: 7, day: 1 },
    to: { month: 9, day: 30 },
  },
  {
    key: "autumn",
    name: "Autumn",
    emoji: "🍂",
    from: { month: 10, day: 1 },
    to: { month: 11, day: 30 },
  },
];

function inWindow(
  date: Date,
  from: { month: number; day: number },
  to: { month: number; day: number }
): boolean {
  const current = date.getMonth() + 1;
  const today = date.getDate();

  const wraps = from.month > to.month;

  const inRange = wraps
    ? current >= from.month || current <= to.month
    : current >= from.month && current <= to.month;

  if (!inRange) return false;
  if (current === from.month && today < from.day) return false;
  if (current === to.month && today > to.day) return false;
  return true;
}

export function getSeason(date: Date = new Date()): Season | null {
  return SEASONS.find((s) => inWindow(date, s.from, s.to)) ?? null;
}
