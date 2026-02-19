import { getSkillSearchTerms } from "../utils/skillUtils";

const Skills = ({ onSkillClick }) => {
  const devOpsSkills = [
    "Terraform (IaC)",
    "Jenkins",
    "GitHub Actions",
    "Docker · Docker-in-Docker",
    "Kubernetes · Minikube",
    "Helm",
    "AWS (EC2, IAM, S3)",
    "Proxmox VE",
    "Grafana",
    "WireGuard VPN",
  ];

  const backendSkills = [
    "Go",
    "Python",
    "Bash",
    "Java",
    "C++",
    "SQL (MySQL, PostgreSQL)",
    "Redis",
    "Apache Kafka",
    "Apache Spark / PySpark",
    "Linux (Ubuntu / Alpine)",
    "Wireshark",
  ];

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="section-header">
        <div>
          <div className="section-label">Skills</div>
          <h2 className="section-title" id="skills-title">
            Tech I use to build and operate systems
          </h2>
        </div>
        <p className="section-description">
          My work spans infrastructure-as-code, CI/CD, distributed systems,
          and backend engineering with a strong focus on reliability and
          developer experience.
        </p>
      </div>

      <div className="grid grid-2">
        <div>
          <h3 className="section-label">DevOps &amp; Cloud</h3>
          <div className="pill-row">
            {devOpsSkills.map((skill) => (
              <span
                key={skill}
                className="pill pill-clickable"
                onClick={() => onSkillClick(skill)}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="section-label">Backend, Data &amp; Systems</h3>
          <div className="pill-row">
            {backendSkills.map((skill) => (
              <span
                key={skill}
                className="pill pill-clickable"
                onClick={() => onSkillClick(skill)}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

