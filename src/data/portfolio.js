export const profile = {
  initials: "SRN",
  name: "Smita Ravi Naik",
  role: "Data Analyst",
  location: "Bangalore, India",
  email: "smitan949@gmail.com",
  phone: "+91 84310 85100",
  linkedin: "https://www.linkedin.com/in/smita-naik-884734249/?isSelfProfile=false",
  github: "https://github.com/Smitan26",
  resume: "https://drive.google.com/file/d/1p0o40IwrijLs39i5gbznpn5AFEx2ofIF/view?pli=1",
  headline: "Turning Data Into Meaningful Decisions.",
  intro:
    "Aspiring Data Analyst focused on transforming raw operational data into actionable business insights through strong SQL, clean reporting logic, and stakeholder-ready dashboards.",
};

export const quickHighlights = [
  { label: "Completed projects", value: "3" },
  { label: "Primary tools used", value: "10+" },
  { label: "Core analytics areas", value: "7" },
];

export const about = {
  professionalSummary:
    "I am an aspiring Data Analyst with hands-on project and internship experience in SQL, Python, Excel, and BI reporting. I enjoy building reliable analysis pipelines and presenting insights that support business decisions.",
  careerObjective:
    "My objective is to turn raw and complex datasets into clear, actionable recommendations that improve planning, performance, and decision quality.",
  analyticalApproach: [
    "Collect and profile source data before analysis.",
    "Clean, validate, and standardize fields to improve consistency.",
    "Explore trends, segments, and anomalies with structured EDA.",
    "Build clear visual stories for technical and non-technical teams.",
    "Translate findings into practical business recommendations.",
  ],
  careerGoals:
    "I aim to grow in analytics and business intelligence roles where I can combine SQL depth, dashboard design, and business communication to support data-driven decisions.",
};

export const education = [
  {
    degree: "Bachelor of Engineering, Computer Science and Engineering",
    institution: "Alva's Institute of Engineering and Technology, Moodbidri",
    graduationYear: "2025",
    period: "Dec 2021 to May 2025",
    score: "CGPA 8.3 / 10",
    coursework: [
      "Database Management Systems",
      "Data Structures",
      "Statistics for Computing",
      "Machine Learning Fundamentals",
    ],
  },
  {
    degree: "Pre-University (12th Grade)",
    institution: "MES Chaitanya PU College, Sirsi, Karnataka",
    graduationYear: "2021",
    period: "Jun 2020 to Jul 2021",
    score: "76.33%",
  },
  {
    degree: "High School (10th Grade)",
    institution: "Shree Bharati English Medium School, Kavalakkil",
    graduationYear: "2019",
    period: "Mar 2018 to Apr 2019",
    score: "76.89%",
  },
];

export const skillGroups = [
  {
    category: "Programming and Data Manipulation",
    icon: "PY",
    notes: "Applied in academic and portfolio projects.",
    skills: ["Python", "Pandas", "NumPy"],
  },
  {
    category: "Database and Querying",
    icon: "SQL",
    notes: "Used for joins, CTEs, aggregations, and reporting logic.",
    skills: ["SQL", "Joins", "CTEs", "Window Functions"],
  },
  {
    category: "Spreadsheet Analysis",
    icon: "XLS",
    notes: "Business-friendly analysis and data cleaning workflows.",
    skills: ["Microsoft Excel", "PivotTables", "Lookup Functions", "Data Cleaning"],
  },
  {
    category: "Business Intelligence",
    icon: "BI",
    notes: "Interactive dashboards and KPI communication.",
    skills: ["Power BI", "DAX", "Power Query", "Dashboard Design"],
  },
  {
    category: "Data Visualization",
    icon: "VIZ",
    notes: "Readable visuals with context and narrative.",
    skills: ["Matplotlib", "Seaborn", "Chart Selection", "Data Storytelling"],
  },
  {
    category: "Statistics",
    icon: "STAT",
    notes: "Core analytics methods for decision support.",
    skills: ["Descriptive Statistics", "Correlation", "Hypothesis Testing", "Sampling"],
  },
  {
    category: "Professional Skills",
    icon: "PRO",
    notes: "Essential for cross-functional analytics delivery.",
    skills: ["Problem Solving", "Communication", "Critical Thinking", "Business Reporting"],
  },
];

