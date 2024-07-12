import { format } from "date-fns";

export function formatDateAndMonth(date: Date) {
  return format(date, "LLL', 'do");
}

export function formatDateAndMonthRange({
  from,
  to,
}: {
  from?: Date;
  to?: Date;
}) {
  if (!from || !to) return "";

  const formattedFrom = formatDateAndMonth(from);
  const formattedTo = formatDateAndMonth(to);
  return [formattedFrom, "to", formattedTo].join(" ");
}
