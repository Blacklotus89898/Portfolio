
// TableOfContents Component
const TableOfContents = () => {
  return (
    <nav style={tocStyle}>
      <h2 style={headingStyle}>Table of Contents</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <a href="#section1" style={linkStyle}>
            About Me
          </a>
        </li>
        <li style={listItemStyle}>
          <a href="#section2" style={linkStyle}>
            Software Engineering Projects
          </a>
        </li>
        <li style={listItemStyle}>
          <a href="#section3" style={linkStyle}>
            Personal Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

// Inline styles for the Table of Contents
const tocStyle = {
  backgroundColor: '#333',  // Match header and footer background color
  color: '#fff',            // Match header and footer text color
  padding: '20px',
  marginBottom: '20px',
  borderRadius: '8px',
  width: '250px',
};

const headingStyle = {
  fontSize: '18px',
  marginBottom: '10px',
  color: '#fff',            // Match header and footer text color
  textAlign: 'center',
};

const listStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
};

const listItemStyle = {
  marginBottom: '10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',            // Match header and footer link color
  fontWeight: '500',
  transition: 'color 0.3s',
};

export default TableOfContents;
