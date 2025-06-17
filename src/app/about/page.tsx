import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center gap-12 py-20 px-6 md:px-16 lg:px-32">
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
          <Image
            src="/images/about-photo.jpg"
            alt="Lit Phansiri professional"
            width={260}
            height={260}
            className="rounded-2xl shadow-xl border-4 border-white object-cover"
            priority
          />
        </div>
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Journey: From Marine to Data Scientist</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            From enlisting in the United States Marine Corps in <span className="font-semibold text-blue-700">2003</span>, to becoming one of the first Cyberspace Warfare Officers, my career has been defined by a passion for service, technology, and innovation. After years of leading teams in high-stakes environments, I transitioned to data science, earning my Master's at <span className="font-semibold text-blue-700">UC Berkeley</span> and specializing in generative AI for mission-critical applications.
          </p>
        </div>
      </section>
      {/* Life Milestones Timeline */}
      <section className="w-full flex flex-col items-center py-8 px-6 md:px-16 lg:px-32">
        <h2 className="text-2xl font-bold mb-8 text-blue-800">Life Milestones</h2>
        <div className="max-w-4xl w-full border-l-4 border-blue-200 pl-8">
          <div className="mb-8">
            <span className="font-bold text-blue-700">2027+:</span> Launching my own AI startup, building innovative agents to solve real-world problems and empower organizations.
          </div>
          <div className="mb-8">
            <span className="font-bold text-blue-700">2023:</span> Graduated from UC Berkeley, launching a new chapter as a data scientist focused on generative AI.
          </div>
          <div className="mb-8">
            <span className="font-bold text-blue-700">2021:</span> Led AI-driven cyber operations at Marine Forces Cyber Command, integrating advanced analytics into defense.
          </div>
          <div className="mb-8">
            <span className="font-bold text-blue-700">2010:</span> Selected as one of the first Cyberspace Warfare Officers, pioneering new capabilities for the USMC.
          </div>
          <div className="mb-8">
            <span className="font-bold text-blue-700">2003:</span> Enlisted in the Marine Corps, beginning a journey of leadership and technical growth.
          </div>
        </div>
      </section>
      {/* Vision Statement */}
      <section className="w-full flex justify-center py-12 px-6 md:px-16 lg:px-32">
        <div className="max-w-2xl w-full bg-blue-50 border-l-4 border-blue-400 p-8 rounded-xl text-center text-lg font-semibold shadow">
          My vision: To help build a better world, one AI agent at a time—empowering people and organizations to achieve more through intelligent technology.
        </div>
      </section>
    </main>
  );
}
