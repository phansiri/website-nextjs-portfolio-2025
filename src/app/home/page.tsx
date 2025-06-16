import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-col items-center gap-8 max-w-2xl w-full py-24">
        {/* Hero Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center tracking-tight leading-tight">
          Lit Phansiri: Engineering Intelligent Systems
        </h1>
        {/* Value Proposition */}
        <p className="text-lg md:text-xl text-center text-gray-600 max-w-xl">
          A U.S. Marine and UC Berkeley-trained Data Scientist specializing in the development of cutting-edge Generative AI solutions.
        </p>
        {/* Professional Photo Placeholder */}
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white bg-gray-200 flex items-center justify-center">
          <Image
            src="/images/profile.jpg"
            alt="Lit Phansiri professional photo"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* CTA Button */}
        <Link href="/experience">
          <Button size="lg" className="text-base font-semibold px-8 py-4 shadow-md">
            View My Work
          </Button>
        </Link>
      </div>
    </main>
  );
}
