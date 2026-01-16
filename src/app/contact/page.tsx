"use client";

import React, { useState } from "react";
import { User, Mail, FileText, MessageSquare, Send, Loader2 } from "lucide-react";
import { submitContactForm } from "./actions";

export default function Contact() {
  const [messageLength, setMessageLength] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  return (
    <div className="max-w-4xl mx-auto p-10">
      <div className="bg-slate-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "'Times New Roman', serif" }}>
          Contact Me
        </h2>
        <p className="text-slate-600 mb-8 text-lg" style={{ fontFamily: "'Times New Roman', serif" }}>
          Get in touch with me. I'd love to hear from you!
        </p>
        
        <form
          className="space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            setSubmitStatus({ type: null, message: "" });

            const formData = new FormData(e.currentTarget);
            const data = {
              name: formData.get("name") as string,
              email: formData.get("email") as string,
              subject: formData.get("subject") as string,
              message: formData.get("message") as string,
            };

            const result = await submitContactForm(data);

            setIsSubmitting(false);
            setSubmitStatus({
              type: result.success ? "success" : "error",
              message: result.message || "Something went wrong. Please try again.",
            });

            // Reset form on success
            if (result.success) {
              (e.target as HTMLFormElement).reset();
              setMessageLength(0);
            }
          }}
        >
          <div>
            <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>
              <User size={16} className="text-blue-500" />
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 transition-all duration-200 bg-white"
              style={{ fontFamily: "'Times New Roman', serif" }}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>
              <Mail size={16} className="text-blue-500" />
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 transition-all duration-200 bg-white"
              style={{ fontFamily: "'Times New Roman', serif" }}
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>
              <FileText size={16} className="text-blue-500" />
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 transition-all duration-200 bg-white"
              style={{ fontFamily: "'Times New Roman', serif" }}
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>
              <MessageSquare size={16} className="text-blue-500" />
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={500}
              rows={6}
              onChange={(e) => setMessageLength(e.target.value.length)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 resize-none transition-all duration-200 bg-white"
              style={{ fontFamily: "'Times New Roman', serif" }}
              placeholder="Tell me more about your inquiry..."
            />
            <div className="flex justify-between items-center mt-1">
              <p className="text-xs text-slate-500" style={{ fontFamily: "'Times New Roman', serif" }}>
                Maximum 500 characters
              </p>
              <p className={`text-xs font-medium ${messageLength > 450 ? 'text-orange-500' : messageLength > 480 ? 'text-red-500' : 'text-slate-500'}`} style={{ fontFamily: "'Times New Roman', serif" }}>
                {messageLength} / 500
              </p>
            </div>
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
              }`}
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 font-sans font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
