export interface Role {
  title: string;
  dates?: string;
  bullets?: string[];
}

export interface Organization {
  name: string;
  roles: Role[];
}

export interface SoftwareProject {
  name: string;
  description: string;
  role?: string;
  links?: { label: string; href: string }[];
}

export interface SoftwareCategory {
  category: string;
  projects: SoftwareProject[];
}

export interface Conference {
  title: string;
  note?: string;
  presentations: { venue: string; date: string }[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  items: string[];
}

export const education = [
  { degree: "A.B., Political Science", year: "2007", institution: "Davidson College" },
];

export const experience: Organization[] = [
  {
    name: "Davidson College",
    roles: [
      {
        title: "James B. Duke Assistant Professor of the Practice in Data Science",
        dates: "2024 - Present",
        bullets: [
          "Advising students majoring in Data Science",
          "Faculty mentor, Community Research Fellows program",
          "Developing extracurricular Data Science programs, including ASA DataFest and the Public Good Data Wrangle",
          "Developed Davidson's first course with a DAT (Data Science) subject code, DAT-153 Database Programming",
          "Participated in interviewing and hiring Davidson's first tenure-track Professor of Data Science",
        ],
      },
      {
        title: "Director of Data CATS",
        dates: "2024 - Present",
        bullets: [
          "Managing a team of student tutors/consultants who provide data science services to students, faculty, staff, and community members",
          "Consulted on research project to identify significant drivers of donor giving in advance of new fundraising campaign",
          "Developed a dashboard visualizing planned courses for future years to aid departments in optimizing their schedules",
        ],
      },
      {
        title: "Technology & Innovation Department",
        bullets: [
          "Manager of Data Operations (2023 - 2024)",
          "Business Intelligence Developer (2017 - 2023)",
        ],
      },
      {
        title: "Committee and Task Force Service",
        bullets: [
          "Learning Spaces, Technology, and Design Committee (2025 - present)",
          "Strategic Planning working group member: “Discovering Passions, Developing Purpose” (2023 - 2024)",
          "Search Committee: Director of Institutional Research (Spring 2024)",
          "Search Committee: Assistant Director of Grants and Contracts (Fall 2019)",
          "Working group for proposed Policy Studies major (2025 - 2026)",
          "Data Governance Committee (2017 - 2024)",
        ],
      },
      {
        title: "Other Service",
        bullets: [
          "Holistic/pre-major advisor (2019 - Present)",
          "Davidson College Class of 2007 Class Secretary (2026 - present)",
        ],
      },
    ],
  },
  {
    name: "Garretson Resolution Group",
    roles: [
      { title: "Director of Research & Analytics", dates: "2015 - 2017" },
      { title: "Manager of Research & Analytics", dates: "2013 - 2015" },
      { title: "Medical Review Associate", dates: "2012 - 2013" },
    ],
  },
];

export const teaching = {
  classroom: [
    "DAT 395: Independent Study: Data Engineering (Spring 2026)",
    "DAT 342: Data Engineering (Fall 2026 - Present)",
    "DAT 153: Database Programming (Spring 2025 - Present)",
    "DAT 110: Data Science & Society (Fall 2024 - Present)",
  ],
  online: [
    "Analyzing & Visualizing Data with Power BI (2020 - present)",
    "Introduction to SQL (2021 - present)",
  ],
};

export const software: SoftwareCategory[] = [
  {
    category: "R Packages/Projects",
    projects: [
      {
        name: "pipevizR",
        description: "An R package that diagrams data lineage from tidyverse pipeline code",
        role: "Creator and primary author",
        links: [{ label: "GitHub", href: "https://github.com/pebenbow/pipevizr" }],
      },
      {
        name: "gradeR",
        description: "An R package that autogrades programming assignments in Gradescope",
        role: "Co-author",
        links: [
          { label: "GitHub", href: "https://github.com/tbrown122387/gradeR" },
          { label: "CRAN", href: "https://cran.r-project.org/web/packages/gradeR/index.html" },
        ],
      },
      {
        name: "CatScheduler Dashboard",
        description: "Interactive dashboard visualizing planned course schedules",
        role: "Creator",
        links: [
          { label: "GitHub", href: "https://github.com/DavidsonCollege-DataScience/catsched-dashboard" },
          { label: "In Production", href: "https://catsched-dashboard.run.k8s.davidson.edu/" },
          { label: "Prototype", href: "https://pdbenbow.shinyapps.io/quarto-dash/" },
        ],
      },
    ],
  },
  {
    category: "Data Engineering Projects",
    projects: [
      {
        name: "Davidson College Enterprise Data Warehouse (EDW)",
        description: "Enterprise data warehouse supporting institutional reporting",
      },
    ],
  },
  {
    category: "Power BI Projects",
    projects: [
      {
        name: "Davidson College Fact File",
        description: "Institutional fact book",
        links: [{ label: "go.davidson.edu/factfile", href: "https://go.davidson.edu/factfile" }],
      },
      { name: "National Student Clearinghouse graduate outcomes", description: "Graduate outcomes reporting" },
      { name: "Davidson College departmental finance reports", description: "Departmental finance reporting" },
      { name: "COVID-19 campus contact-tracing report", description: "Campus contact-tracing dashboard" },
      { name: "Tutorial Services Dashboard", description: "Tutorial services reporting" },
    ],
  },
];

export const conferences: Conference[] = [
  {
    title: "Modeling Further Education of Graduates with NSC Data in Power BI",
    note: "with L. Boyles",
    presentations: [
      { venue: "North Carolina Association for Institutional Research", date: "April 2024" },
      { venue: "Southern Association for Institutional Research", date: "October 2023" },
      { venue: "Association for Institutional Research", date: "June 2023" },
    ],
  },
  {
    title: "Database DevOps in Azure: Prepare for Ludicrous Speed",
    presentations: [{ venue: "PASS Data Community Summit", date: "November 2022" }],
  },
  {
    title: "Data Crunch: Using Your Data to Streamline Employer Engagements",
    note: "with B. Adams",
    presentations: [{ venue: "Southern Association of Colleges and Employers", date: "June 2020" }],
  },
  {
    title: "Automating the Enterprise Data Warehouse Using Azure DevOps",
    presentations: [{ venue: "Higher Education Data World Conference", date: "April 2019" }],
  },
];

export const professionalService = [
  "Graduate, MOR Leaders Program for liberal arts colleges (2023-2024 cohort)",
  "Founder and co-organizer, Higher Education Power BI User Group (Aug 2023 - Jan 2025)",
  "Member, American Statistical Association (2024 - Present)",
];

export const honors = [
  "2023: First Place, Best Innovative Practice, Southern Association for Institutional Research annual conference (with L. Boyles)",
];

export const skills: SkillGroup[] = [
  { category: "Languages & Data Tools", icon: "lucide:code-2", items: ["SQL", "R", "Python"] },
  { category: "Databases", icon: "lucide:database", items: ["PostgreSQL", "Microsoft SQL Server", "MySQL", "Oracle RDBMS", "DuckDB", "MongoDB"] },
  { category: "BI & Visualization", icon: "lucide:bar-chart-3", items: ["Power BI", "R Shiny", "Tableau"] },
  { category: "Data Engineering", icon: "lucide:workflow", items: ["Databricks", "Microsoft Fabric", "Duckle"] },
  { category: "Web Development", icon: "lucide:globe", items: ["Quarto","Astro"] }
];
