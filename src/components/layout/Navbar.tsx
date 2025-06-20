"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, Fragment } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function HamburgerToXIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-6">
      <span
        className={`
          absolute left-0 top-1/2 w-6 h-0.5 bg-black dark:bg-white rounded transition-all duration-300
          ${open ? "rotate-45" : "-translate-y-1.5"}
        `}
        style={{ transitionProperty: "transform, background" }}
      />
      <span
        className={`
          absolute left-0 top-1/2 w-6 h-0.5 bg-black dark:bg-white rounded transition-all duration-300
          ${open ? "-rotate-45" : "translate-y-1.5"}
        `}
        style={{ transitionProperty: "transform, background" }}
      />
    </div>
  );
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-2"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // Close menu and blur focus for accessibility
  const closeMenu = () => {
    setOpen(false);
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <Fragment>
      {/* Main navigation bar */}
      <nav className="sticky top-0 z-50 w-full">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="font-bold text-lg tracking-tight select-none">
            <Link href="/">Lit Phansiri</Link>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-black dark:text-white"
                    : "text-gray-500 hover:text-black dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            >
              <HamburgerToXIcon open={open} />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 z-40 w-full h-full bg-white/95 dark:bg-black/95 backdrop-blur-lg shadow-2xl transition-transform duration-790 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!open}
        style={{ willChange: "transform" }}
      >
        {/* Close X button */}
        <button
          className="absolute top-5 right-6 text-2xl text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        >
          &times;
        </button>
        <nav className="flex flex-col gap-6 items-start pl-10 pt-20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-bold transition-colors hover:text-blue-700 dark:hover:text-blue-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-400 ${
                pathname === link.href ? "text-blue-700 dark:text-blue-400" : "text-black dark:text-white"
              }`}
              style={{ fontSize: 28 }}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </Fragment>
  );
} 