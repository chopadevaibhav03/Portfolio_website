import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className="pt-2 pb-8 sm:pt-4 sm:pb-10 md:pt-4 md:pb-12 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Positioning & Bio */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 text-xs font-semibold text-emerald-900 bg-emerald-100 border border-emerald-300 dark:text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-700/60 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse"></span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary text-balance">
                {PERSONAL_INFO.title}
              </h1>
              <p className="text-base sm:text-xl font-medium text-text-secondary text-balance">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* Core Narrative / Bio */}
            <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors shadow-sm"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-text-primary bg-surface hover:bg-surface-subtle border border-border hover:border-border-active rounded-md transition-colors"
              >
                Let&apos;s Work Together
              </a>
            </div>

            {/* Quick Links Row */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-text-muted">
              <span className="text-text-secondary font-medium">Connect &amp; Profiles:</span>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-border">·</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-border">·</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo (clean, no box below) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[260px] sm:max-w-[290px] lg:max-w-[320px]">
              <div className="aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden border border-border bg-surface shadow-xl shadow-black/25">
                <img
                  src="/vaibhav.png"
                  alt="Vaibhav Chopade"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
