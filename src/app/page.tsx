import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-10 bg-gray-900 text-white min-h-[calc(100vh-200px)]" style={{ fontFamily: "'Times New Roman', serif" }}>
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
        Hello, I am an Architect Builder.
      </h1>
      <p className="text-xl text-gray-300 mb-8 text-center tracking-tight leading-tight">
        This is my new portfolio site built with "Vibe Coding."
      </p>
      
      <div className="flex gap-4 justify-center">
        <Link 
          href="/about" 
          className="about-button px-6 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg transition-all duration-200 min-w-[140px] text-center font-sans"
        >
          About Me
        </Link>
        {/* REPLACED CODE STARTS HERE */}
        <Link 
          href="/projects" 
          className="projects-button px-6 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg transition-all duration-200 min-w-[140px] text-center font-sans"
        >
          View Projects
        </Link>
        {/* REPLACED CODE ENDS HERE */}
        <Link 
          href="/contact" 
          className="contact-button px-6 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg transition-all duration-200 min-w-[140px] text-center font-sans"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}