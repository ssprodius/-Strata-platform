export type ReadinessKeys = "companyProfile" | "metrics" | "documents" | "roadmap" | "investorStrategy";

export interface Company {
  id: string;
  name: string;
  country: string;
  website: string;
  sector: string;
  stage: string;
  arrRange: string;
  growthYoY: string;
  teamSize: number;
  markets: string[];
  pitchSummary: string;
  fundingTarget: number;
  preferredRoutes: string[];
  targetDilution: string;
  readiness: Record<ReadinessKeys, boolean>;
}

export interface RoadmapItem {
  id: string;
  title: string;
  durationWeeks: number;
  completed: boolean;
}

export interface FundingOption {
  id: string;
  name: string;
  speed: string;
  dilution: string;
  control: string;
  cost: string;
  bestFor: string;
}

export interface Investor {
  id: string;
  name: string;
  type: string;
  ticket: string;
  sectors: string[];
  geo: string[];
  valueAdd: string;
}

export interface PipelineItem {
  id: string;
  investorId: string;
  status: string;
  lastUpdate: string;
}

export interface DocumentItem {
  id: string;
  type: string;
  name: string;
  status: string;
}

export interface NotificationItem {
  id: string;
  text: string;
  type: string;
}
