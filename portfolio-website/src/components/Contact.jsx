const Contact = () => {
  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-title"
    >
      <div className="section-header">
        <div>
          <div className="section-label">Contact</div>
          <h2 className="section-title" id="contact-title">
            Let&apos;s talk about infrastructure and systems
          </h2>
        </div>
      </div>
      <div className="contact-grid">
        <p className="contact-note">
          I&apos;m excited about roles where I can work end-to-end on
          developer tooling, observability, and automated infrastructure.
          If you&apos;re hiring for DevOps, SRE, platform, or backend roles,
          I&apos;d love to connect.
        </p>
        <div className="contact-list">
          <div>
            <div className="contact-item-label">Email</div>
            <div className="contact-item-value">
              <a href="mailto:steve.chen@mail.mcgill.ca">
                steve.chen@mail.mcgill.ca
              </a>
            </div>
          </div>
          <div>
            <div className="contact-item-label">GitHub</div>
            <div className="contact-item-value">
              <a href="https://github.com/Blacklotus89898">
                @Blacklotus89898
              </a>
            </div>
          </div>
          <div>
            <div className="contact-item-label">LinkedIn</div>
            <div className="contact-item-value">
              <a href="https://linkedin.com/in/steve-chen-b08308250">
                steve-chen-b08308250
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

