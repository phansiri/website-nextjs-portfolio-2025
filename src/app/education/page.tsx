"use client";
import { education } from "@/data/education";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function EducationPage() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full px-4">
      <h1 className="text-4xl font-bold mt-12 mb-4 text-center">Education</h1>
      <section className="w-full px-0 md:px-8 lg:px-16 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="rounded-xl shadow-md border p-6 flex flex-col items-center text-center h-[580px] bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border-white/30 dark:border-gray-700/50">
              <div className="mb-4 flex flex-col items-center">
                <Image src={edu.logo} alt={edu.university + ' logo'} width={64} height={64} className="object-contain h-16 w-16 mb-2" priority={idx === 0} />
                <div className="font-semibold text-lg mt-2">{edu.university}</div>
              </div>
              <div className="font-medium text-blue-900 dark:text-blue-300 mb-1">{edu.degree}</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm mb-2">{edu.concentration}</div>
              <div className="text-gray-500 dark:text-gray-400 text-md mb-2">Class of {edu.gradDate}</div>
              {edu.description && (
                <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-2 flex-1 overflow-auto">{edu.description}</div>
              )}
              {edu.link && (
                <div className="text-blue-700 dark:text-blue-400 text-sm mt-2"><a href={edu.link}>Learn More →</a></div>
              )}
            </Card>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
