const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <span style={footerNote}>
          Built by Steve Chen · Software Engineering (AI minor), McGill
          University · Class of 2026
        </span>
        <nav style={navStyle}>
          <a href={`${import.meta.env.BASE_URL}Steve_Chen.pdf`} style={linkStyle}>
            Resume
          </a>
          <a href="mailto:steve.chen@mail.mcgill.ca" style={linkStyle}>
            Email
          </a>
          <a href="https://github.com/Blacklotus89898" style={linkStyle}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/steve-chen-b08308250" style={linkStyle}>
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

const footerStyle = {
  borderTop: "1px solid var(--border-subtle)",
  padding: "1.1rem 1.5rem 1.4rem",
  marginTop: "auto",
  backgroundColor: "var(--bg-alt)",
  transition: "background-color 0.3s ease, border-color 0.3s ease",
};

const footerContainerStyle = {
  maxWidth: "1120px",
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "0.8rem",
  color: "var(--muted)",
};

const footerNote = {
  opacity: 0.9,
};

const navStyle = {
  display: "flex",
  gap: "0.9rem",
  flexWrap: "wrap",
};

const linkStyle = {
  color: "var(--text)",
  textDecoration: "none",
  transition: "color 0.2s ease",
};

export default Footer;
