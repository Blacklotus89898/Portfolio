import { useState } from "react";

// Header Component
const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={{ flex: 2 }}>
        <button>Sidebar</button>
      </div>
      <div style={{ flex: "0 0 300px" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <NavLink href="#home" text="Home" />
          <span style={{ color: "white" }}>|</span>
          <NavLink href="https://github.com/Blacklotus89898" text="Github" />
          <span style={{ color: "white" }}>|</span>
          <NavLink href="/Steve_Chen.pdf" text="Resume" />
        </nav>
      </div>
    </header>
  );
};

// NavLink Component for hover effects
const NavLink = ({ href, text }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const linkStyleWithHover = {
    ...linkStyle,
    textDecoration: hovered ? "underline" : "none",
    boxShadow: hovered ? "0px 4px 2px -2px gray" : "none",
  };

  return (
    <a
      href={href}
      style={linkStyleWithHover}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </a>
  );
};

// Inline styles for the header
const headerStyle = {
  display: "flex",
  justifyContent: "space-around",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  paddingTop: "5px",
  paddingRight: "15px",
  backgroundColor: 'white',
  // trnasparent: '0.09',
};

const linkStyle = {
  font: "inherit",
  color: "white",
  textDecoration: "none",
  fontSize: "1.2em", // Increase font size
  transition: "all 0.3s ease", // Smooth transition for hover effects
  backgroundColor: "black", // Black background for the links
  padding: "7px 15px", // Add some padding for better appearance
  // borderRadius: '5px', // Optional: Add border radius for rounded corners
};

export default Header;
