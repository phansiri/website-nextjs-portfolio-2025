import { experiences } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <section className="w-full max-w-2xl mx-auto flex flex-col gap-8 py-12">
      {experiences.map((exp, idx) => (
        <div key={exp.id} className="relative flex gap-6 items-start">
          {/* Timeline line and dot */}
          <div className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 border-2 border-white dark:border-gray-800 z-10 mt-2`} />
            {idx < experiences.length - 1 && (
              <div className="w-1 bg-blue-200 dark:bg-blue-900 flex-1 mt-1 mb-2" style={{ minHeight: 40 }} />
            )}
          </div>
          {/* Card */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/30 dark:border-gray-700/50 rounded-2xl shadow-lg p-6 flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <span className="font-semibold text-lg text-blue-900 dark:text-blue-300">{exp.unit}</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">{exp.startYear} - {exp.endYear}</span>
            </div>
            <div className="font-medium text-blue-700 dark:text-blue-400 mb-1">{exp.position}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{exp.summary}</div>
          </div>
        </div>
      ))}
    </section>
  );
} 