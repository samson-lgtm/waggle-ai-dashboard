import { parse, startOfWeek, endOfWeek, format, isWithinInterval } from 'date-fns';
import { WeekOption } from '../types/ticket';

export const parseDate = (dateStr: string): Date => {
  // Parse date in DD-MM-YYYY format
  return parse(dateStr, 'dd-MM-yyyy', new Date());
};

export const getWeeksInJanuary2026 = (): WeekOption[] => {
  const weeks: WeekOption[] = [];
  
  // Define specific week ranges for January 2026
  const weekRanges = [
    { start: new Date(2026, 0, 1), end: new Date(2026, 0, 7) },   // Jan 1-7
    { start: new Date(2026, 0, 8), end: new Date(2026, 0, 14) },  // Jan 8-14
    { start: new Date(2026, 0, 15), end: new Date(2026, 0, 21) }, // Jan 15-21
    { start: new Date(2026, 0, 22), end: new Date(2026, 0, 31) }  // Jan 22-31
  ];
  
  weekRanges.forEach((range, index) => {
    const startDay = range.start.getDate();
    const endDay = range.end.getDate();
    
    weeks.push({
      value: `jan-week${index + 1}`,
      label: `Jan ${startDay}-${endDay}`,
      startDate: range.start,
      endDate: range.end
    });
  });
  
  return weeks;
};

export const getWeeksInFebruary2026 = (): WeekOption[] => {
  const weeks: WeekOption[] = [];
  
  // Define specific week ranges for February 2026
  const weekRanges = [
    { start: new Date(2026, 1, 1), end: new Date(2026, 1, 7) },   // Feb 1-7
    { start: new Date(2026, 1, 8), end: new Date(2026, 1, 14) },  // Feb 8-14
    { start: new Date(2026, 1, 15), end: new Date(2026, 1, 21) }, // Feb 15-21
    { start: new Date(2026, 1, 22), end: new Date(2026, 1, 28) }  // Feb 22-28
  ];
  
  weekRanges.forEach((range, index) => {
    const startDay = range.start.getDate();
    const endDay = range.end.getDate();
    
    weeks.push({
      value: `feb-week${index + 1}`,
      label: `Feb ${startDay}-${endDay}`,
      startDate: range.start,
      endDate: range.end
    });
  });
  
  return weeks;
};

export const getWeeksInMarch2026 = (): WeekOption[] => {
  const weeks: WeekOption[] = [];
  
  // Define specific week ranges for March 2026 (consistent 7-day blocks like Jan & Feb)
  const weekRanges = [
    { start: new Date(2026, 2, 1),  end: new Date(2026, 2, 7)  },  // Mar 1-7
    { start: new Date(2026, 2, 8),  end: new Date(2026, 2, 14) },  // Mar 8-14
    { start: new Date(2026, 2, 15), end: new Date(2026, 2, 21) },  // Mar 15-21
    { start: new Date(2026, 2, 22), end: new Date(2026, 2, 31) },  // Mar 22-31
  ];
  
  weekRanges.forEach((range, index) => {
    const startDay = range.start.getDate();
    const endDay = range.end.getDate();
    
    weeks.push({
      value: `mar-week${index + 1}`,
      label: `Mar ${startDay}-${endDay}`,
      startDate: range.start,
      endDate: range.end
    });
  });
  
  return weeks;
};

export const getWeeksForMonth = (month: 'january' | 'february' | 'march' | 'all'): WeekOption[] => {
  if (month === 'january') return getWeeksInJanuary2026();
  if (month === 'february') return getWeeksInFebruary2026();
  if (month === 'march') return getWeeksInMarch2026();
  return [...getWeeksInJanuary2026(), ...getWeeksInFebruary2026(), ...getWeeksInMarch2026()];
};

export const isDateInWeek = (date: Date, week: WeekOption): boolean => {
  return isWithinInterval(date, { start: week.startDate, end: week.endDate });
};

export const isDateInMonth = (date: Date, month: 'january' | 'february' | 'march' | 'all'): boolean => {
  if (month === 'all') return true;
  const monthIndex = month === 'january' ? 0 : month === 'february' ? 1 : 2;
  return date.getMonth() === monthIndex && date.getFullYear() === 2026;
};

export const formatDate = (date: Date): string => {
  return format(date, 'MMM dd, yyyy');
};