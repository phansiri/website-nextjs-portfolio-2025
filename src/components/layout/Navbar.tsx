"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
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
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-black/50"
          aria-label="Open navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Two-line hamburger icon */}
          <span className={`block w-6 h-0.5 bg-black rounded transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : "mb-1.5"}`}></span>
          <span className={`block w-6 h-0.5 bg-black rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      {/* Mobile Menu Slide Down */}
      <div
        className={`md:hidden fixed top-0 left-0 z-50 w-full h-full bg-white shadow-lg transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-full"}`}
        aria-hidden={!open}
        style={{ willChange: 'transform' }}
      >
        <nav className="flex flex-col gap-6 items-center justify-center h-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-md font-semibold transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-black/50 ${
                pathname === link.href ? "bg-gray-200" : ""
              }`}
              style={{ fontSize: 28 }}
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
} 