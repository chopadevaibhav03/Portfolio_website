import { Code, Terminal, Database, ShieldCheck } from "lucide-react";

export const About = () => {
  const principles = [
    {
      icon: <Code className="w-4 h-4 text-accent" />,
      title: "Pragmatic Engineering",
      description: "Choosing proven, reliable tools over fleeting industry hype. Software should solve real user and business problems directly.",
    },
    {
      icon: <Database className="w-4 h-4 text-accent" />,
      title: "Data Integrity First",
      description: "Designing structured relational schemas and consistent API contracts so systems remain dependable as data scales.",
    },
    {
      icon: <Terminal className="w-4 h-4 text-accent" />,
      title: "Systems Awareness",
      description: "Understanding how code behaves at runtime across Linux servers, network ports, databases, and container processes.",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-accent" />,
      title: "Honest Communication",
      description: "Setting clear technical expectations, transparent scoping, and continuous communication throughout development.",
    },
  ];

  return (
    <section id="about" className="py-10 md:py-14 border-b border-border/60 bg-surface/20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Background &amp; Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              About Me
            </h2>
          </div>
          <p className="text-sm text-text-secondary max-w-md">
            A developer focused on practical software execution, solid system mechanics, and continuous technical growth.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-text-secondary leading-relaxed">
            <p className="text-text-primary font-medium text-base sm:text-lg">
              I&apos;m Vaibhav, a software developer interested in building practical applications that solve real operational and business challenges.
            </p>

            <p>
              My hands-on experience spans full-stack web development, backend services, relational databases, Linux server environments, and workflow automation. I regularly work with technologies including Java, Spring Boot, React, Python, FastAPI, SQL, and Oracle.
            </p>

            <p>
              I enjoy working on projects where software extends beyond a simple static interface — particularly applications involving structured business workflows, operational dashboards, backend data pipelines, and intelligent system automation.
            </p>

            <p>
              Rather than pretending to be an expert in everything, I take pride in being a disciplined, reliable engineer: someone who understands the stack end-to-end, learns continuously through experimentation, and communicates with transparency.
            </p>
          </div>

          {/* Principles Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted mb-1">
              Core Engineering Values:
            </div>
            {principles.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-surface border border-border hover:border-border-active transition-all"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1 rounded bg-surface-subtle border border-border">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed pl-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
