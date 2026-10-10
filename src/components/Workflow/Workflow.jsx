import { WORKFLOW_STEPS } from "../../data/portfolioData";

export const Workflow = () => {
  return (
    <section id="process" className="py-10 md:py-14 border-b border-border/60 bg-surface/20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Engineering Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              How I Work
            </h2>
          </div>
          <p className="text-sm text-text-secondary max-w-md">
            A structured, disciplined process designed to ensure clarity, eliminate surprises, and deliver reliable software on time.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-xl bg-surface border border-border hover:border-border-active transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-mono font-bold text-accent mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-mono text-text-muted">
                Step {step.step} of 05
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
