import { useState } from "react";
import { PROJECTS } from "../../data/portfolioData";
import { ProjectModal } from "./ProjectModal";

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

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
    <section id="work" className="py-10 md:py-14 border-b border-border/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Portfolio &amp; Technical Evidence
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-sm text-text-secondary max-w-md">
            A curated selection of applications, system prototypes, and backend architectures built to solve concrete problems.
          </p>
        </div>

        {/* Interactive Category Filter Controls (Clean Segmented Control) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface rounded-lg border border-border w-fit mb-10 shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs rounded-md transition-all ${
                activeCategory === cat
                  ? "bg-accent text-white font-semibold shadow-sm"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface-subtle"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid — Typographic, logo-free & icon-free */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-xl bg-surface border border-border hover:border-border-active transition-all group"
            >
              <div className="space-y-4">
                {/* Header Row: Type & Status */}
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs text-text-muted font-mono uppercase tracking-wider">
                    {project.projectType}
                  </span>
                  <span
                    className={`inline-block px-2.5 py-0.5 text-[11px] font-mono rounded border shrink-0 ${getStatusBadgeClass(
                      project.statusType
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project Title — Does NOT hide on hover; transitions to accent */}
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Clean unboxed tech list */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-2 text-xs text-text-muted border-t border-border/40">
                  <span className="text-text-secondary font-medium">Stack:</span>
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={tech} className="inline-flex items-center">
                      <span className="text-text-secondary font-mono">{tech}</span>
                      {i < Math.min(project.technologies.length, 4) - 1 && (
                        <span className="ml-2 text-border" aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-text-muted">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions — Pure text actions, no icons/logos */}
              <div className="pt-5 mt-6 border-t border-border/50 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  Case Study &amp; Details &rarr;
                </button>

                <div className="flex items-center gap-3 text-xs font-mono">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-text-primary transition-colors"
                    >
                      GitHub &nearr;
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover transition-colors"
                    >
                      Demo &nearr;
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
