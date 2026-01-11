import companyData from "../mock/company.json";
import roadmap from "../mock/roadmap.json";
import fundingOptions from "../mock/fundingOptions.json";
import investors from "../mock/investors.json";
import pipeline from "../mock/pipeline.json";
import documents from "../mock/documents.json";
import notifications from "../mock/notifications.json";
import type {
  Company,
  DocumentItem,
  FundingOption,
  Investor,
  NotificationItem,
  PipelineItem,
  RoadmapItem,
} from "../types";

export const company: Company = companyData;
export const roadmapItems: RoadmapItem[] = roadmap;
export const fundingOptionList: FundingOption[] = fundingOptions;
export const investorList: Investor[] = investors;
export const pipelineItems: PipelineItem[] = pipeline;
export const documentList: DocumentItem[] = documents;
export const notificationList: NotificationItem[] = notifications;

export function readinessPercent(readiness: Company["readiness"]): number {
  const total = Object.keys(readiness).length;
  const done = Object.values(readiness).filter(Boolean).length;
  return Math.round((done / total) * 100);
}
