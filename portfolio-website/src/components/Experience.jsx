import Modal from "./Modal";
import { truncateText } from "../utils/textUtils";
import { itemMatchesSkill } from "../utils/skillUtils";

const Experience = ({
  experienceData,
  openModal,
  setOpenModal,
  highlightedSkillName,
}) => {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <div className="section-header">
        <div>
          <div className="section-label">Experience</div>
          <h2 className="section-title" id="experience-title">
            Building infrastructure and products in production
          </h2>
        </div>
        <p className="section-description">
          I&apos;ve contributed to streaming platforms, 5G/6G network
          tooling, fintech products, and internal IT systems across
          different environments.
        </p>
      </div>

      <div className="grid">
        {experienceData.map((item) => {
          const isHighlighted =
            highlightedSkillName &&
            itemMatchesSkill(item, highlightedSkillName);
          return (
            <article
              key={item.id}
              className={`card card-clickable ${
                isHighlighted ? "card-highlighted" : ""
              }`}
              onClick={() => setOpenModal(item.id)}
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
            </article>
          );
        })}
      </div>

      {experienceData.map((item) => (
        <Modal
          key={item.id}
          id={item.id}
          isOpen={openModal === item.id}
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

export default Experience;

