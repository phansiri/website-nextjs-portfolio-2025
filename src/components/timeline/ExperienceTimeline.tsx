import { experiences } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <section className="w-full max-w-2xl mx-auto flex flex-col gap-8 py-12">
      {experiences.map((exp, idx) => (
        <div key={exp.id} className="relative flex gap-6 items-start">
          {/* Timeline line and dot */}
          <div className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full bg-blue-500 border-2 border-white z-10 mt-2`} />
            {idx < experiences.length - 1 && (
              <div className="w-1 bg-blue-200 flex-1 mt-1 mb-2" style={{ minHeight: 40 }} />
            )}
          </div>
          {/* Card */}
          <div className="bg-white rounded-xl shadow-md border p-6 flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <span className="font-semibold text-lg text-blue-900">{exp.unit}</span>
              <span className="text-sm text-gray-500">{exp.startYear} - {exp.endYear}</span>
            </div>
            <div className="font-medium text-blue-700 mb-1">{exp.position}</div>
            <div className="text-gray-700 text-sm leading-relaxed">{exp.summary}</div>
          </div>
        </div>
      ))}
    </section>
  );
} 