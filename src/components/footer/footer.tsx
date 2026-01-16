import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-auto relative">
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{ 
          background: 'linear-gradient(to right, transparent 0%, rgba(156, 163, 175, 0.5) 25%, rgba(156, 163, 175, 0.5) 75%, transparent 100%)'
        }}
      ></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} ArchitectPortfolio. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
