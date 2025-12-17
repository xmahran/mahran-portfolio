export const personalInfo = {
  name: "Mohamed Mahran",
  title: "Lead Full Stack Engineer & Founder",
  tagline: "Bridging Data Science and Web Development",
  location: "Berlin, Germany",
  email: "mohamed.mahran220@gmail.com",
  phone: "+49 152 23974504",
  github: "https://github.com/xmahran",
  linkedin: "https://www.linkedin.com/in/mohamed-mahran-742825233/",
};

export const highlights = [
  {
    title: "AI & Machine Learning",
    description: "Integrating ML models into production applications",
    icon: "brain",
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end web and mobile applications",
    icon: "code",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable microservices with AWS & Kubernetes",
    icon: "cloud",
  },
  {
    title: "System Architecture",
    description: "Designing robust distributed systems",
    icon: "systems",
  },
];

export const experience = [
  {
    year: "Nov 2023 - Present",
    company: "Sweep Apparel",
    role: "Founder & CEO",
    description:
      "Founded a premium athleisure brand, overseeing all technical and operational aspects. Built and optimized a custom e-commerce platform using Shopify with custom Liquid templates, JavaScript, and CSS. Implemented data-driven marketing strategies to analyze customer behavior and drive brand growth.",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CSS",
      "Data Analytics",
      "E-commerce",
    ],
  },
  {
    year: "Jun 2023 - Oct 2025",
    company: "Xylem Software",
    role: "Lead Backend Engineer",
    description:
      "Architected and led backend development using Node.js (TypeScript) within an Nx monorepo, ensuring scalable and clean code architecture. Designed and deployed microservices utilizing Docker and Kubernetes. Improved CI/CD pipelines via GitHub Actions, significantly reducing release times. Collaborated with cross-functional teams to integrate ML-based services.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Nx Monorepo",
      "Kubernetes",
      "Docker",
      "PostgreSQL",
      "Prisma",
      "GitHub Actions",
      "Microservices",
    ],
  },
  {
    year: "Dec 2022 - Present",
    company: "Self-Employed",
    role: "Freelance Full-Stack Developer",
    description:
      "Delivered robust full-stack applications using React, Next.js, and Node.js, ensuring high performance and security. Built secure RESTful APIs and optimized database schemas for various clients. Deployed production environments using AWS and Docker, managing end-to-end application lifecycles.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "AWS",
      "Docker",
      "PostgreSQL",
      "MongoDB",
    ],
  },
];

