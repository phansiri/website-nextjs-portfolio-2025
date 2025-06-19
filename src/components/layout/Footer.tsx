export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur py-4 mt-8">
      <div className="max-w-5xl mx-auto text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Lit Phansiri. All rights reserved.
      </div>
    </footer>
  );
} 