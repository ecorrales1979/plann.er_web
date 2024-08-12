import { formatDateAndMonth, formatDateAndMonthRange } from './format';

const date1Str = '2024-01-01';
const date1 = new Date(date1Str);
const date2Str = '2024-01-20';
const date2 = new Date(date2Str);

describe('Testing formatDateAndMonth function', () => {
  it('should return formatted date and month from Date', () => {
    const formattedDate = formatDateAndMonth(date1);
    expect(formattedDate).toBe('Jan, 1st');
  });

  it('should return formatted date and month from string', () => {
    const formattedDate = formatDateAndMonth(date1Str);
    expect(formattedDate).toBe('Jan, 1st');
  });

  it('Should return error if param string is not valid', () => {
    function formatDateAndMonthError() {
      return formatDateAndMonth('2024-01-32');
    }
    expect(formatDateAndMonthError).toThrow('Error formatting date:');
  });
});

describe('Testing formatDateAndMonthRange function', () => {
  it('should return formatted date and month range from Date', () => {
    const formattedDate = formatDateAndMonthRange({ from: date1, to: date2 });
    expect(formattedDate).toBe('Jan, 1st to Jan, 20th');
  });

  it('should return formatted date and month range from string', () => {
    const formattedDate = formatDateAndMonthRange({
      from: date1Str,
      to: date2Str,
    });
    expect(formattedDate).toBe('Jan, 1st to Jan, 20th');
  });

  it('should return empty string when one of range dates is missing', () => {
    const formattedDate = formatDateAndMonthRange({
      to: '',
      from: date1Str,
    });
    expect(formattedDate).toBe('');
  });

  it('should order range correctly when from date is grater than to date', () => {
    const formattedDate = formatDateAndMonthRange({
      from: date2Str,
      to: date1Str,
    });
    expect(formattedDate).toBe('Jan, 1st to Jan, 20th');
  });

  it('should return a single date when dates in range are equals', () => {
    const formattedDate = formatDateAndMonthRange({
      from: date1Str,
      to: date1Str,
    });
    expect(formattedDate).toBe('Jan, 1st');
  });
});
