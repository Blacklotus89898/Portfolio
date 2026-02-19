import { useState } from "react";
import { getSkillSearchTerms } from "../utils/skillUtils";
import { experienceData } from "../data/experienceData";
import { projectsData } from "../data/projectsData";
import { itemMatchesSkill } from "../utils/skillUtils";

export const useSkillNavigation = () => {
  const [highlightedSkillName, setHighlightedSkillName] = useState(null);

  const handleSkillClick = (skill) => {
    const searchTerms = getSkillSearchTerms(skill);
    if (!searchTerms || searchTerms.length === 0) return;

    // Store the skill name for highlighting
    setHighlightedSkillName(skill);

    // Find which section has matching items
    const hasExperienceMatch = experienceData.some((item) =>
      itemMatchesSkill(item, skill)
    );
    const hasProjectMatch = projectsData.some((item) =>
      itemMatchesSkill(item, skill)
    );

    // Scroll to the appropriate section
    if (hasExperienceMatch) {
      setTimeout(() => {
        document.getElementById("experience")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else if (hasProjectMatch) {
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }

    // Clear highlight after 4 seconds
    setTimeout(() => {
      setHighlightedSkillName(null);
    }, 4000);
  };

  return {
    highlightedSkillName,
    handleSkillClick,
  };
};

