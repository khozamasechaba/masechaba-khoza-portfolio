
import { Project, Experience, Skill, Certification, JoyItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ucook-signup',
    title: "Sign Up Journey Redesign",
    company: "UCOOK",
    summary: "Led the end-to-end redesign of the customer sign-up funnel, transforming a high-friction experience into a streamlined, mobile-first journey.",
    value: "5x increase in conversion rate (1.7% → ~9.0%) within first week of launch",
    problem: "The existing funnel had a critically low conversion rate of ~1.7%. 93.5% of users abandoned after the 'Create Account' step, with a 90% abandonment rate on mobile devices.",
    discovery: "Conducted multi-path funnel analysis using PostHog and session recordings. Identified key friction points at the address entry step and a lack of visual progress indicators.",
    solution: "Redesigned the sign-up flow (Plans Page → Confirmation) with a clear progress bar, mobile-first UX, and automated re-engagement via a three-stream CRM email series.",
    implementation: "Coordinated a 5-team go-live (Product, Tech, CS, Logistics, CRM) over a 6-week window, including a robust rollback strategy and Day 0 monitoring.",
    results: "Achieved a peak ~9% conversion rate. Recovered 64 customers in the first week through automated abandonment series (~58% email open rate).",
    icon: 'UserPlus',
    artifacts: [
      { type: 'process-flow', label: 'Funnel Analysis' },
      { type: 'wireframe', label: 'Mobile-First UI' }
    ],
    backlog: ["Deep-dive mobile address UX", "A/B test abandonment email timing", "Resolve unsupported address waitlist"],
    tags: ["Conversion", "Mobile UX", "CRM Automation"]
  },
  {
    id: 'ucook-cj-optimization',
    title: "Customer Journey Optimisation",
    company: "UCOOK",
    summary: "Led a comprehensive discovery and validation project to map, prioritise, and solve friction across the entire UCOOK customer lifecycle.",
    value: "Identified a 72.4% funnel drop-off and synthesised 111,000+ data points into an 8-initiative strategic roadmap.",
    problem: "UCOOK was experiencing friction across the entire customer journey — from first touchpoint to reactivation — but lacked an evidence-based picture of where to fix first.",
    discovery: "Synthesised insights from 6 distinct data sources (GA4, NPS, Zendesk, Clarity heatmaps). Facilitated cross-functional workshops with 7+ stakeholders using the Double Diamond framework.",
    solution: "Developed a RICE-prioritised roadmap of 8 must-have initiatives (M1-M8), sequenced across 4 waves focusing on self-service enablement, billing transparency, and delivery reliability.",
    implementation: "Produced a full 45-page PRD, Miro board plan, and stakeholder presentation for Exco sign-off. Managed cross-functional alignment across Engineering, Marketing, CX, and Operations.",
    results: "Secured business alignment for a major consumer-facing redesign. Identified pricing-driven pauses (5.5x surge) as a leading churn indicator.",
    icon: 'TrendingUp',
    artifacts: [
      { type: 'process-flow', label: 'Customer Journey Map' },
      { type: 'dashboard', label: 'Pain Point Matrix' }
    ],
    backlog: ["Quarterly journey benchmarking", "Demographic data enrichment", "Post-delivery CSAT capture"],
    tags: ["Product Strategy", "Discovery", "Roadmapping"]
  },
  {
    id: 'ucook-meal-kit',
    title: "Meal Kit Uploader",
    company: "UCOOK",
    summary: "Automating the meal kit data management process.",
    value: "Eliminated 6 hours of manual work weekly.",
    problem: "Manual recipe management was time-consuming and prone to errors.",
    discovery: "Internal audit showed 6 hours spent weekly on manual data entry.",
    solution: "Developed an automated uploader tool integrating Jira and Notion.",
    implementation: "Coming soon - Detailed implementation steps being documented.",
    results: "Coming soon - Post-launch metrics.",
    icon: 'Zap',
    artifacts: [
      { type: 'process-flow', label: 'Automation Flow' }
    ],
    backlog: ["Integration with supplier portal"],
    tags: ["Automation", "Internal Tools"]
  },
  {
    id: 'ucook-yoyo',
    title: "Yoyo Rewards",
    company: "UCOOK",
    summary: "Integrating Yoyo rewards into the UCOOK ecosystem.",
    value: "Coming soon - Measuring impact on customer retention.",
    problem: "Need for a robust loyalty program to drive repeat purchases.",
    discovery: "Coming soon - Researching customer loyalty patterns.",
    solution: "Integrated Yoyo Rewards API for seamless point earning and redemption.",
    implementation: "Coming soon - Technical integration details.",
    results: "Coming soon - Post-launch metrics.",
    icon: 'Gift',
    artifacts: [
      { type: 'other', label: 'Loyalty Rewards' }
    ],
    backlog: ["Tiered rewards system"],
    tags: ["Loyalty", "API Integration"]
  },
  {
    id: 'ucook-knowledge',
    title: "Knowledge Hub",
    company: "UCOOK",
    summary: "Centralizing product knowledge for internal stakeholders.",
    value: "Improved cross-departmental alignment.",
    problem: "Fragmented product documentation leading to communication gaps.",
    discovery: "Coming soon - Stakeholder interviews on information access.",
    solution: "Built a centralized Knowledge Hub using Notion and custom internal tools.",
    implementation: "Coming soon - Content strategy and tool selection.",
    results: "Coming soon - Internal satisfaction scores.",
    icon: 'Library',
    artifacts: [
      { type: 'other', label: 'Knowledge Architecture' }
    ],
    backlog: ["Search optimization"],
    tags: ["Documentation", "Product Ops"]
  },
  {
    id: 'ozow-bulk',
    title: "Bulk Payouts",
    company: "Ozow",
    summary: "Enabling businesses to process multiple payouts simultaneously.",
    value: "Coming soon - Scalability metrics.",
    problem: "Businesses struggled with manual one-by-one payout processing.",
    discovery: "Coming soon - Market research on B2B payout needs.",
    solution: "Designed a bulk payout API and dashboard for enterprise clients.",
    implementation: "Coming soon - API design and security protocols.",
    results: "Coming soon - Adoption rates among enterprise clients.",
    icon: 'Layers',
    artifacts: [
      { type: 'dashboard', label: 'Payout Dashboard' }
    ],
    backlog: ["Scheduled payouts"],
    tags: ["Fintech", "B2B", "API"]
  },
  {
    id: 'ozow-refunds',
    title: "Real Time Refunds",
    company: "Ozow",
    summary: "Reducing refund processing time from days to minutes.",
    value: "Reduced refund time from 48 hours to 60 minutes.",
    problem: "Long refund wait times were the #1 customer complaint.",
    discovery: "Customer support data showed high volume of refund status queries.",
    solution: "Developed a real-time refund product using instant EFT technology.",
    implementation: "Coming soon - Banking integration details.",
    results: "40% reduction in refund-related support tickets.",
    icon: 'RotateCcw',
    artifacts: [
      { type: 'process-flow', label: 'Refund Flow' }
    ],
    backlog: ["Automated partial refunds"],
    tags: ["Payments", "CX"]
  },
  {
    id: 'ozow-voucher',
    title: "Voucher Issuing",
    company: "Ozow",
    summary: "A scalable system for issuing and managing digital vouchers.",
    value: "Promoted to Junior Product Owner within 6 months.",
    problem: "Lack of a standardized way to issue digital vouchers at scale.",
    discovery: "Coming soon - Prototyping and user testing.",
    solution: "Created a voucher API and management interface.",
    implementation: "Coming soon - Figma prototypes and requirements.",
    results: "Coming soon - Successful pilot program results.",
    icon: 'Ticket',
    artifacts: [
      { type: 'other', label: 'Voucher Engine' }
    ],
    backlog: ["Multi-currency support"],
    tags: ["API", "Prototyping"]
  },
  {
    id: 'ozow-absa',
    title: "Absa API",
    company: "Ozow",
    summary: "Integrating with Absa's banking API for enhanced payment services.",
    value: "Coming soon - Transaction success rate improvements.",
    problem: "Coming soon - Identifying integration bottlenecks.",
    discovery: "Coming soon - Technical deep dive into Absa API capabilities.",
    solution: "Seamless integration with Absa's API for real-time transaction verification.",
    implementation: "Coming soon - Security and compliance handling.",
    results: "Coming soon - Performance metrics.",
    icon: 'Landmark',
    artifacts: [
      { type: 'other', label: 'API Integration' }
    ],
    backlog: ["Support for more banking features"],
    tags: ["Banking", "Integration"]
  },
  {
    id: 'thrift-yours-wp',
    title: "Eco-commerce Platform",
    company: "Thrift Yours",
    summary: "Built and managed a circular fashion marketplace, taking a 0-to-1 approach to sustainable eCommerce operations.",
    value: "Rapid MoM user acquisition and inventory turnover through digital-first curated experience.",
    problem: "High friction in the resale process (listing, trust, logistics) and fragmented supply in the local circular fashion market.",
    discovery: "Identified a market gap for frictionless 'thrift-to-door' experiences. Observed customer friction indirectly through operational failures and UX gaps.",
    solution: "Developed a custom WordPress/WooCommerce site with localized logistics, payments, and delivery. Refined checkout fields and navigation hierarchy based on behavioral inference.",
    implementation: "Founder-led implementation managing WooCommerce architecture, plugin debugging, and cross-system integration (logistics + product).",
    results: "Validated product-market fit via Lean MVP, transitioning from simple sales to a managed marketplace model.",
    icon: 'Globe',
    artifacts: [
      { type: 'process-flow', label: 'Operational Workflows' }
    ],
    backlog: ["Formal analytics instrumentation", "Enterprise stakeholder storytelling", "Marketplace expansion"],
    tags: ["0-to-1", "WooCommerce", "Circular Economy"]
  },
  {
    id: 'thrift-yours-ai',
    title: "AI Product Ingestion Pipeline",
    company: "Thrift Yours",
    summary: "Leveraging AI to automate the bottleneck of manual catalog creation and product enrichment.",
    value: "Pioneered a data-driven inventory management system that increased stock turnover scalability.",
    problem: "Manual product enrichment was slow, inconsistent, and operationally expensive, limiting catalog growth velocity.",
    discovery: "Identified manual catalog creation as the primary blocker to scaling the managed marketplace model.",
    solution: "Built an AI-assisted ingestion pipeline using Gemini API to convert product images into structured WooCommerce-ready data.",
    implementation: "Designed and implemented automated workflows for content generation and image-to-product-detail pipelines.",
    results: "Enabled rapid catalog expansion through AI-native workflow design and reduced manual processing time.",
    icon: 'Bot',
    artifacts: [
      { type: 'process-flow', label: 'AI Workflow' }
    ],
    backlog: ["Automated pricing suggestions", "Batch processing improvements"],
    tags: ["AI-Native", "Automation", "Scalability"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'thrift-yours',
    company: "Thrift Yours",
    role: "Founder & Product Lead",
    industry: "Sustainability & eCommerce",
    focusArea: "0-to-1 Product Ownership & Operations",
    period: "Dec 2025 - Present",
    description: "Built and operated a digital commerce venture as a full-stack product laboratory. Defined product vision, architected scalable e-commerce workflows (WooCommerce), and implemented AI-assisted product ingestion pipelines using the Gemini API.",
    isPassionProject: true
  },
  {
    id: 'ucook',
    company: "UCOOK",
    role: "Product Manager",
    industry: "eCommerce & FoodTech",
    focusArea: "Strategic Discovery & Growth Optimisation",
    period: "Oct 2024 - Present",
    description: "Leading end-to-end product lifecycle for South Africa's leading meal-kit brand. Specialist in acquisition funnel optimisation, data-driven discovery, and cross-functional leadership across Product, Engineering, Marketing, and Operations."
  },
  {
    id: 'ozow',
    company: "Ozow",
    role: "Junior Product Owner",
    industry: "Fintech & Payments",
    focusArea: "Refunds, Payouts, and API Integrations",
    period: "Sep 2023 - Sep 2024",
    description: "Focused on improving the payment experience for both merchants and end-users through innovative fintech solutions."
  }
];

