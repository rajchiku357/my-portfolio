import React from 'react';
import { GraduationCap, Award, MessageCircle, ExternalLink } from 'lucide-react';

export default function Experience() {
  const educationList = [
    {
      year: '02/2026 – 08/2026',
      degree: 'Software Development Engineering with Applied AI',
      institution: 'Masai School, Bangaluru',
      detail: 'Intensive engineering program covering Full Stack Web Development, Data Structures, Applied AI, React, Node.js, Express, and MongoDB.',
      icon: GraduationCap
    },
    {
      year: '2024 – Present',
      degree: 'Bachelor of Arts, English',
      institution: 'Vardhman Mahavir Collage, Pawapuri',
      detail: 'Undergraduate degree focusing on analytical writing, communication, and critical problem solving.',
      icon: GraduationCap
    },
    {
      year: '2022 – 2024',
      degree: 'Higher Secondary Education (Science)',
      institution: 'Bihar Board, Pawapuri',
      detail: 'Science stream foundation in analytical mathematics, logic, and scientific problem-solving.',
      icon: Award
    }
  ];

  const whatsappUrl = "https://wa.me/916299145304?text=" + encodeURIComponent("Hi Rithik, I saw your portfolio and would like to connect!");

  return (
    <section id="experience" className="py-24 bg-[#131314] text-[#e5e2e3] border-t border-white/10 font-sans relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Intro Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#e5e2e3] mb-4">
            Education &<br />
            <span className="text-[#b9caca]">Academic Foundations.</span>
          </h1>
          <p className="text-base md:text-lg text-[#b9caca] max-w-2xl leading-relaxed">
            A detailed ledger of academic qualifications, software development training, and analytical science foundations.
          </p>
        </div>

        {/* 04 // ACADEMIC EDUCATION SECTION */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-sm text-[#00f5ff] shrink-0">04 //</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#e5e2e3] tracking-wide shrink-0">
              ACADEMIC EDUCATION & TRAINING
            </h2>
            <div className="h-px bg-white/10 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {educationList.map((edu, idx) => {
              const IconComp = edu.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1c1b1c] border border-white/10 p-6 rounded-lg relative hover:border-[#00f5ff]/40 hover:shadow-[0_0_30px_rgba(0,245,255,0.08)] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-[11px] text-[#00f5ff]">{edu.year}</span>
                      <IconComp className="w-5 h-5 text-[#00f5ff] group-hover:scale-110 transition-transform" />
                    </div>

                    <h3 className="text-lg font-bold text-[#e5e2e3] mb-2">{edu.degree}</h3>
                    <p className="text-xs text-[#b9caca] leading-relaxed">
                      <span className="font-semibold text-white">{edu.institution}</span><br />
                      {edu.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RESUME & DIRECT WHATSAPP CTA BANNER */}
        <div className="pt-12 border-t border-white/10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#e5e2e3] mb-8">
            LET'S BUILD SOMETHING USEFUL.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00f5ff] text-black font-mono text-xs font-bold tracking-widest px-8 py-4 rounded hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,245,255,0.3)]"
            >
              <MessageCircle className="w-4 h-4 fill-black text-[#00f5ff]" />
              <span>CONNECT ON WHATSAPP</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
