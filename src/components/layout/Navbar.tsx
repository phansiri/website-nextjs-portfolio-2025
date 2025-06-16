"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-bold text-lg tracking-tight select-none">Lit Phansiri</div>
        <div className="flex gap-2">
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
      </div>
    </nav>
  );
} 