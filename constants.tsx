
import { Project, Experience, Skill, Certification, JoyItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ucook-signup',
    title: "Sign Up Journey",
    company: "UCOOK",
    summary: "Optimizing the customer sign-up journey to improve conversion rates.",
    value: "363% increase in conversion rate (1.9% → 8.8%)",
    problem: "Low conversion rate of 1.9% on customer sign-up journey due to friction points.",
    discovery: "Used PostHog to identify drop-off points in the multi-step form.",
    solution: "Redesigned the sign-up flow to be more intuitive and reduced required fields.",
    implementation: "Collaborated with engineering to implement a phased rollout and A/B testing.",
    results: "Significant uplift in new customer acquisition and reduced acquisition cost.",
    artifacts: [
      { type: 'wireframe', imageUrl: 'https://picsum.photos/seed/pencil-sketch-wireframe/800/600?grayscale', label: 'Initial Wireframes' },
      { type: 'process-flow', imageUrl: 'https://picsum.photos/seed/pencil-sketch-flow/800/600?grayscale', label: 'Optimized Flow' }
    ],
    backlog: ["Social login integration", "Progressive profiling"],
    previewImage: "https://picsum.photos/seed/pencil-sketch-1/600/400?grayscale",
    tags: ["Conversion", "Analytics", "UX"]
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
    artifacts: [],
    backlog: ["Integration with supplier portal"],
    previewImage: "https://picsum.photos/seed/pencil-sketch-2/600/400?grayscale",
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
    artifacts: [],
    backlog: ["Tiered rewards system"],
    previewImage: "https://picsum.photos/seed/pencil-sketch-3/600/400?grayscale",
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
    artifacts: [],
    backlog: ["Search optimization"],
    previewImage: "https://picsum.photos/seed/pencil-sketch-4/600/400?grayscale",
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
    artifacts: [],
    backlog: ["Scheduled payouts"],
    previewImage: "https://picsum.photos/seed/pencil-sketch-5/600/400?grayscale",
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
    artifacts: [],
    backlog: ["Automated partial refunds"],
    previewImage: "https://picsum.photos/seed/pencil-sketch-6/600/400?grayscale",
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
    artifacts: [],
    backlog: ["Multi-currency support"],
    previewImage: "https://picsum.photos/seed/pencil-sketch-7/600/400?grayscale",
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
    artifacts: [],
    backlog: ["Support for more banking features"],
    previewImage: "https://picsum.photos/seed/pencil-sketch-8/600/400?grayscale",
    tags: ["Banking", "Integration"]
  },
  {
    id: 'thrift-yours-wp',
    title: "WordPress website",
    company: "Thrift Yours",
    summary: "Building a sustainable eCommerce platform for pre-loved fashion.",
    value: "Launched a fully functional eCommerce store.",
    problem: "Need for an affordable and scalable platform for a startup.",
    discovery: "Coming soon - Platform comparison (Shopify vs WordPress).",
    solution: "Developed a custom WordPress/WooCommerce site with tailored UX.",
    implementation: "Coming soon - Theme customization and plugin integration.",
    results: "Coming soon - Initial sales and traffic data.",
    artifacts: [],
    backlog: ["Mobile app development"],
    previewImage: "https://picsum.photos/seed/pencil-sketch-9/600/400?grayscale",
    tags: ["eCommerce", "WordPress"]
  },
  {
    id: 'thrift-yours-ai',
    title: "AI Product Enrichment App",
    company: "Thrift Yours",
    summary: "Using AI to automate product descriptions and categorization.",
    value: "Coming soon - Time saved per product listing.",
    problem: "Manual product enrichment was slow and inconsistent.",
    discovery: "Coming soon - Exploring Gemini API for image-to-text.",
    solution: "Built an AI-powered app that generates product data from photos.",
    implementation: "Coming soon - Integration with Gemini and WooCommerce.",
    results: "Coming soon - Accuracy and speed metrics.",
    artifacts: [],
    backlog: ["Automated pricing suggestions"],
    previewImage: "https://picsum.photos/seed/pencil-sketch-10/600/400?grayscale",
    tags: ["AI", "Gemini", "Automation"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'thrift-yours',
    company: "Thrift Yours",
    role: "Founder & Product Lead",
    industry: "Sustainability & eCommerce",
    focusArea: "End-to-End Product Management & Operations",
    period: "2023 - Present",
    description: "Built the eCommerce platform using WordPress and WooCommerce. Managing all business operations, from sourcing to fulfillment, for the resale of thrifted clothes and homeware.",
    isPassionProject: true
  },
  {
    id: 'ucook',
    company: "UCOOK",
    role: "Product Owner",
    industry: "eCommerce & FoodTech",
    focusArea: "Growth, Conversion, and Internal Tooling",
    period: "2023 - Present",
    description: "Driving growth through data-driven experiments and automating internal processes to scale operations."
  },
  {
    id: 'ozow',
    company: "Ozow",
    role: "Junior Product Owner",
    industry: "Fintech & Payments",
    focusArea: "Refunds, Payouts, and API Integrations",
    period: "2022 - 2023",
    description: "Focused on improving the payment experience for both merchants and end-users through innovative fintech solutions."
  }
];

export const SKILLS: Skill[] = [
  {
    name: "Product Strategy",
    description: "Defining product vision and roadmaps based on market research and business goals.",
    category: "Product"
  },
  {
    name: "Data Analytics",
    description: "Using tools like PostHog and GA4 to derive actionable insights from user behavior.",
    category: "Technical"
  },
  {
    name: "Agile/Scrum",
    description: "Leading cross-functional teams using Scrum methodologies for efficient delivery.",
    category: "Leadership"
  },
  {
    name: "API Design",
    description: "Designing scalable and developer-friendly APIs for complex integrations.",
    category: "Technical"
  }
];

export const CERTIFICATIONS: Certification[] = [
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
    imageUrl: "https://picsum.photos/seed/pencil-sketch-audio/400/400?grayscale"
  },
  {
    title: "Thrifting",
    description: "Finding unique pre-loved treasures and promoting sustainable fashion.",
    imageUrl: "https://picsum.photos/seed/pencil-sketch-fashion/400/400?grayscale"
  },
  {
    title: "Retro Gaming",
    description: "Reliving the classics and appreciating the history of game design.",
    imageUrl: "https://picsum.photos/seed/pencil-sketch-game/400/400?grayscale"
  },
  {
    title: "Whimsical Mug Collection",
    description: "Collecting mugs that bring a little extra joy to every cup of coffee.",
    imageUrl: "https://picsum.photos/seed/pencil-sketch-cup/400/400?grayscale"
  }
];
