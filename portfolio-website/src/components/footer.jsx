const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <nav style={navStyle}>
          <a href="../../resume.pdf" style={linkStyle}>
            My Resume
          </a>
          <a href="mailto:steve.chen@mail.mcgill.ca" style={linkStyle}>
            Email Contact
          </a>
          <a href="https://github.com/Blacklotus89898" style={linkStyle}>
            Github Portfolio
          </a>
        </nav>
        <p>&copy; McGill Robotics Rover Division</p>
      </div>
    </footer>
  );
};
// Inline styles for the footer
const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px 0",
  bottom: 0,
  width: "100%",
  textAlign: "center",
};

const footerContainerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const navStyle = {
  marginTop: "10px",
};

const linkStyle = {
  color: "#fff",
  margin: "0 15px",
  textDecoration: "none",
};

export default Footer;
