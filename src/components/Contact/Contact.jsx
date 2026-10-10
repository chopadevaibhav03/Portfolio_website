import { useState } from "react";
import { Mail, Send, Copy, Check, ExternalLink, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import { PERSONAL_INFO } from "../../data/portfolioData";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web Application",
    timeline: "",
    budget: "",
    description: "",
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = [
    "Web Application",
    "Website",
    "Business Dashboard",
    "Backend & REST API",
    "Database Application",
    "Automation & Tooling",
    "AI / LLM Feature",
    "Existing Project Improvement",
    "Other Software Solution",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const constructMailtoLink = () => {
    const subject = encodeURIComponent(
      `[Project Inquiry: ${formData.projectType}] from ${formData.name || "Client"}`
    );
    const body = encodeURIComponent(
      `Hi Vaibhav,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nTimeline: ${formData.timeline || "Flexible"}\nBudget: ${formData.budget || "To be discussed"}\n\nProject Description:\n${formData.description}\n\nLooking forward to hearing from you!`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      return;
    }

    setIsSubmitting(true);
    setSubmittedStatus(null);
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/chopadevaibhav03@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          timeline: formData.timeline || "Flexible",
          budget: formData.budget || "To be discussed",
          message: formData.description,
          _subject: `[Portfolio Inquiry: ${formData.projectType}] from ${formData.name}`,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true || data.message?.includes("success"))) {
        setSubmittedStatus("success");
        setFormData({
          name: "",
          email: "",
          projectType: "Web Application",
          timeline: "",
          budget: "",
          description: "",
        });
      } else {
        setSubmittedStatus("error");
        setErrorMessage(data.message || "Could not deliver automatically. You can launch your email client below.");
      }
    } catch {
      // Fallback
      setSubmittedStatus("error");
      setErrorMessage("Network issue reaching the email dispatch service. You can send directly via your email client.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyInquiry = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nTimeline: ${formData.timeline || "Flexible"}\nBudget: ${formData.budget || "To be discussed"}\n\nDescription:\n${formData.description}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-10 md:py-14 border-b border-border/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Start a Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Have a project in mind?
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Tell me what you&apos;re trying to build, what problem you&apos;re trying to solve, and where you are currently stuck. We can discuss the technical requirements, architecture, and determine the right approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Inquiry Form (Left / Main) */}
          <div className="lg:col-span-7 bg-surface rounded-xl border border-border p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b border-border/60">
              <h3 className="text-lg font-semibold text-text-primary">
                Project Inquiry Form
              </h3>
              <span className="text-[11px] font-mono font-medium text-emerald-900 bg-emerald-100 border border-emerald-300 dark:text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-700/60 px-2.5 py-1 rounded w-fit">
                Delivers to chopadevaibhav03@gmail.com
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono text-text-secondary">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Miller"
                    className="w-full px-3.5 py-2 text-sm bg-surface-subtle border border-border rounded-md text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono text-text-secondary">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2 text-sm bg-surface-subtle border border-border rounded-md text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="space-y-1.5">
                <label htmlFor="projectType" className="block text-xs font-mono text-text-secondary">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 text-sm bg-surface-subtle border border-border rounded-md text-text-primary focus:outline-none focus:border-accent"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-surface text-text-primary">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Timeline */}
                <div className="space-y-1.5">
                  <label htmlFor="timeline" className="block text-xs font-mono text-text-secondary">
                    Target Timeline (optional)
                  </label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder="e.g. 3–4 weeks"
                    className="w-full px-3.5 py-2 text-sm bg-surface-subtle border border-border rounded-md text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
                  />
                </div>

                {/* Budget */}
                <div className="space-y-1.5">
                  <label htmlFor="budget" className="block text-xs font-mono text-text-secondary">
                    Budget Range (optional)
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g. $1,000 - $3,000"
                    className="w-full px-3.5 py-2 text-sm bg-surface-subtle border border-border rounded-md text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label htmlFor="description" className="block text-xs font-mono text-text-secondary">
                  Project Description <span className="text-accent">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Outline the core objective, any existing codebase/APIs, key features, and your current bottleneck..."
                  className="w-full px-3.5 py-2 text-sm bg-surface-subtle border border-border rounded-md text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent resize-y"
                />
              </div>

              {/* Success Notification Banner */}
              {submittedStatus === "success" && (
                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-700/60 text-xs space-y-1 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>Your inquiry has been submitted successfully!</span>
                  </div>
                  <p className="pl-7 text-emerald-900/90 dark:text-emerald-200/90 text-xs leading-relaxed">
                    Your project details have been delivered directly to <strong className="font-mono text-emerald-950 dark:text-white underline">chopadevaibhav03@gmail.com</strong>. I will review your requirements and respond within 24 hours.
                  </p>
                </div>
              )}

              {/* Error / Fallback Notification Banner */}
              {submittedStatus === "error" && (
                <div className="p-4 rounded-lg bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-300 dark:border-rose-700/60 text-xs space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-rose-900 dark:text-rose-300 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 dark:text-rose-400" />
                    <span>{errorMessage || "Delivery notice"}</span>
                  </div>
                  <p className="pl-7 text-rose-900/90 dark:text-rose-200/90 text-xs">
                    You can instantly launch your default email client to send this inquiry directly to <strong className="font-mono text-rose-950 dark:text-white underline">{PERSONAL_INFO.email}</strong>:
                  </p>
                  <div className="pl-7 pt-1">
                    <a
                      href={constructMailtoLink()}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-accent text-white font-semibold text-xs hover:bg-accent-hover transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Email Client</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Form Submission Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover disabled:opacity-60 rounded-md transition-colors shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to Inbox...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send to chopadevaibhav03@gmail.com</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleCopyInquiry}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-text-secondary hover:text-text-primary bg-surface-subtle border border-border rounded-md transition-colors"
                  title="Copy details to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied Details!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Direct Channels & Contact Info (Right) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-xl bg-surface border border-border space-y-4">
              <h4 className="text-sm font-mono font-semibold text-text-primary uppercase tracking-wider">
                Direct Channels
              </h4>
              
              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-between p-3 rounded-lg bg-surface-subtle border border-border hover:border-border-active transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent" />
                    <div>
                      <span className="text-xs text-text-muted block">Direct Email</span>
                      <span className="text-xs font-mono text-text-primary group-hover:text-accent transition-colors">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-surface-subtle border border-border hover:border-border-active transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-accent" />
                    <div>
                      <span className="text-xs text-text-muted block">LinkedIn</span>
                      <span className="text-xs font-mono text-text-primary group-hover:text-accent transition-colors">
                        linkedin.com/in/vaibhav-chopade
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-surface-subtle border border-border hover:border-border-active transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-accent" />
                    <div>
                      <span className="text-xs text-text-muted block">GitHub Repositories</span>
                      <span className="text-xs font-mono text-text-primary group-hover:text-accent transition-colors">
                        github.com/chopadevaibhav03
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                </a>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-5 rounded-xl bg-surface-subtle border border-border space-y-2 text-xs">
              <span className="font-mono text-text-primary block font-semibold">
                Engagement Terms &amp; Availability:
              </span>
              <p className="text-text-secondary leading-relaxed">
                Currently taking on freelance software projects, full-stack MVP builds, API integrations, and developer roles. Response time is typically within 24 hours.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
