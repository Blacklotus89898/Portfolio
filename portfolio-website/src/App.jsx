import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import TableOfContents from "./components/tableOfContents";
import profileImage from "./assets/profile.jpg"; // ✅ Import image correctly
import roboticsImage from "./assets/robotics.png"; // ✅ Import robotics image correctly
import DrawingCanvas from "./components/drawingCanvas";
import FadingCanvas from "./components/fading";
import Ericsson from "./components/ericsson";
import Payfacto from "./components/payfacto";
// import BoardComponent from "./components/fading";

function App() {
  return (
    <>
      <Header className="header" />
      {/* <div style={{ paddingTop: "100px" }}></div> */}
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <TableOfContents /> 
        <img src={roboticsImage} alt="Robotics" style={{  }} />
    </div>

      <section id="section1" style={sectionStyle}>  
        <h2 style={sectionHeadingStyle}>About Me</h2>
        <div
          style={{
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            src={profileImage}
            alt="Profile"
            style={{
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              float: "left",
              marginRight: "20px",
              marginBottom: "20px",
              marginTop: "20px",
              boxShadow: "0px 8px 8px -4px gray",
              flex: "0 0 200px",
            }}
          />

          <div style={{ marginLeft: "30px", flex: "1 0 250px" }}>
            <h2>Hi all, I&apos;m Steve.</h2>
            <ul>
              <li>B.Eng. at McGill University</li>
              <li>Coop Software Engineering Student U3</li>
              <li>Robotics and 3D Simulation Enthusiast</li>
              <li>3D Modeling with Blender Learner</li>
              <li>Arch Linux Amateur</li>
            </ul>
          </div>

          <div
            style={{ clear: "both", border: "1px solid lightgray", flex: 1 }}
          >
            Unleash your craetivity
            <DrawingCanvas />
          </div>
        </div>
      </section>

      {/* <FadingCanvas /> */}

      <section id="section2" style={sectionStyle}>

      <Ericsson />

      <Payfacto />
      </section>

      <section id="section3" style={sectionStyle}>
        <h2 style={sectionHeadingStyle}>Software Engineering Projects</h2>
        <ul style={listStyle}>
          <li>
            Sports Center Management System: React + SpringBoot:
            <a
              href="https://github.com/Blacklotus89898/Sports-Center-Management-System"
              style={linkStyle}
            >
              {" "}
              Check it out
            </a>
          </li>
          <li>
            Cash Register, Report and Inventory Management System:
            <a
              href="https://github.com/Blacklotus89898/CashierApp"
              style={linkStyle}
            >
              {" "}
              Check it out
            </a>
          </li>
          <li>
            Robotic Club Repo:
            <a
              href="https://github.com/mcgill-robotics/rover"
              style={linkStyle}
            >
              {" "}
              Check it out
            </a>
          </li>
        </ul>
      </section>

      {/* Personal Projects Section */}
      <section id="section4" style={sectionStyle}>
        <h2 style={sectionHeadingStyle}>Personal Projects</h2>
        <ul style={listStyle}>
          <li>
            ROS Noetic Node Controller Interface:
            <a
              href="https://github.com/Blacklotus89898/MyROS"
              style={linkStyle}
            >
              {" "}
              Check it out
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

const sectionStyle = {
  // backgroundColor: "#f4f4f4", // Light background color
  color: "#333", // Dark text color for readability
  padding: "20px",
  border: "1px solid lightgray",
  borderRadius: "8px",
  marginBottom: "20px",
  marginTop: "20px", // Added marginTop to avoid sticking to the previous section
  boxShadow: "0px 4px 2px -2px gray", // Adding shadow effect
};

const sectionHeadingStyle = {
  fontSize: "24px",
  marginBottom: "10px",
  color: "#333",
};

// const sectionTextStyle = {
//   fontSize: "16px",
// };

const listStyle = {
  listStyleType: "none",
  paddingLeft: "0",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.3s, text-decoration 0.3s", // Smooth transition for color and underline effect
};

// Adding hover effect for links
// Removed unused linkStyleWithHover

export default App;