export const projects = [
  {
    slug: "rentova",
    title: "Rentova - Airbnb Clone",
    category: "Web",
    description:
      "A comprehensive booking platform for the Egyptian market with complex search algorithms, secure authentication, and scalable infrastructure.",
    problem:
      "The Egyptian rental market lacked a modern, user-friendly platform with advanced search capabilities and secure booking systems.",
    solution:
      "Developed a full-stack booking platform with React, Next.js, and TypeScript. Implemented OAuth authentication, complex search algorithms with filters, and a scalable backend infrastructure using Node.js and PostgreSQL with Prisma. Created a React Native mobile app for iOS and Android, and containerized the entire application with Docker for easy deployment.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "React Native",
      "Docker",
      "OAuth",
    ],
    outcome:
      "Successfully launched a production-ready booking platform handling concurrent user requests with high reliability and performance.",
    metrics: {
      platform: "Web & Mobile",
      database: "PostgreSQL",
      deployment: "Docker",
      status: "Active",
    },
    image: "/projects/rentova.jpg",
    featured: true,
    liveUrl: "https://rentova.net",
  },
  {
    slug: "neural-sentiment-analytics",
    title: "Neural Sentiment Analytics Platform",
    category: "AI",
    description:
      "A production-grade machine learning platform for real-time sentiment analysis with a web interface for visualizing insights and model performance metrics.",
    problem:
      "Businesses need real-time sentiment analysis from text data, but existing solutions are either too expensive, not customizable, or lack a user-friendly interface for non-technical users.",
    solution:
      "Developed an end-to-end ML platform combining NLP research with production web infrastructure. Built custom transformer-based models using PyTorch for fine-tuned sentiment classification. Created a FastAPI backend service that serves model predictions with sub-100ms latency. Integrated the ML service with a Next.js dashboard for real-time visualization of sentiment trends, confidence scores, and batch processing capabilities. Deployed the entire system using Docker and Kubernetes for scalable inference.",
    techStack: [
      "Python",
      "PyTorch",
      "Transformers",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    outcome:
      "Achieved 94% accuracy on sentiment classification with real-time inference capabilities. Successfully deployed a research-grade ML model into a production environment with monitoring and automated scaling.",
    metrics: {
      accuracy: "94%",
      latency: "<100ms",
      throughput: "1000+ req/min",
      deployment: "Kubernetes",
    },
    image: "/projects/sentiment-analytics.jpg",
    featured: true,
  },
  {
    slug: "unitar-event-management",
    title: "UNITAR Event Management System",
    category: "Web",
    description:
      "Built an event management system for the United Nations Institute for Training and Research with rigorous security protocols and Role-Based Access Control.",
    problem:
      "UNITAR needed a secure event management platform with strict access control to protect sensitive user information and ensure compliance with international data protection standards.",
    solution:
      "Developed a comprehensive event management system using React and TypeScript with Redux for state management. Implemented robust Role-Based Access Control (RBAC) with multiple permission levels. Created secure data handling protocols including encryption at rest and in transit. Built a Node.js backend with PostgreSQL for reliable data storage and implemented comprehensive audit logging for all user actions.",
    techStack: [
      "React",
      "TypeScript",
      "Redux",
      "Node.js",
      "PostgreSQL",
      "RBAC",
      "Security",
    ],
    outcome:
      "Delivered a secure, compliant event management platform that successfully handles sensitive UN data with zero security incidents.",
    metrics: {
      security: "RBAC",
      compliance: "UN Standards",
      users: "Multi-tenant",
      status: "Production",
    },
    image: "/projects/unitar.jpg",
    featured: true,
  },
  {
    slug: "accurent-platform",
    title: "Accurent Handover Inspection Platform",
    category: "Web",
    description:
      "Contributed to a Swiss startup platform digitalizing handover inspections with responsive UI and reliable backend services.",
    problem:
      "Traditional handover inspections for properties are paper-based, time-consuming, and prone to errors, requiring a digital solution for modern property management.",
    solution:
      "Contributed as a Frontend/Backend developer to build a responsive inspection platform. Created a modern UI using React and Next.js with TypeScript for type safety. Integrated with .NET backend services for reliable data processing. Implemented mobile-responsive designs for field inspectors using tablets and smartphones, enabling real-time data capture and photo uploads.",
    techStack: ["React", "Next.js", "TypeScript", ".NET", "Responsive Design"],
    outcome:
      "Enabled digital transformation of property handover inspections, reducing inspection time by 50% and eliminating paper-based workflows.",
    metrics: {
      efficiency: "50% faster",
      platform: "Web & Mobile",
      location: "Switzerland",
      status: "Active",
    },
    image: "/projects/accurent.jpg",
    featured: false,
  },
  {
    slug: "4th-gen-language",
    title: "4th-Generation Programming Language for Ethereum",
    category: "Research",
    description:
      "Bachelor project designing a 4th-generation programming language specifically for Ethereum blockchain development, bridging high-level programming concepts with smart contract deployment.",
    problem:
      "Existing Ethereum development languages (Solidity, Vyper) require developers to learn blockchain-specific syntax, making it difficult for traditional developers to transition into blockchain development.",
    solution:
      "Designed a high-level 4th-generation programming language that abstracts Ethereum blockchain complexities while maintaining full smart contract capabilities. Developed language syntax, compiler architecture, and code generation pipeline. Created a transpiler that converts high-level code to Solidity, enabling developers to write smart contracts using familiar programming paradigms. Built development tools including syntax highlighting, error checking, and deployment scripts.",
    techStack: [
      "Compiler Design",
      "Solidity",
      "Blockchain",
      "Ethereum",
      "Python",
      "AST",
      "Code Generation",
    ],
    outcome:
      "Successfully demonstrated that a 4GL can effectively generate production-ready Ethereum smart contracts, potentially lowering the barrier to entry for blockchain development.",
    metrics: {
      type: "Research Project",
      status: "Bachelor Thesis",
      university: "GUC",
      year: "2025",
    },
    image: "/projects/4th-gen.jpg",
    featured: false,
  },
  {
    slug: "scalable-cloud-platform",
    title: "Multi-Tenant SaaS Cloud Platform",
    category: "Cloud",
    description:
      "A scalable, multi-tenant cloud infrastructure platform built on AWS, enabling businesses to deploy and manage microservices with automated scaling, monitoring, and disaster recovery capabilities.",
    problem:
      "Organizations struggle with managing complex cloud infrastructure, requiring manual scaling, monitoring, and disaster recovery setup. Multi-tenant SaaS applications need isolated environments with shared resources while maintaining security and performance.",
    solution:
      "Architected and deployed a comprehensive cloud platform using AWS services including EKS (Elastic Kubernetes Service) for container orchestration, RDS for managed databases, S3 for object storage, and CloudFront for CDN. Implemented Infrastructure as Code using Terraform for reproducible deployments across environments. Built automated CI/CD pipelines with GitHub Actions that deploy to staging and production environments. Configured auto-scaling policies based on CPU, memory, and custom metrics. Implemented comprehensive monitoring using CloudWatch, Prometheus, and Grafana for real-time observability. Set up disaster recovery with automated backups, cross-region replication, and failover mechanisms. Created a multi-tenant architecture with namespace isolation in Kubernetes and database-level tenant separation.",
    techStack: [
      "AWS",
      "EKS",
      "Kubernetes",
      "Terraform",
      "Docker",
      "RDS",
      "S3",
      "CloudFront",
      "CloudWatch",
      "Prometheus",
      "Grafana",
      "GitHub Actions",
      "PostgreSQL",
      "Redis",
      "Nginx",
    ],
    useCases: [
      {
        title: "E-commerce Platform Scaling",
        description:
          "Handled Black Friday traffic spikes by automatically scaling from 5 to 50 pods within minutes, processing 10,000+ concurrent transactions without downtime.",
      },
      {
        title: "Multi-Region Disaster Recovery",
        description:
          "Implemented automated failover to secondary AWS region during primary region outage, reducing RTO to under 5 minutes and maintaining 99.99% uptime SLA.",
      },
      {
        title: "Cost Optimization",
        description:
          "Reduced cloud costs by 40% through right-sizing instances, implementing spot instances for non-critical workloads, and automated resource scheduling for dev environments.",
      },
      {
        title: "Multi-Tenant SaaS Isolation",
        description:
          "Enabled secure multi-tenancy for 100+ clients with isolated Kubernetes namespaces, separate database schemas, and network policies ensuring data privacy and compliance.",
      },
      {
        title: "Real-Time Monitoring & Alerting",
        description:
          "Set up comprehensive observability stack detecting anomalies and performance degradation, reducing MTTR from hours to minutes with automated alerting and dashboards.",
      },
    ],
    outcome:
      "Successfully deployed a production-ready cloud platform supporting 100+ tenants with 99.99% uptime, automated scaling capabilities, and comprehensive monitoring. Reduced infrastructure management overhead by 60% and achieved 40% cost savings through optimization.",
    metrics: {
      uptime: "99.99%",
      tenants: "100+",
      regions: "Multi-Region",
      scaling: "Auto-Scale",
      costReduction: "40%",
      deployment: "Terraform + CI/CD",
    },
    image: "/projects/cloud-platform.jpg",
    featured: true,
  },
];

