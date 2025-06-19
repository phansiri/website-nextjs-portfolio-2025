import ExperienceTimeline from "@/components/timeline/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4">
      <h1 className="text-4xl font-bold mt-12 mb-4 text-center text-gray-900 dark:text-white">Experience Timeline</h1>
      <ExperienceTimeline />
    </main>
  );
}
