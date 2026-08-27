import React from 'react';

export default function About() {
  const stats = [
    { value: '1+', label: 'YEARS EXPERIENCE' },
    { value: '40+', label: 'PROJECTS BUILT' },
    { value: '15+', label: 'TECHNOLOGIES' },
    { value: '100%', label: 'PROBLEM SOLVING' },
  ];

  return (
    <section id="about" className="py-24 bg-[#131314] text-[#e5e2e3] border-t border-white/10 font-sans relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-[#00f5ff] shrink-0">01 //</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e5e2e3] tracking-wide shrink-0 uppercase">
            ABOUT
          </h2>
          <div className="h-px bg-white/10 w-full" />
        </div>

        {/* 2-Column About Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Headline */}
          <div className="md:col-span-5">
            <h3 className="text-2xl md:text-4xl font-bold text-[#e5e2e3] leading-tight uppercase">
              TURNING IDEAS INTO WORKING SOFTWARE.
            </h3>
          </div>

          {/* Right Description & Stats Bento Grid */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="text-base text-[#b9caca] leading-relaxed">
              I am a software developer passionate about building high-performance applications. My approach combines rigorous engineering principles with a deep understanding of user needs. I thrive in environments where complex problems require elegant, maintainable solutions.
            </p>

            <p className="text-base text-[#b9caca] leading-relaxed">
              Whether architecting a resilient backend API or crafting a responsive user interface, I focus on delivering code that is not just functional, but exceptional.
            </p>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#1c1b1c] border border-white/10 rounded hover:border-[#00f5ff]/40 hover:shadow-[0_0_30px_rgba(0,245,255,0.08)] transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#00f5ff] mb-2 font-mono">
                    {item.value}
                  </div>
                  <div className="font-mono text-xs text-[#849495] tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
