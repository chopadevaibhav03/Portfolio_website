import { useEffect } from "react";

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  const getStatusBadgeClass = (statusType) => {
    switch (statusType) {
      case "exploration":
        return "text-amber-900 bg-amber-100 border-amber-300 dark:text-amber-300 dark:bg-amber-950/60 dark:border-amber-700/60 font-medium";
      case "experience":
        return "text-sky-900 bg-sky-100 border-sky-300 dark:text-sky-300 dark:bg-sky-950/60 dark:border-sky-700/60 font-medium";
      case "completed":
      default:
        return "text-emerald-900 bg-emerald-100 border-emerald-300 dark:text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-700/60 font-medium";
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-surface rounded-xl border border-border shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-surface-subtle/50">
          <div>
            <div className="flex items-center gap-2 text-xs text-text-muted mb-2 font-mono">
              <span>{project.projectType}</span>
              <span>·</span>
              <span className={`inline-block px-2.5 py-0.5 text-[11px] font-mono rounded border ${getStatusBadgeClass(project.statusType)}`}>
                {project.status}
              </span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-text-primary">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-mono text-text-secondary hover:text-text-primary hover:bg-surface border border-border rounded transition-colors"
            aria-label="Close modal"
          >
            [Close ESC]
          </button>
        </div>

        {/* Scrollable Content Body — Typographic, no logos, no icons */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* 1. Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              Overview
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* 2. Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 p-5 rounded-lg bg-surface-subtle border border-border">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary">
                Problem &amp; Context
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
            <div className="space-y-2 p-5 rounded-lg bg-surface-subtle border border-border">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary">
                Technical Approach
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>
          </div>

          {/* 3. Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              Key Features Implemented
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary list-disc pl-4">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <li key={idx} className="leading-relaxed">
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Technologies Used */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-surface-subtle border border-border text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Contribution & What I Learned */}
          <div className="space-y-4 pt-4 border-t border-border">
            <div className="space-y-1">
              <h4 className="text-xs font-mono font-semibold text-text-primary">
                My Direct Contribution:
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {caseStudy.contribution}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs font-mono font-semibold text-text-primary">
                Challenges &amp; Lessons Learned:
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {caseStudy.challenges} {caseStudy.learned}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions — Text actions only */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-t border-border bg-surface-subtle/50 gap-4">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <span>Status:</span>
            <span className={`inline-block px-2 py-0.5 text-[11px] font-mono rounded border ${getStatusBadgeClass(project.statusType)}`}>
              {project.status}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-text-primary bg-surface border border-border hover:border-border-active rounded-md transition-colors"
              >
                GitHub &nearr;
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-white bg-accent hover:bg-accent-hover rounded-md transition-colors"
              >
                Live Demo &nearr;
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-text-secondary hover:text-text-primary transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
