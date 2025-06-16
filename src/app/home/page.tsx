import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* SVG/Gradient Background Visual */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <svg width="900" height="600" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40 blur-2xl">
          <ellipse cx="450" cy="300" rx="400" ry="180" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(450 300) scale(400 180)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" />
              <stop offset="1" stopColor="#f0abfc" stopOpacity="0.3" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col items-center gap-8 max-w-2xl w-full py-24">
        {/* Hero Headline */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center tracking-tight leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Lit Phansiri: Engineering Intelligent Systems
        </motion.h1>
        {/* Value Proposition */}
        <motion.p
          className="text-lg md:text-xl text-center text-gray-600 max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          A U.S. Marine and UC Berkeley-trained Data Scientist specializing in the development of cutting-edge Generative AI solutions.
        </motion.p>
        {/* Professional Photo Placeholder */}
        <motion.div
          className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white bg-gray-200 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Lit Phansiri professional photo"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          <Link href="/experience">
            <Button size="lg" className="text-base font-semibold px-8 py-4 shadow-md">
              View My Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
