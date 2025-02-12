import profileImage from "../assets/ericsson.png";

const Ericsson = () => {
  return (
    <section id="section1" style={sectionStyle}>
      <h2 style={sectionHeadingStyle}>Ericsson SDE Intern - 8 months</h2>
      <div
        style={{
          border: "2px solid black",
          display: "flex",
          padding: "20px",
          borderRadius: "8px"
        }}
      >
        <a
          href="https://www.ericsson.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={profileImage} alt="Profile" style={imageStyle} />
        </a>
        <ul style={sectionTextStyle}>
          <li>
            I am working as a Software Developer Intern at Ericsson for 8
            months.
          </li>
          <li>
            I&apos;m currently implementing PoCs for emerging 5 and 6G
            Telecommunication technology on Ericsson RnD team.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Ericsson;

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
  paddingLeft: "20px",
  color: "#333",
};

const sectionTextStyle = {
  fontSize: "14px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const imageStyle = {
  width: "350px",
  height: "200px",
  float: "left",
  marginRight: "20px",
  marginBottom: "20px",
  marginTop: "20px",
  boxShadow: "0px 8px 8px -4px gray",
  flex: "0 0 150px",
};
