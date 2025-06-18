import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center gap-12 py-20 px-6 md:px-16 lg:px-32">
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
          <Image
            src="/images/about_lit.jpg"
            alt="Lit Phansiri professional"
            width={260}
            height={260}
            className="rounded-2xl shadow-xl border-4 border-white object-cover"
            priority
          />
        </div>
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Journey: Shaping my future the way I want it</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
          My journey into technology didn't start with a computer, but with a leap of faith. As a refugee from Laos, I grew up in Kansas knowing that to build the life I envisioned, I would have to seek opportunities far beyond the familiar. In 2003, I took that plunge and enlisted in the United States Marine Corps.
          <br />
          My military career became a crucible for transformation—not just taking me around the world, but forcing me out of my shell as an introvert on recruiting duty and placing me at the forefront of aviation modernization with the V-22 Osprey. But my true calling emerged at a pivotal moment. As a newly commissioned officer, I saw the birth of the Marine Corps' Cyberspace field. While facing antiquated mindsets, I fought to be in its vanguard, becoming one of the first two Second Lieutenants to hold the 17xx MOS.
          <br />
          I don't just join teams; I build them. I was given the opportunity to stand up a new Defensive Cyberspace company in Okinawa from the ground up and later pioneered expeditionary cyber operations with the 31st MEU. This drive to innovate led me to my current role as a Data Scientist and full-stack AI developer at Marine Forces Cyber Command, a journey underpinned by earning my Master's in Data Science from UC Berkeley. Every step, from Laos to MARFORCYBER, has been about turning impossible challenges into tangible realities.
          </p>
        </div>
      </section>
      {/* Life Milestones Timeline */}
      <section className="w-full flex flex-col items-center py-8 px-6 md:px-16 lg:px-32">
        <h2 className="text-2xl font-bold mb-8 text-blue-800">Life Milestones</h2>
        <div className="max-w-4xl w-full border-l-4 border-blue-200 pl-8">
          <div className="mb-8">
            <span className="font-bold text-blue-700">2027+:</span> Launching my own AI startup, building innovative ai agents to solve real-world problems and empower organizations.
          </div>
          <div className="mb-8">
            <span className="font-bold text-blue-700">2027:</span> Retired from the Marine Corps with 24+ years of faithfulservice.
          </div>
          <div className="mb-8">
            <span className="font-bold text-blue-700">2025:</span> Graduated from UC Berkeley, launching a new chapter as a data scientist focused on generative AI.
          </div>
          <div className="mb-8">
            <span className="font-bold text-blue-700">2020:</span> Led AI-driven cyber operations at Marine Forces Cyber Command, integrating advanced analytics into defense.
          </div>
          <div className="mb-8">
            <span className="font-bold text-blue-700">2017:</span> Become one of the first Cyberspace Warfare Officers, pioneering new capabilities for the USMC.
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
