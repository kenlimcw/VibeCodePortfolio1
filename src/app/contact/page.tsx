import React from "react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <div className="bg-slate-100 p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "'Times New Roman', serif" }}>
          Contact Me
        </h2>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
              style={{ fontFamily: "'Times New Roman', serif" }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
              style={{ fontFamily: "'Times New Roman', serif" }}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
              style={{ fontFamily: "'Times New Roman', serif" }}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={500}
              rows={6}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 resize-none"
              style={{ fontFamily: "'Times New Roman', serif" }}
            />
            <p className="text-xs text-slate-500 mt-1" style={{ fontFamily: "'Times New Roman', serif" }}>
              Maximum 500 characters
            </p>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg transition-all duration-200 hover:bg-gray-700 font-sans font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
