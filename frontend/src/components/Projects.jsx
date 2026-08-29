import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../services/api';
import { ExternalLink, Github, ChevronRight, Terminal, Code2, Sparkles } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        console.error('Failed to load projects:', err);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  const taskFlowBullets = [
    "Developed a hotel management web application to help managers organize and manage daily tasks and operational issues.",
    "Built the backend using Node.js and Express, implementing APIs for efficient task management.",
    "Developed features for creating, updating, tracking, and managing tasks throughout the day.",
    "Integrated MongoDB for reliable storage and retrieval of task and management data.",
    "Collaborated on project development while focusing on backend functionality and overall application performance."
  ];

  return (
    <section id="projects" className="py-24 bg-[#131314] text-[#e5e2e3] border-t border-white/10 font-sans relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-center gap-4">
          <span className="font-mono text-sm text-[#00f5ff] shrink-0">03 //</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#e5e2e3] tracking-tight uppercase">
            PROJECTS BUILT TO SOLVE REAL PROBLEMS.
          </h2>
          <div className="h-px bg-white/10 flex-grow hidden md:block" />
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#00f5ff]" />
          </div>
        ) : (
          <div className="space-y-10">
            
            {/* PROJECT 1: TASKFLOW (Full Width Clean Blueprint Card) */}
            <article className="bg-[#1c1b1c] border border-white/10 rounded-xl p-6 md:p-10 space-y-8 hover:border-[#00f5ff]/40 hover:shadow-[0_0_40px_rgba(0,245,255,0.08)] transition-all duration-300 relative group">
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-[#00f5ff] bg-[#00f5ff]/10 border border-[#00f5ff]/30 px-3 py-1 rounded">
                      TASKFLOW // FEATURED FULL STACK
                    </span>
                    <span className="font-mono text-xs text-[#849495]">2026</span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-extrabold text-[#e5e2e3] tracking-wide uppercase">
                    TASKFLOW
                  </h3>
                  
                  <p className="font-mono text-xs md:text-sm text-[#00f5ff]">
                    Fast, intelligent task management platform built with FastAPI and AI Quick-Add
                  </p>
                </div>

                {/* GitHub Action Button */}
                <div className="shrink-0 pt-2 md:pt-0">
                  <a
                    href="https://github.com/oberoirithik9/taskflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00f5ff] text-black font-mono text-xs font-bold px-6 py-3.5 rounded hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.25)]"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["ReactJs", "Node.js", "Express", "MongoDB", "FastAPI", "Python"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-3.5 py-1.5 rounded bg-[#131314] text-[#c5c7c8] border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="h-px bg-white/10 w-full" />

              {/* Bulleted Accomplishments */}
              <div className="space-y-3.5 text-sm md:text-base text-[#b9caca] leading-relaxed">
                {taskFlowBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start">
                    <ChevronRight className="w-4.5 h-4.5 text-[#00f5ff] mr-3 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

            </article>

            {/* PROJECT 2: WORDSCOUNTR (Full Width Clean Blueprint Card) */}
            <article className="bg-[#1c1b1c] border border-white/10 rounded-xl p-6 md:p-10 space-y-6 hover:border-[#00f5ff]/40 hover:shadow-[0_0_40px_rgba(0,245,255,0.08)] transition-all duration-300 relative group">
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-[#00f5ff] bg-[#00f5ff]/10 border border-[#00f5ff]/30 px-3 py-1 rounded">
                      WORDSCOUNTR // FRONTEND UTILITY
                    </span>
                    <span className="font-mono text-xs text-[#849495]">2026</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#e5e2e3] tracking-wide uppercase">
                    WORDSCOUNTR
                  </h3>
                  
                  <p className="font-mono text-xs md:text-sm text-[#00f5ff]">
                    Online Word & Character Counter
                  </p>
                </div>

                {/* GitHub Action Button */}
                <div className="shrink-0 pt-2 md:pt-0">
                  <a
                    href="https://github.com/rajchiku357"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00f5ff] text-black font-mono text-xs font-bold px-6 py-3.5 rounded hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.25)]"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              <p className="text-sm md:text-base text-[#b9caca] leading-relaxed">
                A lightweight web application that instantly counts words, characters, sentences, and paragraphs, helping users analyze and format text efficiently with real-time typography metrics.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["JavaScript", "React.js", "HTML5", "CSS3", "Tailwind CSS"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-3.5 py-1.5 rounded bg-[#131314] text-[#c5c7c8] border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </article>

          </div>
        )}

      </div>
    </section>
  );
}