export const SKILLS: Skill[] = [
  {
    name: "Conversion Funnel Optimisation",
    description: "Directly linking product decisions to revenue through multi-step conversion analysis and device-level optimisation.",
    category: "Product"
  },
  {
    name: "Data-Driven Discovery",
    description: "Synthesising insights from 100k+ data points (PostHog, GA4, NPS, CS tickets) to identify high-leverage product opportunities.",
    category: "Technical"
  },
  {
    name: "Cross-Functional Leadership",
    description: "Orchestrating multi-team go-lives (Product, Tech, CX, Marketing, Logistics) with robust risk management frameworks.",
    category: "Leadership"
  },
  {
    name: "AI & Automation",
    description: "Designing AI-native workflows (Gemini API) and internal tools to solve operational bottlenecks and scale catalog growth.",
    category: "Technical"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Bachelor of Science in Computer Science and Computer Engineering",
    issuer: "Major University",
    year: "Graduated"
  },
  {
    name: "NedRock Product Discovery Scholarship",
    issuer: "Product Leadership Accelerator (PLA)",
    year: "2026"
  },
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    year: "2023"
  },
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    year: "2022"
  }
];

export const JOY: JoyItem[] = [
  {
    title: "Podcast",
    description: "Exploring stories and insights through audio storytelling.",
    icon: 'Mic'
  },
  {
    title: "Thrifting",
    description: "Finding unique pre-loved treasures and promoting sustainable fashion.",
    icon: 'Shirt'
  },
  {
    title: "Retro Gaming",
    description: "Reliving the classics and appreciating the history of game design.",
    icon: 'Gamepad'
  },
  {
    title: "Whimsical Mug Collection",
    description: "Collecting mugs that bring a little extra joy to every cup of coffee.",
    icon: 'Coffee'
  }
];
