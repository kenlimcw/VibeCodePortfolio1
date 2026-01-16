import React from "react";

export default function About() {
    return (
      <div className="max-w-4xl mx-auto p-10">
        <div className="bg-slate-100 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "'Times New Roman', serif" }}>About Me</h2>
          <p className="text-lg mb-4 text-slate-600 tracking-tight leading-tight" style={{ fontFamily: "'Times New Roman', serif" }}>
            I am a Digital Architect based in Brisbane, Australia.
          </p>
          <p className="text-lg text-slate-600 mb-4 tracking-tight leading-tight" style={{ fontFamily: "'Times New Roman', serif" }}>
            With over 30 years of experience in IT, I specialize in infrastructure, 
            program management, and now... Vibe Coding.
          </p>
          <p className="text-lg text-slate-600 tracking-tight leading-tight" style={{ fontFamily: "'Times New Roman', serif" }}>
            I build systems that bridge the gap between complex technology and real-world needs.
          </p>
        </div>
  
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-slate-200 rounded-lg">
            <h3 className="font-bold text-xl mb-2 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "'Times New Roman', serif" }}>My Mission</h3>
            <p className="text-slate-600 tracking-tight leading-tight" style={{ fontFamily: "'Times New Roman', serif" }}>In Service of Others, through Technology.</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-lg">
            <h3 className="font-bold text-xl mb-2 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "'Times New Roman', serif" }}>My Tech Stack</h3>
            <p className="text-slate-600 tracking-tight leading-tight" style={{ fontFamily: "'Times New Roman', serif" }}>Next.js, TypeScript, AI Agents, and Coffee.</p>
          </div>
        </div>
      </div>
    );
  }