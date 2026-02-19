import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header style={headerStyle}>
      <div style={brandStyle}>
        <span style={brandDot} />
        <span style={brandText}>Steve Chen</span>
        <span style={brandTag}>DevOps&nbsp;/&nbsp;Cloud</span>
      </div>
      <nav style={navStyle}>
        <NavLink href="#top" text="Home" />
        <NavLink href="#experience" text="Experience" />
        <NavLink href="#projects" text="Projects" />
        <NavLink href="#contact" text="Contact" />
        <button onClick={toggleTheme} style={themeToggleStyle} aria-label="Toggle dark mode">
          {isDark ? "☀️" : "🌙"}
        </button>
        <a href={`${import.meta.env.BASE_URL}Steve_Chen.pdf`} style={ctaStyle} className="nav-link">
          Resume
        </a>
      </nav>
    </header>
  );
};

const headerStyle = {
  position: "sticky",
  top: 0,
  zIndex: 40,
  backdropFilter: "blur(18px)",
  background: "var(--header-bg)",
  borderBottom: "1px solid var(--header-border)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.75rem 1.5rem",
  transition: "background-color 0.3s ease, border-color 0.3s ease",
};

const brandStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.55rem",
};

const brandDot = {
  width: "0.9rem",
  height: "0.9rem",
  borderRadius: "999px",
  background: "var(--accent)",
  boxShadow: "0 0 12px rgba(237, 27, 47, 0.4)",
};

const brandText = {
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontSize: "0.78rem",
};

const brandTag = {
  fontSize: "0.7rem",
  color: "var(--muted)",
  padding: "0.15rem 0.55rem",
  borderRadius: "999px",
  border: "1px solid var(--border-subtle)",
  backgroundColor: "var(--bg-alt)",
  transition: "all 0.3s ease",
};

const navStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  fontSize: "0.85rem",
};

const linkStyle = {
  color: "var(--text)",
  textDecoration: "none",
  padding: "0.25rem 0.55rem",
  borderRadius: "999px",
  border: "1px solid transparent",
  transition: "all 0.16s ease-out",
  position: "relative",
};

// Add hover effect via CSS class
const NavLink = ({ href, text }) => {
  return (
    <a
      href={href}
      style={linkStyle}
      className="nav-link"
    >
      {text}
    </a>
  );
};

const themeToggleStyle = {
  background: "var(--bg-alt)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "999px",
  padding: "0.4rem 0.7rem",
  cursor: "pointer",
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
  color: "var(--text)",
};

const ctaStyle = {
  ...linkStyle,
  borderColor: "var(--border-subtle)",
  backgroundColor: "var(--bg-alt)",
};

export default Header;
