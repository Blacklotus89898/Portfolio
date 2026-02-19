import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";
import { experienceData } from "./data/experienceData";
import { projectsData } from "./data/projectsData";
import { useSkillNavigation } from "./hooks/useSkillNavigation";

function App() {
  const [openModal, setOpenModal] = useState(null);
  const { highlightedSkillName, handleSkillClick } = useSkillNavigation();

  return (
    <div className="app-shell" id="top">
      <Header />
      <main className="app-main">
        <Hero />
        <Skills onSkillClick={handleSkillClick} />
        <Experience
          experienceData={experienceData}
          openModal={openModal}
          setOpenModal={setOpenModal}
          highlightedSkillName={highlightedSkillName}
        />
        <Projects
          projectsData={projectsData}
          openModal={openModal}
          setOpenModal={setOpenModal}
          highlightedSkillName={highlightedSkillName}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
