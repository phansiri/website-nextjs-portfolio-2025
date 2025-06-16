import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4">
      <h1 className="text-4xl font-bold mt-12 mb-4 text-center">Projects</h1>
      <section className="w-full max-w-5xl grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