export const techStack = [
  {
    name: "TypeScript",
    category: "Language",
    icon: "typescript",
    proficiency: "Expert",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: "javascript",
    proficiency: "Expert",
  },
  {
    name: "Python",
    category: "Language",
    icon: "python",
    proficiency: "Expert",
  },
  {
    name: "Java",
    category: "Language",
    icon: "java",
    proficiency: "Advanced",
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: "nextjs",
    proficiency: "Expert",
  },
  {
    name: "React",
    category: "Framework",
    icon: "react",
    proficiency: "Expert",
  },
  {
    name: "Node.js",
    category: "Runtime",
    icon: "nodejs",
    proficiency: "Expert",
  },
  {
    name: "Spring Boot",
    category: "Framework",
    icon: "spring",
    proficiency: "Advanced",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: "aws",
    proficiency: "Advanced",
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    icon: "kubernetes",
    proficiency: "Advanced",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "docker",
    proficiency: "Advanced",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "postgresql",
    proficiency: "Expert",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "mongodb",
    proficiency: "Advanced",
  },
  {
    name: "Redis",
    category: "Database",
    icon: "redis",
    proficiency: "Advanced",
  },
  {
    name: "Prisma",
    category: "ORM",
    icon: "prisma",
    proficiency: "Expert",
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    icon: "tensorflow",
    proficiency: "Advanced",
  },
  {
    name: "PyTorch",
    category: "AI/ML",
    icon: "pytorch",
    proficiency: "Advanced",
  },
  {
    name: "Express",
    category: "Framework",
    icon: "express",
    proficiency: "Expert",
  },
  {
    name: "Microservices",
    category: "Architecture",
    icon: "microservices",
    proficiency: "Advanced",
  },
  {
    name: "RabbitMQ",
    category: "Messaging",
    icon: "rabbitmq",
    proficiency: "Advanced",
  },
  {
    name: "GitHub Actions",
    category: "DevOps",
    icon: "github",
    proficiency: "Advanced",
  },
  {
    name: "CI/CD",
    category: "DevOps",
    icon: "cicd",
    proficiency: "Advanced",
  },
  {
    name: "Nginx",
    category: "DevOps",
    icon: "nginx",
    proficiency: "Advanced",
  },
  {
    name: "Nx",
    category: "Tool",
    icon: "nx",
    proficiency: "Advanced",
  },
  {
    name: "Redux",
    category: "Framework",
    icon: "redux",
    proficiency: "Expert",
  },
  {
    name: ".NET Core",
    category: "Framework",
    icon: "dotnet",
    proficiency: "Advanced",
  },
  {
    name: "Terraform",
    category: "DevOps",
    icon: "terraform",
    proficiency: "Advanced",
  },
  {
    name: "Jest",
    category: "Testing",
    icon: "jest",
    proficiency: "Advanced",
  },
  {
    name: "SQL",
    category: "Language",
    icon: "sql",
    proficiency: "Expert",
  },
  {
    name: "Three.js",
    category: "3D",
    icon: "threejs",
    proficiency: "Advanced",
  },
];

export const socialLinks = {
  github: "https://github.com/xmahran",
  linkedin: "https://www.linkedin.com/in/mohamed-mahran-742825233/",
  email: "mohamed.mahran220@gmail.com",
};
