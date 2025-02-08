import profileImage from "../assets/payfacto.png";

const Payfacto = () => {
  return (
    <section id="section1" style={sectionStyle}>
      <h2 style={sectionHeadingStyle}>Payfacto Fullstack Intern - 4 Months</h2>
      <div
        style={{
          border: "2px solid black",
          display: "flex",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <a
          href="https://payfacto.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={profileImage} alt="Profile" style={imageStyle} />
        </a>
        <ul style={sectionTextStyle}>
          <li>
            I have been working as a Fullstack Software Developer Intern at
            Payfacto for 4 months.
          </li>
          <li>
            This experience has allowed me to work on a variety of projects,
            including a new feature for the Payfacto Interal Portal using
            Golang, MySQL and VueJs.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Payfacto;

const sectionStyle = {
  color: "#333",
  padding: "20px",
  border: "1px solid lightgray",
  borderRadius: "8px",
  marginBottom: "20px",
  marginTop: "20px",
  boxShadow: "0px 4px 2px -2px gray",
  overflow: "hidden",
};

const sectionHeadingStyle = {
  fontSize: "24px",
  marginBottom: "10px",
  color: "#333",
};

const sectionTextStyle = {
  fontSize: "18px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const imageStyle = {
  width: "400px",
  height: "150px",
  float: "left",
  marginRight: "20px",
  marginBottom: "20px",
  marginTop: "20px",
  boxShadow: "0px 8px 8px -4px gray",
  flex: "0 0 150px",
};
