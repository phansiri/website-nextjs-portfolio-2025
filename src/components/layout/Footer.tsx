export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white/80 backdrop-blur py-4 mt-8">
      <div className="max-w-5xl mx-auto text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Lit Phansiri. All rights reserved.
      </div>
    </footer>
  );
} 