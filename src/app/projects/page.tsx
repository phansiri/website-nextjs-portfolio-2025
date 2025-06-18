import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full px-4">
      <h1 className="text-4xl font-bold mt-12 mb-4 text-center">Projects</h1>
      <section className="w-full px-0 md:px-8 lg:px-16 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} priority={idx === 0} />
        ))}
      </section>
    </main>
  );
}
