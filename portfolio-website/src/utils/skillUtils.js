// Map skill names to search terms (array of possible matches)
export const getSkillSearchTerms = (skill) => {
  const mapping = {
    "Terraform (IaC)": ["Terraform", "IaC"],
    "Docker · Docker-in-Docker": ["Docker"],
    "Kubernetes · Minikube": ["Kubernetes", "Minikube", "K8s"],
    "AWS (EC2, IAM, S3)": ["AWS", "EC2", "S3"],
    "SQL (MySQL, PostgreSQL)": ["MySQL", "PostgreSQL", "SQL"],
    "Apache Spark / PySpark": ["PySpark", "Spark"],
    "Apache Kafka": ["Kafka"],
    "Linux (Ubuntu / Alpine)": ["Linux", "Ubuntu", "Alpine"],
    "WireGuard VPN": ["WireGuard", "VPN"],
    "Proxmox VE": ["Proxmox"],
    "GitHub Actions": ["GitHub Actions", "CI/CD"],
    "Backend, Data & Systems": null, // Skip category headers
    "DevOps & Cloud": null,
  };
  
  if (mapping[skill]) {
    return mapping[skill];
  }
  
  // For simple skills, return the skill name itself
  return [skill];
};

// Check if an item matches a skill
export const itemMatchesSkill = (item, skill) => {
  const searchTerms = getSkillSearchTerms(skill);
  if (!searchTerms || searchTerms.length === 0) return false;
  
  const lowerContent = item.content.toLowerCase();
  const lowerTags = item.tags.map((tag) => tag.toLowerCase());
  
  // Check if any search term matches tags or content
  return searchTerms.some((term) => {
    const lowerTerm = term.toLowerCase();
    const tagMatch = lowerTags.some((tag) => tag.includes(lowerTerm));
    const contentMatch = lowerContent.includes(lowerTerm);
    return tagMatch || contentMatch;
  });
};

