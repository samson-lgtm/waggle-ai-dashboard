export interface TicketData {
  channel: string;
  createdAt: string;
  product: string;
  issue: string;
  subType: string;
  handled: string;
}

export interface WeekOption {
  value: string;
  label: string;
  startDate: Date;
  endDate: Date;
}

export interface KPIMetrics {
  totalSessions: number;
  botHandled: number;
  humanHandled: number;
  botPercentage: number;
  humanPercentage: number;
  escalationRate: number;
}

export interface IssueBreakdown {
  issue: string;
  botCount: number;
  humanCount: number;
  total: number;
}

export interface ProductBreakdown {
  product: string;
  count: number;
}

export interface ChannelDistribution {
  channel: string;
  count: number;
  percentage: number;
}

export interface WeeklyEscalation {
  week: string;
  totalSessions: number;
  humanEscalations: number;
  escalationRate: number;
}

export interface IssueAnalysis {
  issue: string;
  count: number;
  subIssues: SubIssueAnalysis[];
}

export interface SubIssueAnalysis {
  subType: string;
  count: number;
  products: ProductCount[];
}

export interface ProductCount {
  product: string;
  count: number;
}