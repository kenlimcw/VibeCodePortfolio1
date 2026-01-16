import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">ArchitectPortfolio</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>
        </div>
      </div>
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ 
          background: 'linear-gradient(to right, transparent 0%, rgba(156, 163, 175, 0.5) 25%, rgba(156, 163, 175, 0.5) 75%, transparent 100%)'
        }}
      ></div>
    </nav>
  );
}