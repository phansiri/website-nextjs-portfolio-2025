import { education } from "@/data/education";
import Image from "next/image";

export default function EducationPage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4">
      <h1 className="text-4xl font-bold mt-12 mb-4 text-center">Education</h1>
      <section className="w-full max-w-3xl grid gap-8 grid-cols-1 md:grid-cols-2">
        {education.map((edu) => (
          <div key={edu.id} className="bg-white rounded-xl shadow-md border p-6 flex flex-col items-center text-center">
            <div className="mb-4">
              <Image src={edu.logo} alt={edu.university + ' logo'} width={64} height={64} className="object-contain h-16 w-16 mb-2" />
              <div className="font-semibold text-lg mt-2">{edu.university}</div>
            </div>
            <div className="font-medium text-blue-900 mb-1">{edu.degree}</div>
            <div className="text-gray-700 text-sm mb-2">{edu.concentration}</div>
            <div className="text-gray-500 text-xs">Class of {edu.gradDate}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
