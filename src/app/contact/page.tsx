import { FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-center">Let&apos;s Connect</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        I&apos;m always open to connecting with fellow professionals, collaborators, and innovators. The best way to reach me is via LinkedIn.
      </p>
      <a
        href="https://www.linkedin.com/in/litphansiri/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-semibold shadow-lg transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-400"
        aria-label="Connect with me on LinkedIn"
      >
        <FaLinkedin size={32} />
        Connect on LinkedIn
      </a>
    </main>
  );
}
