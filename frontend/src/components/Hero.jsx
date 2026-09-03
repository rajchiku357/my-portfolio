import React from 'react';
import { Terminal, ArrowRight, Download, Code, Briefcase, Mail, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-[85vh] flex items-center pt-24 pb-16 md:pt-28 md:pb-20 font-sans text-[#e5e2e3] relative z-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            
            {/* Monospace Prompt Badge */}
            <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#00f5ff] tracking-widest uppercase bg-white/5 border border-[#00f5ff]/30 px-3 sm:px-3.5 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#00f5ff] -ml-4" />
              <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00f5ff]" />
              <span>00 // RITHIK RAJ • FULL STACK DEVELOPER</span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#e5e2e3] tracking-tight leading-[1.15] sm:leading-[1.1] uppercase">
              BUILDING SCALABLE WEB APPS THAT SOLVE REAL PROBLEMS.
            </h1>

            {/* Subtitle / Summary */}
            <p className="text-sm sm:text-base md:text-lg text-[#b9caca] max-w-2xl leading-relaxed">
              Analytical Software Developer skilled in Python, React, Node.js, Express, MongoDB, MySQL, and Data Visualization. Committed to transforming data into efficient, high-performance web solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="bg-[#00f5ff] text-black font-mono text-xs font-bold tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 rounded hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,245,255,0.3)]"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Rithik_Raj_Resume.pdf"
                download="Rithik_Raj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#00f5ff]/50 bg-[#00f5ff]/10 text-[#00f5ff] hover:bg-[#00f5ff] hover:text-black font-mono text-xs font-bold tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 rounded transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href="#contact"
                className="border border-white/20 text-[#e5e2e3] font-mono text-xs font-bold tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 rounded hover:border-white hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>GET IN TOUCH</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Social & Coding Platform Links */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-3 font-mono text-xs text-[#b9caca]">
              <a
                href="https://github.com/rajchiku357"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded border border-white/10 hover:border-[#00f5ff] hover:text-[#00f5ff] bg-white/5 transition-all flex items-center gap-2"
              >
                <Code className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rithik-raj-4b1173254/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded border border-white/10 hover:border-[#00f5ff] hover:text-[#00f5ff] bg-white/5 transition-all flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded border border-white/10 hover:border-[#00f5ff] hover:text-[#00f5ff] bg-white/5 transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-[#00f5ff]" />
                <span>LeetCode</span>
              </a>
            </div>

          </div>

          {/* Right Column: Rithik Raj's Portrait Card */}
          <div className="lg:col-span-5 flex justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] group">
              
              {/* Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#00f5ff]/40 via-cyan-500/20 to-purple-500/30 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Main Frame */}
              <div className="relative bg-[#1c1b1c] border border-white/15 rounded-2xl overflow-hidden shadow-2xl group-hover:border-[#00f5ff]/50 transition-all duration-300">
                
                {/* Header Tag */}
                <div className="px-4 py-2.5 sm:py-3 bg-[#131314] border-b border-white/10 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#849495]">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#00f5ff] inline-block animate-pulse" />
                    <span className="text-[#00f5ff] font-semibold">RITHIK RAJ // FULL STACK</span>
                  </div>
                  <span>PATNA, BIHAR</span>
                </div>

                {/* Profile Photo Container */}
                <div className="relative h-[360px] sm:h-[460px] w-full bg-gradient-to-b from-[#131314] via-[#1c1b1c] to-black overflow-hidden flex items-end justify-center">
                  <img
                    src="/profile.png"
                    alt="Rithik Raj Portrait"
                    className="h-[95%] w-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                </div>

                {/* Status Pill */}
                <div className="p-3.5 sm:p-4 bg-[#131314] border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-[#b9caca]">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00f5ff]" />
                    <span>Open to Full Stack & SDE Roles</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#00f5ff] px-2 py-0.5 rounded bg-[#00f5ff]/10 border border-[#00f5ff]/30">
                    AVAILABLE
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
