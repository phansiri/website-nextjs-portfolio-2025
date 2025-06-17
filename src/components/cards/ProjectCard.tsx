"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="w-full max-w-xl mx-auto mb-8 h-[580px] flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
          <CardDescription className="text-blue-700 font-medium mt-1">{project.impact}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 flex-1 overflow-hidden">
          {project.visual && (
            <div className="w-full flex justify-center">
              <Image
                src={project.visual}
                alt={project.title + " visual"}
                width={400}
                height={200}
                className="rounded-lg object-contain max-h-48 bg-gray-50 border"
              />
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <div className="text-gray-700 text-sm leading-relaxed mt-2 flex-1 overflow-auto">{project.summary}</div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:underline font-semibold text-sm focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-2 py-1"
            >
              Learn More →
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
} 