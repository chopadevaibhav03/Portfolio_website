import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import { PERSONAL_INFO } from "../../data/portfolioData";

export const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Title */}
        <div className="text-center sm:text-left space-y-1">
          <div className="text-base font-bold text-text-primary tracking-tight">
            {PERSONAL_INFO.name}
          </div>
          <div className="text-xs text-text-secondary">
            {PERSONAL_INFO.title} · {PERSONAL_INFO.location}
          </div>
        </div>

        {/* Right: Clean Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-text-muted">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          <span className="hidden sm:inline text-border">|</span>

          <span>&copy; 2026 {PERSONAL_INFO.name}</span>
        </div>

      </div>
    </footer>
  );
};
