import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
    { label: "Skills", href: "#skills" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-200 bg-bg/95 backdrop-blur-md border-b ${
        scrolled
          ? "border-border shadow-sm shadow-black/20"
          : "border-border/60"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Zone */}
        <a
          href="#"
          className="text-text-primary font-semibold text-base sm:text-lg tracking-tight hover:text-accent transition-colors flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block"></span>
          <span>Vaibhav Chopade</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Button & Theme Switcher (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface border border-border rounded-md transition-colors"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme Toggle Button (Mobile) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface border border-border rounded-md transition-colors"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-text-secondary hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface border-b border-border px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-subtle rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-border flex flex-col gap-2">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="text-center px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
