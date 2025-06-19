"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-boverflow-hidden">
      {/* SVG/Gradient Background Visual */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <svg width="900" height="600" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40 dark:opacity-20 blur-2xl">
          <ellipse cx="450" cy="300" rx="400" ry="180" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(450 300) scale(400 180)" gradientUnits="userSpaceOnUse">
              <stop className="dark:stop-color-indigo-500" stopColor="#a5b4fc" />
              <stop offset="1" className="dark:stop-color-purple-500 dark:stop-opacity-0.5" stopColor="#f0abfc" stopOpacity="0.3" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col items-center gap-8 max-w-2xl w-full py-24">
        {/* Hero Headline */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center tracking-tight leading-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Lit Phansiri
          <br />
          <div className="font-extrabold text-center tracking-tight leading-tight text-gray-900 dark:text-white text-4xl md:text-6xl">Full Stack Data Scientist</div>
        </motion.h1>
        {/* Value Proposition */}
        <motion.p
          className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          An Active Duty U.S. Marine and UC Berkeley-trained Data Scientist specializing in the development of cutting-edge Generative AI solutions.
        </motion.p>
        {/* Professional Photo */}
        <motion.div
          className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/images/lit_profile_slack.png"
            alt="Lit Phansiri professional photo"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 w-full items-center justify-center"
        >
          <Button 
            asChild 
            size="lg"
            className="text-base font-semibold px-8 py-4 shadow-md backdrop-blur-lg bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full border-none"
          >
            <Link href="/about">
              Find Out More About Me
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="text-base font-semibold px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <Link href="/contact">
              <FaLinkedin size={24} className="mr-2" />
              Link Up
            </Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
