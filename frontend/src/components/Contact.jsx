import React, { useState } from 'react';
import { sendContactMessage } from '../services/api';
import { Mail, MapPin, Phone, Code, Briefcase, Terminal, Send, CheckCircle2, AlertCircle, MessageCircle, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const whatsappUrl = "https://wa.me/916299145304?text=" + encodeURIComponent("Hi Rithik, I saw your portfolio and would like to connect!");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("oberoirithik9@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      // 1. Web3Forms Submission
      const formPayload = new FormData();
      formPayload.append("access_key", "00f5ff-portfolio-direct");
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("subject", formData.subject || "New Contact Message from Portfolio");
      formPayload.append("message", formData.message);
      formPayload.append("to_email", "oberoirithik9@gmail.com");

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      }).catch(err => console.log("Web3forms background submission:", err));

      // 2. FastAPI Backend Sync
      await sendContactMessage(formData);

      // 3. WhatsApp Direct Click-to-Chat trigger
      window.open(whatsappUrl, '_blank');

      setStatus({
        type: 'success',
        message: `Opening WhatsApp to chat directly with Rithik Raj (+91 6299145304).`
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Contact error:', err);
      window.open(whatsappUrl, '_blank');

      setStatus({
        type: 'success',
        message: `Opening WhatsApp to chat directly with Rithik Raj.`
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#131314] text-[#e5e2e3] border-t border-white/10 font-sans relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <header className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-baseline gap-3 md:gap-6">
          <span className="font-mono text-sm text-[#00f5ff] tracking-wider">05 //</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#e5e2e3] uppercase">
            HAVE A PROJECT OR OPPORTUNITY?
          </h2>
        </header>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Info & Connect */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <p className="text-base sm:text-lg text-[#b9caca] leading-relaxed max-w-md">
              Currently open for full-stack software development roles and collaborative opportunities. Whether you have an open position or a project to build, feel free to reach out.
            </p>

            {/* Email Contact Card */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group flex items-center gap-4 text-[#e5e2e3] hover:text-[#00f5ff] transition-colors text-left"
              >
                <div className="p-3.5 rounded-full border border-white/10 group-hover:border-[#00f5ff]/40 bg-white/5 transition-colors flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#e5e2e3] group-hover:text-[#00f5ff]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs tracking-wider uppercase">
                    {copiedEmail ? 'COPIED TO CLIPBOARD' : 'OBEROIRITHIK9@GMAIL.COM'}
                  </span>
                  <span className="text-[11px] text-[#849495]">Click to copy Gmail address</span>
                </div>
              </button>
            </div>

            {/* Phone & Location Details */}
            <div className="flex flex-col gap-3 font-mono text-xs text-[#b9caca]">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00f5ff]" />
                <span>+91 6299145304</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#00f5ff]" />
                <span>Patna, Bihar, India</span>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-mono text-xs text-black font-bold bg-[#00f5ff] hover:scale-105 transition-transform px-5 py-3 rounded shadow-[0_0_20px_rgba(0,245,255,0.3)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT DIRECTLY ON WHATSAPP</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>

            {/* Social & Platform Buttons */}
            <div className="mt-2 border-t border-white/10 pt-6">
              <h3 className="font-mono text-xs text-[#849495] tracking-widest mb-4">PROFILES & PLATFORMS</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/rajchiku357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full border border-white/10 text-[#b9caca] hover:text-[#00f5ff] hover:border-[#00f5ff]/40 bg-white/5 transition-colors flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <Code className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rithik-raj-4b1173254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full border border-white/10 text-[#b9caca] hover:text-[#00f5ff] hover:border-[#00f5ff]/40 bg-white/5 transition-colors flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Briefcase className="w-5 h-5" />
                </a>
                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full border border-white/10 text-[#b9caca] hover:text-[#00f5ff] hover:border-[#00f5ff]/40 bg-white/5 transition-colors flex items-center justify-center"
                  aria-label="LeetCode"
                >
                  <Terminal className="w-5 h-5 text-[#00f5ff]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7">
            <div className="bg-[#1c1b1c] rounded-xl border border-white/10 p-6 md:p-8 hover:border-[#00f5ff]/30 transition-all duration-300 shadow-2xl">
              
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl font-semibold text-[#e5e2e3]">Initiate Contact</h3>
                <span className="font-mono text-xs text-[#849495] tracking-widest">
                  WHATSAPP & GMAIL
                </span>
              </div>

              {status.type === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-[#00f5ff]/10 border border-[#00f5ff]/30 text-[#00f5ff] flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="font-mono text-xs">{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs text-[#b9caca] tracking-wider block mb-2" htmlFor="name">
                      NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-2 text-base text-[#e5e2e3] placeholder-[#849495]/50 focus:border-[#00f5ff] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#b9caca] tracking-wider block mb-2" htmlFor="email">
                      EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-2 text-base text-[#e5e2e3] placeholder-[#849495]/50 focus:border-[#00f5ff] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-[#b9caca] tracking-wider block mb-2" htmlFor="subject">
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-2 text-base text-[#e5e2e3] placeholder-[#849495]/50 focus:border-[#00f5ff] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-[#b9caca] tracking-wider block mb-2" htmlFor="message">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Detail your requirements or opportunities..."
                    className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-2 text-base text-[#e5e2e3] placeholder-[#849495]/50 focus:border-[#00f5ff] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#00f5ff] text-black font-mono text-xs font-bold tracking-widest px-8 py-3 rounded hover:scale-[1.02] active:scale-95 transition-transform flex items-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>TRANSMIT VIA WHATSAPP</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
