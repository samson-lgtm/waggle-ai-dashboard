import { 
  TicketData, 
  KPIMetrics, 
  IssueBreakdown, 
  ProductBreakdown, 
  ChannelDistribution,
  WeeklyEscalation,
  IssueAnalysis,
  SubIssueAnalysis,
  ProductCount,
  WeekOption
} from '../types/ticket';
import { parseDate, isDateInWeek, isDateInMonth, getWeeksForMonth } from './dateUtils';
import { format } from 'date-fns';

export const calculateKPIs = (data: TicketData[]): KPIMetrics => {
  const totalSessions = data.length;
  const botHandled = data.filter(d => d.handled === 'Bot').length;
  const humanHandled = data.filter(d => d.handled === 'Human').length;
  
  return {
    totalSessions,
    botHandled,
    humanHandled,
    botPercentage: totalSessions > 0 ? (botHandled / totalSessions) * 100 : 0,
    humanPercentage: totalSessions > 0 ? (humanHandled / totalSessions) * 100 : 0,
    escalationRate: totalSessions > 0 ? (humanHandled / totalSessions) * 100 : 0
  };
};

export const getChannelDistribution = (data: TicketData[]): ChannelDistribution[] => {
  const channelMap = new Map<string, number>();
  
  data.forEach(ticket => {
    // Combine Webchat and Webapp into Webapp
    const channelName = ticket.channel === 'Webchat' ? 'Webapp' : ticket.channel;
    const count = channelMap.get(channelName) || 0;
    channelMap.set(channelName, count + 1);
  });
  
  const total = data.length;
  
  return Array.from(channelMap.entries())
    .map(([channel, count]) => ({
      channel,
      count,
      percentage: total > 0 ? (count / total) * 100 : 0
    }))
    .sort((a, b) => b.count - a.count);
};

export const getProductBreakdown = (data: TicketData[]): ProductBreakdown[] => {
  // Only human-handled tickets
  const humanData = data.filter(d => d.handled === 'Human');
  const productMap = new Map<string, number>();
  
  humanData.forEach(ticket => {
    if (ticket.product && ticket.product.trim() !== '') {
      const count = productMap.get(ticket.product) || 0;
      productMap.set(ticket.product, count + 1);
    }
  });
  
  return Array.from(productMap.entries())
    .map(([product, count]) => ({ product, count }))
    .sort((a, b) => b.count - a.count);
};

export const getIssueBreakdown = (data: TicketData[], topN: number = 10): IssueBreakdown[] => {
  const issueMap = new Map<string, { bot: number; human: number }>();
  
  data.forEach(ticket => {
    if (ticket.issue && ticket.issue.trim() !== '') {
      const current = issueMap.get(ticket.issue) || { bot: 0, human: 0 };
      if (ticket.handled === 'Bot') {
        current.bot++;
      } else {
        current.human++;
      }
      issueMap.set(ticket.issue, current);
    }
  });
  
  return Array.from(issueMap.entries())
    .map(([issue, counts]) => ({
      issue,
      botCount: counts.bot,
      humanCount: counts.human,
      total: counts.bot + counts.human
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, topN);
};

export const getWeeklyEscalationRate = (data: TicketData[], monthFilter: string = 'february-2026'): WeeklyEscalation[] => {
  if (monthFilter === 'all') {
    // For "All Months", display the dynamic months
    const mSet = new Set<string>();
    data.forEach(t => {
      try {
        const d = parseDate(t.createdAt);
        if (!isNaN(d.getTime())) {
           mSet.add(`${format(d, 'MMM yyyy')}|${format(d, 'MMMM').toLowerCase()}-${d.getFullYear()}`);
        }
      } catch {}
    });
    
    const monthsData = Array.from(mSet).map(str => {
      const [name, val] = str.split('|');
      const monthData = data.filter(ticket => isDateInMonth(parseDate(ticket.createdAt), val));
      const totalSessions = monthData.length;
      const humanCount = monthData.filter(d => d.handled === 'Human').length;
      const escalationRate = totalSessions > 0 ? (humanCount / totalSessions) * 100 : 0;
      return {
        week: name,
        totalSessions,
        humanEscalations: humanCount,
        escalationRate
      };
    }).sort((a,b) => new Date(`1 ${a.week}`).getTime() - new Date(`1 ${b.week}`).getTime());
    
    return monthsData.filter(item => item.totalSessions > 0);
  } else {
    // For specific month, show weekly breakdown
    const weeks = getWeeksForMonth(monthFilter);
    return weeks.map(week => {
      const weekData = data.filter(ticket => {
        const ticketDate = parseDate(ticket.createdAt);
        return isDateInWeek(ticketDate, week);
      });
      
      const totalSessions = weekData.length;
      const humanCount = weekData.filter(d => d.handled === 'Human').length;
      const escalationRate = weekData.length > 0 ? (humanCount / weekData.length) * 100 : 0;
      
      return {
        week: week.label,
        totalSessions,
        humanEscalations: humanCount,
        escalationRate
      };
    });
  }
};

export const getIssueAnalysis = (data: TicketData[]): IssueAnalysis[] => {
  // Only human-handled tickets
  const humanData = data.filter(d => d.handled === 'Human');
  
  const issueMap = new Map<string, Map<string, Map<string, number>>>();
  
  humanData.forEach(ticket => {
    if (ticket.issue && ticket.issue.trim() !== '') {
      if (!issueMap.has(ticket.issue)) {
        issueMap.set(ticket.issue, new Map());
      }
      
      const subIssueMap = issueMap.get(ticket.issue)!;
      const subTypeKey = ticket.subType && ticket.subType.trim() !== '' ? ticket.subType : 'Other';
      
      if (!subIssueMap.has(subTypeKey)) {
        subIssueMap.set(subTypeKey, new Map());
      }
      
      const productMap = subIssueMap.get(subTypeKey)!;
      const productKey = ticket.product && ticket.product.trim() !== '' ? ticket.product : 'Unknown';
      productMap.set(productKey, (productMap.get(productKey) || 0) + 1);
    }
  });
  
  return Array.from(issueMap.entries())
    .map(([issue, subIssueMap]) => {
      const subIssues: SubIssueAnalysis[] = Array.from(subIssueMap.entries())
        .map(([subType, productMap]) => {
          const products: ProductCount[] = Array.from(productMap.entries())
            .map(([product, count]) => ({ product, count }))
            .sort((a, b) => b.count - a.count);
          
          const count = products.reduce((sum, p) => sum + p.count, 0);
          
          return {
            subType,
            count,
            products
          };
        })
        .sort((a, b) => b.count - a.count);
      
      const count = subIssues.reduce((sum, s) => sum + s.count, 0);
      
      return {
        issue,
        count,
        subIssues
      };
    })
    .sort((a, b) => b.count - a.count);
};

export const exportToCSV = (data: TicketData[], filename: string = 'analytics-export.csv') => {
  const headers = ['Channel', 'Created at', 'Product', 'Issue', 'Sub Type', 'Handled'];
  const csvContent = [
    headers.join(','),
    ...data.map(row => [
      row.channel,
      row.createdAt,
      row.product || '',
      row.issue || '',
      row.subType || '',
      row.handled
    ].join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};