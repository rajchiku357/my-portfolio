import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-[#0e0e0f] border-t border-white/10 font-sans relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-start gap-8">
        
        <div className="flex flex-col gap-2">
          <div className="text-xl md:text-2xl font-bold text-[#e5e2e3] uppercase tracking-widest">
            RITHIK RAJ // FULL STACK DEVELOPER
          </div>
          <div className="font-mono text-xs text-[#849495] tracking-wider">
            ©{new Date().getFullYear()} ENGINEERED WITH PRECISION
          </div>
        </div>

        <div className="flex flex-col gap-3 font-mono text-xs tracking-widest text-[#b9caca]">
          <a
            href="https://github.com/rajchiku357"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f5ff] transition-colors hover:translate-x-1 duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rithik-raj-4b1173254/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f5ff] transition-colors hover:translate-x-1 duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f5ff] transition-colors hover:translate-x-1 duration-300"
          >
            LeetCode
          </a>
        </div>

      </div>
    </footer>
  );
}
