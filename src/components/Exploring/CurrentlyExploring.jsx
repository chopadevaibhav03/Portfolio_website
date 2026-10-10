import { CURRENTLY_EXPLORING } from "../../data/portfolioData";
import { Sparkles, Terminal, Database, Activity, Layers } from "lucide-react";

export const CurrentlyExploring = () => {
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <Terminal className="w-4 h-4 text-accent" />;
      case 1:
        return <Database className="w-4 h-4 text-accent" />;
      case 2:
        return <Activity className="w-4 h-4 text-accent" />;
      case 3:
        return <Layers className="w-4 h-4 text-accent" />;
      default:
        return <Sparkles className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section className="py-10 md:py-12 border-b border-border/60 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Continuous Growth & Technical R&amp;D
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Currently Exploring
            </h2>
          </div>
          <p className="text-sm text-text-secondary max-w-md">
            Active areas of experimentation, local prototyping, and technical study — demonstrating technical growth without exaggerating production scope.
          </p>
        </div>

        {/* Exploration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CURRENTLY_EXPLORING.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-lg bg-surface border border-border hover:border-border-active transition-all group"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-1.5 rounded bg-surface-subtle border border-border group-hover:border-accent/40 transition-colors">
                  {getIcon(index)}
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Technologies unboxed list */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-muted">
                <span className="text-text-secondary font-medium">Stack:</span>
                {item.technologies.map((tech, i) => (
                  <span key={tech} className="inline-flex items-center">
                    <span className="text-text-primary font-mono">{tech}</span>
                    {i < item.technologies.length - 1 && (
                      <span className="ml-2 text-border" aria-hidden="true">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
