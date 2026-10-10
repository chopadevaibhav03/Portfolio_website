import { PROFESSIONAL_EXPERIENCE } from "../../data/portfolioData";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section id="experience" className="py-10 md:py-14 border-b border-border/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Career &amp; Technical Roles
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Professional Experience
            </h2>
          </div>
          <p className="text-sm text-text-secondary max-w-md">
            Verified software development roles, internships, and structured industry programs focusing on APIs, object-oriented systems, and team collaboration.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {PROFESSIONAL_EXPERIENCE.map((exp, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-xl bg-surface border border-border hover:border-border-active transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-text-primary">
                      {exp.role}
                    </h3>
                    <span className="text-border">·</span>
                    <span className="text-base font-semibold text-accent">
                      {exp.company}
                    </span>
                  </div>
                  <span className="inline-block text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-surface-subtle text-text-secondary border border-border">
                    {exp.type}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-text-secondary bg-surface-subtle px-3 py-1.5 rounded border border-border shrink-0 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-text-muted" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {exp.summary}
              </p>

              {/* Highlights List */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono font-medium text-text-primary block">
                  Responsibilities &amp; Scope:
                </span>
                <ul className="space-y-1.5 text-xs text-text-secondary list-disc pl-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Unboxed Tags */}
              <div className="pt-4 border-t border-border/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-muted">
                <span className="text-text-secondary font-medium">Technologies:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tech} className="inline-flex items-center">
                    <span className="text-text-primary font-mono">{tech}</span>
                    {tIdx < exp.technologies.length - 1 && (
                      <span className="ml-2 text-border" aria-hidden="true">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Technical Exposure Summary */}
        <div className="mt-8 p-6 rounded-xl bg-surface-subtle border border-border space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Technical Exposure &amp; System Administration</span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            Alongside formal roles, my professional technical exploration encompasses Linux enterprise environments (RHEL), Oracle relational database diagnostics, Apache Tomcat deployment, and automation scripting with Python and Bash.
          </p>
        </div>

      </div>
    </section>
  );
};
