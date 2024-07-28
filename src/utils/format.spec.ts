import { formatDateAndMonth } from './format';

describe('Testing formatDateAndMonthFunction', () => {
  it('should return formatted date and month from Date', () => {
    const date = new Date('2024-01-01');
    const formattedDate = formatDateAndMonth(date);
    expect(formattedDate).toBe('Jan, 1st');
  });

  it('should return formatted date and month from string', () => {
    const date = '2024-01-01';
    const formattedDate = formatDateAndMonth(date);
    expect(formattedDate).toBe('Jan, 1st');
  });
});
