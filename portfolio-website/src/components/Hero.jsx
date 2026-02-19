const Hero = () => {
  return (
    <section aria-labelledby="hero-heading">
      <span className="section-label">Software Engineering @ McGill</span>
      <div className="hero">
        <div>
          <h1 id="hero-heading" className="hero-title">
            DevOps &amp; Cloud Engineer
            <br />
            focused on reliable systems.
          </h1>
          <p className="hero-subtitle">
            I&apos;m Steve Chen, a Software Engineering student (AI minor) at
            McGill University, graduating in 2026. I design and ship
            production-ready infrastructure, from Kubernetes-backed
            microservices to real-time streaming data platforms.
          </p>
          <div className="hero-actions">
            <a href={`${import.meta.env.BASE_URL}Steve_Chen.pdf`} className="btn-primary">
              Download Resume
            </a>
            <a
              href="https://github.com/Blacklotus89898"
              className="btn-ghost"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/steve-chen-b08308250"
              className="btn-ghost"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Profile quick facts">
          <div className="hero-highlight">
            Actively seeking 2026 new grad DevOps/SRE roles
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-label">Degree</div>
              <div className="stat-value">
                B.Eng. Software Engineering (AI Minor)
              </div>
              <div className="card-meta">McGill University · 2022–2026</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">GPA</div>
              <div className="stat-value">3.73 / 4.0</div>
              <div className="card-meta">Strong academic standing</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Cloud &amp; DevOps</div>
              <div className="stat-value">Terraform · Jenkins · K8s</div>
              <div className="card-meta">AWS · Docker · Proxmox</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Based in</div>
              <div className="stat-value">Montreal, Canada</div>
              <div className="card-meta">Open to relocation</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;

