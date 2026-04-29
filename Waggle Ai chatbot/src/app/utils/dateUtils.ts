import { parse, format, isWithinInterval, startOfMonth, endOfMonth, addDays, getMonth, getYear } from 'date-fns';
import { WeekOption } from '../types/ticket';

export const parseDate = (dateStr: string): Date => {
  if (!dateStr) return new Date(NaN);
  
  const cleaned = dateStr.trim();
  // YYYY-MM-DD
  const isoMatch = cleaned.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }
  // DD-MM-YYYY
  const dmyMatch = cleaned.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);
  if (dmyMatch) {
    const [, day, month, year] = dmyMatch;
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }
  
  return parse(dateStr, 'dd-MM-yyyy', new Date());
};

const monthOrder = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

export const getWeeksForMonth = (monthString: string): WeekOption[] => {
  if (monthString === 'all' || !monthString) return [];
  
  // Format is "january-2026"
  const [monthName, yearStr] = monthString.split('-');
  const monthIndex = monthOrder.indexOf(monthName.toLowerCase());
  const year = parseInt(yearStr) || 2026;
  
  if (monthIndex === -1) return [];

  const start = startOfMonth(new Date(year, monthIndex));
  const end = endOfMonth(new Date(year, monthIndex));
  
  const weeks: WeekOption[] = [];
  let currentStart = start;
  let weekIndex = 1;
  
  while (currentStart <= end) {
    let currentEnd = addDays(currentStart, 6);
    if (currentEnd > end) currentEnd = end;
    
    weeks.push({
      value: `${monthName}-week${weekIndex}`,
      label: `${monthName.charAt(0).toUpperCase() + monthName.slice(1, 3)} ${currentStart.getDate()}-${currentEnd.getDate()}`,
      startDate: currentStart,
      endDate: currentEnd
    });
    
    currentStart = addDays(currentEnd, 1);
    weekIndex++;
  }
  
  return weeks;
};

export const isDateInWeek = (date: Date, week: WeekOption): boolean => {
  if (isNaN(date.getTime())) return false;
  // Ensure the date is treated as midnight to match week starts/ends which are usually midnight
  const compareDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
  return compareDate >= week.startDate && compareDate <= week.endDate;
};

export const isDateInMonth = (date: Date, monthString: string): boolean => {
  if (monthString === 'all') return true;
  if (isNaN(date.getTime())) return false;
  
  const [monthName, yearStr] = monthString.split('-');
  const monthIndex = monthOrder.indexOf(monthName.toLowerCase());
  const year = parseInt(yearStr);
  
  return date.getMonth() === monthIndex && date.getFullYear() === year;
};

export const formatDate = (date: Date): string => {
  return format(date, 'MMM dd, yyyy');
};