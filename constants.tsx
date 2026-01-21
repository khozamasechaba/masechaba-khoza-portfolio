
import React from 'react';
import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Customer Sign-Up Optimization",
    company: "UCOOK",
    challenge: "Low conversion rate of 1.9% on customer sign-up journey",
    solution: "Leveraged PostHog analytics to redesign and optimize the sign-up flow",
    impact: "363% increase in conversion rate (1.9% → 8.8%)",
    tags: ["Data Analytics", "Conversion Optimization", "PostHog", "A/B Testing"]
  },
  {
    id: 2,
    title: "Real-Time Refund System",
    company: "Ozow",
    challenge: "48-hour refund processing time affecting customer satisfaction",
    solution: "Led development of real-time refund product",
    impact: "Reduced refund time from 48 hours to 60 minutes",
    tags: ["Payments", "Product Strategy", "Customer Experience"]
  },
  {
    id: 3,
    title: "Automated Recipe Management",
    company: "UCOOK",
    challenge: "Manual recipe management consuming 6 hours weekly",
    solution: "Designed and launched automated workflow integrating Jira, Notion, and Google Sheets",
    impact: "Eliminated 6 hours of manual work weekly",
    tags: ["Process Automation", "Integration", "Workflow Optimization"]
  },
  {
    id: 4,
    title: "Voucher Issuance Platform",
    company: "Ozow (Graduate Project)",
    challenge: "Need for scalable voucher issuance system",
    solution: "Developed product requirements and Figma prototypes for voucher API",
    impact: "Promoted to Junior Product Owner within 6 months",
    tags: ["API Design", "Figma Prototyping", "Product Documentation"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Product Management",
    items: ["Scrum", "Backlog Management", "Stakeholder Management"]
  },
  {
    category: "Analytics",
    items: ["PostHog", "Google Analytics 4", "BigQuery", "Microsoft Clarity"]
  },
  {
    category: "Tools",
    items: ["Jira", "Figma", "Notion"]
  },
  {
    category: "Technical",
    items: ["Python", "Java", "C#", "React.js"]
  }
];
