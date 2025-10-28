import { Project, Experience } from './types';

export const projects: Project[] = [
  {
    title: 'Nike Case Competition Winner',
    role: 'Data Analyst, Python',
    date: 'Mar 2025 - Jun 2025',
    description: [
      'Built and validated a predictive dissatisfaction model, improving understanding of customer churn factors and business process inefficiencies.',
      'Analyzed 200K+ customer data points in Python and Excel to surface budget variances and operational bottlenecks, uncovering $20M+ in potential lost revenue.',
    ],
    imageUrl: 'https://picsum.photos/seed/nike/1200/800',
    projectUrl: '#',
  },
  {
    title: 'AI-Integrated LinkedIn Redesign',
    role: 'System Analysis & Design',
    date: 'Jan 2024 - Mar 2024',
    description: [
      "Analyzed user pain points and system limitations in LinkedIn's interface, translating insights into clear technical requirements and product concepts that addressed accessibility and engagement gaps.",
      'Designed and validated an AI-integrated LinkedIn prototype by mapping key system inputs/outputs and applying agile processes to ensure scalability, seamless workflow integration, and improved user efficiency.',
    ],
    imageUrl: 'https://picsum.photos/seed/linkedin/1200/800',
    projectUrl: '#',
  },
  {
    title: 'Abortion Clinic Website',
    role: 'System Analysis and Design',
    date: 'Jan 2024 - Mar 2025',
    description: [
        'Built a data-driven website to support pregnant women impacted by the overturning of Roe v. Wade, enabling users to identify which clinics provide abortion services based on gestational stage and state regulations.',
        'Designed and implemented an interactive geographic visualization that calculated travel times to healthcare facilities across major U.S. cities, improving accessibility insights for users.',
        'Evaluated ethical concerns and data limitations—including biases in collection, missing values, and geographic exclusions—to ensure responsible and accurate interpretation of results.'
    ],
    imageUrl: 'https://picsum.photos/seed/clinic/1200/800',
    projectUrl: '#',
  }
];

export const experiences: Experience[] = [
  {
    company: 'American Campus',
    role: 'Leasing & Marketing Consultant',
    date: 'May 2024 - Aug 2025',
    description: [
      'Utilized Salesforce to manage a high volume of client interactions, qualifying 50–100 prospects weekly and optimizing data workflows to improve process efficiency and contribute to a 99% occupancy rate.',
      'Consolidated 360 resident transfer requests into a centralized tracking system, resolving vendor and scheduling gaps to streamline coordination and ensure on-time move-ins.',
      'Designed a workflow roadmap to streamline client onboarding, service handoffs, and MFTE processes, reducing approval delays and improving move-in coordination across 240+ units.',
    ],
  },
  {
    company: 'Associated Student Of The University Of Washington',
    role: 'Communication Director',
    date: 'Jul 2024 - Jun 2025',
    description: [
      'Consolidated hiring and campaign data across 20+ student commissions into a master Excel tracker, enabling real-time visibility and helping fill 80+ positions through streamlined tracking and consistent follow-up.',
      "Partnered with IT and Finance to migrate ASUW's website to a scalable UW-hosted system, aligning technical execution with stakeholder goals to enhance long-term infrastructure reliability.",
      'Developed and executed a roadmap in Asana for updating ASUW’s public-facing web pages, coordinating with 20+ commissions to refresh 80% of outdated content and improve usability for 40,000+ students.',
    ],
  },
  {
    company: 'Nordstrom',
    role: 'Brand Ambassador Competition',
    date: 'Aug 2023 - Jun 2024',
    description: [
      'Analyzed resale data and conducted 180+ shopper interviews to identify customer needs and strategic opportunities.',
      'Built and pitched a data-driven strategy leveraging market trends, an optimized store layout, and digital engagement elements to enhance customer engagement and value.',
      'Presented recommendations to judges in a client-facing format, demonstrating strong communication, consultative problem-solving, and ability to influence stakeholders.',
    ],
  },
  {
      company: 'Multicultural Greek Council',
      role: 'Banquet Chair, Yarshshow Chair, Creative Director',
      date: 'Jan 2023 - Jun 2025',
      description: [
          'Secured $4.5K in funding and led event operations for a 100-person banquet and 10-week cultural showcase.',
          'Coordinated 10 organizations and raised $2.6K in community funding to support cultural and student engagement programs.',
      ]
  }
];
