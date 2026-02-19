import Modal from "./Modal";
import { truncateText } from "../utils/textUtils";
import { itemMatchesSkill } from "../utils/skillUtils";

const Projects = ({
  projectsData,
  openModal,
  setOpenModal,
  highlightedSkillName,
}) => {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-title"
    >
      <div className="section-header">
        <div>
          <div className="section-label">Projects</div>
          <h2 className="section-title" id="projects-title">
            Systems &amp; platforms I&apos;ve built
          </h2>
        </div>
        <p className="section-description">
          A mix of self-hosted infra, streaming data pipelines and
          full-stack applications that reflect how I think about reliability
          and scale.
        </p>
      </div>

      <div className="grid grid-2">
        {projectsData.map((item) => {
          const isHighlighted =
            highlightedSkillName &&
            itemMatchesSkill(item, highlightedSkillName);
          return (
            <article
              key={item.id}
              className={`card card-clickable ${
                isHighlighted ? "card-highlighted" : ""
              }`}
              onClick={() => setOpenModal(`project-${item.id}`)}
            >
              <header className="card-header">
                <div>
                  <h3 className="card-title">{item.title}</h3>
                  <div className="card-meta">{item.meta}</div>
                </div>
                <div className="card-header-tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="tag tag-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </header>
              <div className="card-body">{truncateText(item.content)}</div>
              {item.link && (
                <footer className="card-footer">
                  <div className="card-tags">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </footer>
              )}
            </article>
          );
        })}
      </div>

      {projectsData.map((item) => (
        <Modal
          key={item.id}
          id={item.id}
          isOpen={openModal === `project-${item.id}`}
          onClose={() => setOpenModal(null)}
          title={item.title}
          meta={item.meta}
          tags={item.tags}
          content={item.content}
          link={item.link}
          linkText={item.linkText}
        />
      ))}
    </section>
  );
};

export default Projects;

