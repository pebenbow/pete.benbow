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

// Current faculty roles. Earlier staff roles at Davidson live in
// priorExperience; committee work lives in service regardless of which role
// it was done under, since each item carries its own dates.
export const appointments: Organization[] = [
  {
    name: "Davidson College",
    roles: [
      {
        title: "James B. Duke Assistant Professor of the Practice in Data Science",
        dates: "2024 - present",
        bullets: [
          "Developing new courses in Database Programming and Data Engineering",
          "Advising students majoring in Data Science",
          "Serving as faculty mentor to the Community Research Fellows program",
          "Developing extracurricular Data Science programs, including ASA DataFest and the Public Good Data Wrangle",
        ],
      },
      {
        title: "Director of Data CATS",
        dates: "2024 - present",
        bullets: [
          "Managing a team of student tutors/consultants who provide data science services to students, faculty, staff, and community members",
          "Consulted on research project to identify significant drivers of donor giving in advance of new fundraising campaign",
          "Developed a dashboard visualizing planned courses for future years to aid departments in optimizing their schedules",
        ],
      },
    ],
  },
];

export const priorExperience: Organization[] = [
  {
    name: "Davidson College, Technology & Innovation",
    roles: [
      { title: "Manager of Data Operations", dates: "2023 - 2024" },
      { title: "Business Intelligence Developer", dates: "2017 - 2023" },
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
    "DAT 342: Data Engineering (Fall 2026 - present)",
    "DAT 153: Database Programming (Spring 2025 - present)",
    "DAT 110: Data Science & Society (Fall 2024 - present)",
  ],
  independent: [
    "DAT 395: Data Engineering (Spring 2026)",
  ],
  mentoring: [
    "Holistic/pre-major advisor (2019 - present)",
  ],
  online: [
    "Analyzing & Visualizing Data with Power BI",
    "Introduction to SQL",
  ],
};

export const software: SoftwareProject[] = [
//  {
//    name: "pipevizR",
//    description: "An R package that diagrams data lineage from tidyverse pipeline code",
//    role: "Creator and primary author",
//    links: [{ label: "GitHub", href: "https://github.com/pebenbow/pipevizr" }],
//  },
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
    description: "An R Shiny app to be used by Davidson faculty when planning departmental course schedules for future academic years",
    links: [
      { label: "GitHub", href: "https://github.com/DavidsonCollege-DataScience/catsched-dashboard" },
      { label: "In Production", href: "https://catsched-dashboard.run.k8s.davidson.edu/" },
      { label: "Prototype", href: "https://pdbenbow.shinyapps.io/quarto-dash/" },
    ],
  },
  {
    name: "Davidson College Enterprise Data Warehouse (EDW)",
    description: "A large-scale enterprise data warehouse to support institutional reporting, including dimensional models, ELT pipelines, and semantic layer; built in Microsoft SQL Server",
  },
  {
    name: "Davidson College Fact File",
    description: "A public-facing, interactive fact book built in Power BI for Institutional Research",
    links: [{ label: "go.davidson.edu/factfile", href: "https://go.davidson.edu/factfile" }],
  },
  { name: "National Student Clearinghouse graduate outcomes", description: "Interactive Power BI report combining NSC data with Davidson internal data to investigate post-graduation outcomes of Davidson students; built in collaboration with Institutional Research" },
  { name: "Davidson College departmental finance reports", description: "A suite of Power BI reports built on top of the college's enterprise data warehouse to provide comprehensive views into operating budgets and restricted funds" },
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

// Newest first within each group.
export const service = {
  college: [
    "Advisory Board to the Franco Program on Public Policy and Research (2026 - present)",
    "Learning Spaces, Technology, and Design Committee (2025 - present)",
    "Working group for proposed Policy Studies major (2025 - 2026)",
    "Search Committee: Director of Institutional Research (Spring 2024)",
    "Strategic Planning working group: “Discovering Passions, Developing Purpose” (2023 - 2024)",
    "Search Committee: Assistant Director of Grants and Contracts (Fall 2019)",
    "Data Governance Committee (2017 - 2024)",
  ],
  professional: [
    "Graduate, MOR Leaders Program for liberal arts colleges (2023-2024 cohort)",
    "Founder and co-organizer, Higher Education Power BI User Group (Aug 2023 - Jan 2025)",
    "Member, American Statistical Association (2024 - present)",
  ],
  alumni: [
    "Davidson College Class of 2007 Class Secretary (2026 - present)",
    "Davidson College Class of 2007 20th Reunion Committee",
  ],
};

export const honors = [
  "2023: First Place, Best Innovative Practice, Southern Association for Institutional Research annual conference (with L. Boyles)",
];

export const skills: SkillGroup[] = [
  { category: "Languages", icon: "lucide:code", items: ["SQL", "R", "Python"] },
  { category: "Databases", icon: "lucide:database", items: ["DuckDB", "PostgreSQL", "Microsoft SQL Server", "MySQL", "Oracle", "MongoDB"] },
  { category: "Data Wrangling", icon: "lucide:table-2", items: ["dplyr", "tidyr", "Polars", "pandas"] },
  { category: "Visualization & BI", icon: "lucide:bar-chart-3", items: ["ggplot2", "R Shiny", "Power BI", "Tableau", "Superset"] },
  { category: "Spatial", icon: "lucide:map", items: ["ArcGIS", "GeoLibre", "tmap", "leaflet"] },
  { category: "Data Engineering", icon: "lucide:workflow", items: ["Spark", "PySpark", "DuckLake", "Databricks", "Microsoft Fabric"] },
  { category: "Web Development", icon: "lucide:globe", items: ["Quarto","Astro"] }
];
