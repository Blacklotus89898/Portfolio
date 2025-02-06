import profileImage from "../assets/image.png";

const Ericsson = () => {
    return (
        <section id="section1" style={sectionStyle}>
            <div>
                <h2 style={sectionHeadingStyle}>Ericsson SDE</h2>
                <img
                    src={profileImage}
                    alt="Profile"
                    style={imageStyle}
                />
                <p style={sectionTextStyle}>
                    I am working as a Software Developer Intern at Ericsson for 8 months.
                    I'm am currently implementing a PoCs for emerging 5 and 6G
                    Telecommunication technology on Ericsson RnD team.
                </p>
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
    overflow: "hidden", // Added overflow hidden
};

const sectionHeadingStyle = {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
};

const sectionTextStyle = {
    fontSize: "16px",
};

const imageStyle = {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    float: "left",
    marginRight: "20px",
    marginBottom: "20px",
    marginTop: "20px",
    boxShadow: "0px 8px 8px -4px gray",
    flex: "0 0 150px",
};
