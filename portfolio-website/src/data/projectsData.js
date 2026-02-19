export const projectsData = [
  {
    id: "devsecops-lab",
    title: "Private Cloud Infrastructure & DevSecOps Lab",
    meta: "Self-hosted · 2025 – Present",
    tags: ["Proxmox", "Terraform", "Jenkins"],
    content:
      "Architected a high-availability virtualization cluster with Proxmox VE to host a personal NAS and AI inference servers. Automated AWS EC2 provisioning via Terraform (including security groups and SSH keys) and built a Jenkins Declarative Pipeline with parallel Spring Boot / React builds using Docker-in-Docker agents to ship optimized production images. Secured remote access with a self-hosted WireGuard VPN.",
    link: null,
    linkText: null,
  },
  {
    id: "financial-engine",
    title: "Financial Analysis Engine",
    meta: "2025 – Present",
    tags: ["Kafka", "PySpark", "Data Lake"],
    content:
      "Built a real-time financial data pipeline using PySpark Structured Streaming and Apache Kafka to process live stock tick data. Implemented a Medallion Architecture (Bronze / Silver / Gold) backed by Parquet data lakes, and validated the end-to-end system locally using Docker Compose for reproducible environments.",
    link: "https://github.com/Blacklotus89898/Financial-Analysis-Engine/blob/main/src/financial-pyspark-stock-pipeline/README.md",
    linkText: "View on GitHub",
  },
  {
    id: "sports-center",
    title: "Sports Center Management System",
    meta: "Academic · React & Spring",
    tags: ["React", "Spring Boot"],
    content:
      "Full-stack system for managing memberships, bookings and operations for a sports center, built with React on the frontend and Spring Boot on the backend.",
    link: "https://github.com/Blacklotus89898/Sports-Center-Management-System",
    linkText: "View on GitHub",
  },
  {
    id: "cashier-app",
    title: "Cash Register & Inventory Management",
    meta: "Personal",
    tags: ["Go", "Desktop"],
    content:
      "Cash register, reporting and inventory system designed to streamline small business operations and reporting workflows.",
    link: "https://github.com/Blacklotus89898/CashierApp",
    linkText: "View on GitHub",
  },
];

