import { addMinutes, compareDesc, format } from 'date-fns';

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

  const dateRangeOrder = compareDesc(from, to);

  if (dateRangeOrder === 0) return formatDateAndMonth(from);

  const orderedFrom = dateRangeOrder === 1 ? from : to;
  const orderedTo = dateRangeOrder === 1 ? to : from;

  const formattedFrom = formatDateAndMonth(orderedFrom);
  const formattedTo = formatDateAndMonth(orderedTo);
  return [formattedFrom, 'to', formattedTo].join(' ');
}

function getDateUTC(date: string | Date): Date {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return addMinutes(dateObj, dateObj.getTimezoneOffset());
}
