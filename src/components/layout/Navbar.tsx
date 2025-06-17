"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, Fragment } from "react";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function HamburgerIcon() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="block w-6 h-0.5 bg-black rounded mb-1.5"></span>
      <span className="block w-6 h-0.5 bg-black rounded"></span>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

  return (
    <Fragment>
      {/* Main navigation bar */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="font-bold text-lg tracking-tight select-none">Lit Phansiri</div>
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-black/50 ${
                  pathname === link.href ? "bg-gray-200" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-black/50"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            >
              {open ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 z-40 w-full h-full bg-white/95 backdrop-blur-lg shadow-2xl transition-transform duration-790 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!open}
        style={{ willChange: "transform" }}
      >
        {/* Close X button */}
        <button
          className="absolute top-5 right-6 text-2xl text-black focus:outline-none focus:ring-2 focus:ring-black/50"
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
              className={`font-bold transition-colors hover:text-blue-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-400 ${
                pathname === link.href ? "text-blue-700" : "text-black"
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