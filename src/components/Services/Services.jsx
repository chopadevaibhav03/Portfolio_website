import { SERVICES } from "../../data/portfolioData";
import { Check, Code2, LayoutDashboard, Server, Database, Cog, Bot } from "lucide-react";

export const Services = () => {
  const getServiceIcon = (id) => {
    switch (id) {
      case "web-apps":
        return <Code2 className="w-5 h-5 text-accent" />;
      case "dashboards":
        return <LayoutDashboard className="w-5 h-5 text-accent" />;
      case "backend-apis":
        return <Server className="w-5 h-5 text-accent" />;
      case "database-apps":
        return <Database className="w-5 h-5 text-accent" />;
      case "automation":
        return <Cog className="w-5 h-5 text-accent" />;
      case "ai-features":
        return <Bot className="w-5 h-5 text-accent" />;
      default:
        return <Code2 className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="services" className="py-10 md:py-14 border-b border-border/60 bg-surface/20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Freelance &amp; Engineering Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              What I Can Build
            </h2>
          </div>
          <p className="text-sm text-text-secondary max-w-md">
            Direct freelance execution focused on solving operational problems, building custom web platforms, and establishing solid backend foundations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 rounded-xl bg-surface border border-border hover:border-border-active transition-all group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-surface-subtle border border-border group-hover:border-accent/40 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-text-secondary">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best For Box */}
              <div className="pt-4 border-t border-border/60">
                <span className="text-[11px] font-mono text-text-muted block mb-1">
                  Ideal Context:
                </span>
                <p className="text-xs text-text-secondary italic">
                  {service.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Small Bottom Notice */}
        <div className="mt-12 p-4 rounded-lg bg-surface-subtle border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            Need a custom integration, specific architecture review, or existing codebase refactoring?
          </p>
          <a
            href="#contact"
            className="shrink-0 text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            Discuss Custom Requirements &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
