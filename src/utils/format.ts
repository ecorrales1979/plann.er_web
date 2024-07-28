import { addMinutes, format } from 'date-fns';

export function formatDateAndMonth(date: Date | string) {
  const adjustedDate = getDateUTC(date);
  return format(adjustedDate, "LLL', 'do", {});
}

export function formatDateAndMonthRange({
  from,
  to,
}: {
  from?: Date | string;
  to?: Date | string;
}) {
  if (!from || !to) return '';

  const formattedFrom = formatDateAndMonth(from);
  const formattedTo = formatDateAndMonth(to);
  return [formattedFrom, 'to', formattedTo].join(' ');
}

function getDateUTC(date: string | Date): Date {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  console.log(dateObj.getTimezoneOffset());
  return addMinutes(dateObj, dateObj.getTimezoneOffset());
}
