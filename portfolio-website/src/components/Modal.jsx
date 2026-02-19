import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, meta, tags, content, link, linkText, id }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLinkClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const handleModalContentClick = (e) => {
    // Don't trigger if clicking the close button or the link button
    if (
      e.target.closest(".modal-close") ||
      e.target.closest(".btn-primary")
    ) {
      return;
    }
    // If link exists, open it on second click
    if (link) {
      handleLinkClick();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div
        className={`modal-content ${link ? "modal-clickable" : ""}`}
        onClick={handleModalContentClick}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <header className="modal-header">
          <h2 className="modal-title">{title}</h2>
          {meta && <div className="modal-meta">{meta}</div>}
          {tags && (
            <div className="modal-tags">
              {tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div className="modal-body">
          <p>{content}</p>
          
          {/* StreamWise-specific section */}
          {id === "streamwise" && (
            <div className="modal-section">
              <h3 className="modal-section-title">About StreamWise</h3>
              <p className="modal-section-content">
                StreamWise is a platform focused on livestream analytics and monitoring. 
                During my internship, I worked on building scalable infrastructure for 
                real-time stream ingestion and processing, leveraging Go&apos;s concurrency 
                model and Kubernetes for orchestration.
              </p>
              <div className="modal-section-highlights">
                <h4 className="modal-section-subtitle">Key Achievements:</h4>
                <ul className="modal-section-list">
                  <li>Designed and implemented multi-stream monitoring architecture</li>
                  <li>Optimized Kubernetes deployments for high-concurrency workloads</li>
                  <li>Implemented secure OAuth 2.0 authentication flows</li>
                  <li>Reduced latency in stream processing pipeline</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        {link && (
          <footer className="modal-footer">
            <button onClick={handleLinkClick} className="btn-primary">
              {linkText || "View Details"}
            </button>
          </footer>
        )}
      </div>
    </div>
  );
};

export default Modal;

