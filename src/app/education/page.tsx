import { education } from "@/data/education";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function EducationPage() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full px-4">
      <h1 className="text-4xl font-bold mt-12 mb-4 text-center">Education</h1>
      <section className="w-full px-0 md:px-8 lg:px-16 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {education.map((edu) => (
          <Card key={edu.id} className="bg-white rounded-xl shadow-md border p-6 flex flex-col items-center text-center h-[580px]">
            <div className="mb-4 flex flex-col items-center">
              <Image src={edu.logo} alt={edu.university + ' logo'} width={64} height={64} className="object-contain h-16 w-16 mb-2" />
              <div className="font-semibold text-lg mt-2">{edu.university}</div>
            </div>
            <div className="font-medium text-blue-900 mb-1">{edu.degree}</div>
            <div className="text-gray-700 text-sm mb-2">{edu.concentration}</div>
            <div className="text-gray-500 text-xs mb-2">Class of {edu.gradDate}</div>
            {edu.description && (
              <div className="text-gray-700 text-sm leading-relaxed mt-2 flex-1 overflow-auto">{edu.description}</div>
            )}
          </Card>
        ))}
      </section>
    </main>
  );
}
