import { SKILL_CATEGORIES } from "../../data/portfolioData";
import { BookOpen } from "lucide-react";

export const Skills = () => {
  const learningTopics = [
    "LangChain & Autonomous Agent Architecture",
    "RAG (Retrieval-Augmented Generation) Pipelines",
    "Structured Tool Calling & Schema Guards",
    "Local LLM Inference with Ollama",
    "High-Performance REST APIs (FastAPI & Spring)",
    "Database Diagnostics & Optimization Scripts",
  ];

  return (
    <section id="skills" className="py-10 md:py-14 border-b border-border/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Skills &amp; Technologies
            </h2>
          </div>
          <p className="text-sm text-text-secondary max-w-md">
            Languages, frameworks, and system tools actively practiced in real development, categorized transparently without fabricated percentage bars.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="p-6 rounded-xl bg-surface border border-border hover:border-border-active transition-all"
            >
              <h3 className="text-sm font-mono font-semibold text-text-primary uppercase tracking-wider mb-4 pb-2 border-b border-border/60 flex items-center justify-between">
                <span>{cat.name}</span>
                <span className="text-xs text-text-muted font-normal lowercase">
                  {cat.skills.length} tools
                </span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-surface-subtle border border-border text-text-secondary hover:text-text-primary hover:border-border-active transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section 19: "Always Learning" Sub-section */}
        <div className="p-6 sm:p-8 rounded-xl bg-surface-subtle border border-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded bg-surface border border-border">
                <BookOpen className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary">
                  Always Learning &amp; Researching
                </h3>
                <p className="text-xs text-text-secondary">
                  Continuous personal research topics, documentation deep dives, and hands-on prototypes.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono font-medium text-emerald-900 bg-emerald-100 border border-emerald-300 dark:text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-700/60 px-2.5 py-1 rounded w-fit">
              Active Growth
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {learningTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-surface border border-border/80 text-xs text-text-secondary flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