export const projects = [
  {
    title: "Garment Manufacturing Analytics",
    preview: "",
    previewAlt: "Garment manufacturing analytics dashboard preview",
    tools: ["Excel", "SQL", "Power BI", "Tableau"],
    summary:
      "Analyzed production data across manufacturing lines and tracked output volume, efficiency, and defect rate to support performance monitoring.",
    businessProblem:
      "Manufacturing KPIs were spread across reports, making it difficult to identify line-wise performance gaps quickly.",
    dataset: "Garment manufacturing production dataset with line-level output, defect, and efficiency records.",
    cleaning:
      "Cleaned missing and inconsistent production entries, standardized line labels, and aligned KPI definitions for analysis consistency.",
    methodology:
      "Used SQL and spreadsheet checks for KPI preparation, then built interactive dashboards in Power BI and Tableau for trend exploration.",
    findings:
      "Highlighted production trend changes and pinpointed performance gaps across lines where efficiency dropped and defect rates increased.",
    recommendations:
      "Prioritize targeted process improvements on underperforming lines and establish regular KPI monitoring for early risk detection.",
    limitations: "Based on available historical production data and periodic reporting refresh.",
    github: "https://github.com/Smitan26/Manufacturing-Data-Analytics-with-Excel-SQL-Tableau-Power-BI",
    live: "",
  },
  {
    title: "Kickstarter Crowdfunding Analytics",
    preview: "",
    previewAlt: "Kickstarter crowdfunding performance analytics visual",
    tools: ["Excel", "MySQL", "Power BI", "Tableau"],
    summary:
      "Analyzed campaign data to identify factors that influence funding success across categories and regions.",
    businessProblem:
      "Campaign outcomes were visible at a high level, but the drivers of success and failure were unclear.",
    dataset: "Kickstarter campaign dataset with category, region, goal, and funding outcome attributes.",
    cleaning:
      "Handled missing fields, standardized categories and regions, and validated campaign status mappings for accurate reporting.",
    methodology:
      "Performed SQL and spreadsheet-based exploration, then developed dashboards in Power BI and Tableau to compare funding trends and success rates.",
    findings:
      "Identified category and region patterns associated with higher success rates and more stable funding performance.",
    recommendations:
      "Focus campaign planning on strong-performing segments and refine launch strategy using historical success signals.",
    limitations: "Findings depend on historical platform data and do not include qualitative campaign narrative factors.",
    github: "",
    live: "",
  },
  {
    title: "DDoS Attack Detection and Classification",
    preview: "",
    previewAlt: "DDoS detection and classification model output visual",
    tools: ["Python", "Scikit-learn", "Pandas"],
    summary:
      "Built machine learning models to detect and classify DDoS attacks from network traffic data.",
    businessProblem:
      "Security monitoring required a reliable approach to distinguish DDoS attack traffic from normal network activity.",
    dataset: "Network traffic dataset containing labeled attack and normal traffic patterns.",
    cleaning:
      "Performed preprocessing and feature handling, including data cleaning and preparation for model training and testing.",
    methodology:
      "Trained and evaluated supervised classification models in Python using Scikit-learn with structured feature pipelines.",
    findings:
      "Achieved improved classification performance through iterative preprocessing and model evaluation.",
    recommendations:
      "Deploy and monitor the best-performing model as part of a broader intrusion detection workflow.",
    limitations: "Performance depends on dataset representativeness and requires continuous retraining for evolving attack patterns.",
    github: "https://drive.google.com/file/d/1vZtvB0ZB4VIjMVBlGEqIAYxM3wwC8F8G/view",
    githubLabel: "IEEE Certificate",
    live: "",
  },
];

export const experience = [
  {
    role: "Data Analyst",
    organization: "Ekfrazo Technologies",
    period: "Jul 2026 to Present",
    type: "Professional Experience",
    outcomes: [
      "Supported data quality checks, reconciliation, and mapping documentation for enterprise datasets.",
      "Translated business rules into validation logic and SQL checks across source and target systems.",
      "Prepared stakeholder-ready evidence for review and sign-off cycles.",
    ],
  },
  {
    role: "Data Analyst Intern",
    organization: "AI Variant",
    period: "Aug 2025 to Jan 2026",
    type: "Internship",
    outcomes: [
      "Analyzed large datasets using SQL and Python to identify trends and anomalies.",
      "Built Power BI and Tableau dashboards to monitor business metrics.",
      "Delivered concise findings and recommendations for team review.",
    ],
    certificate: "https://drive.google.com/file/d/1p0qQ4SSSZytsumpFR3sKAQLC027Gw_pa/view",
  },
];

export const academicProjects = [
  "Garment Manufacturing Analytics",
  "Kickstarter Crowdfunding Analytics",
  "DDoS Attack Detection and Classification",
];

export const certifications = [
  {
    title: "Data Analyst Certification",
    issuer: "ExcelR, Bengaluru",
    link: "https://drive.google.com/file/d/16vZilX3-lqPBPQcvuF-GhHy1kuDq4juq/view",
  },
  {
    title: "Salesforce Administrator Virtual Internship",
    issuer: "SmartInternz",
    link: "https://smartinternz.com/internships/salesforce_certificates/0d57b98fb557ef2f1cc997cc175cfb27",
  },
  {
    title: "Mastering Big Data Analytics with PySpark",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1_fDoOFK6W7JpVYQIwFgYcTkXV9hXz7kq/view",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    link: "https://drive.google.com/file/d/1y_n8Q5vjIj_iczYFaxDIbaiZLsj7EjkI/view",
  },
];

export const achievements = [
  "Research paper contribution presented at an IEEE-recognized conference.",
  "Built multiple end-to-end BI and analytics portfolios with reproducible workflows.",
];
