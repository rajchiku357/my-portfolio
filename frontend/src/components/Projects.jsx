import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../services/api';
import { ExternalLink, Github, ChevronRight, CheckCircle2, FileText, Code2 } from 'lucide-react';

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
        <div className="mb-12 flex flex-col md:flex-row md:items-center gap-4">
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
          <div className="space-y-12">
            
            {/* FEATURED PROJECT 1: TASKFLOW */}
            <article className="bg-[#1c1b1c] border border-white/10 rounded-lg flex flex-col md:flex-row group overflow-hidden hover:border-[#00f5ff]/40 hover:shadow-[0_0_40px_rgba(0,245,255,0.08)] transition-all duration-300">
              
              {/* Left Column: Image Preview Frame */}
              <div className="w-full md:w-5/12 h-[300px] md:h-[540px] overflow-hidden relative bg-black shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                  alt="TaskFlow Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 border-r border-white/10 hidden md:block pointer-events-none" />
                <div className="absolute top-4 left-4 font-mono text-[10px] text-[#00f5ff] bg-[#131314]/90 px-3 py-1 rounded border border-[#00f5ff]/30">
                  TASK FLOW // FEATURED
                </div>
              </div>

              {/* Right Column: Detailed Case Study */}
              <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#e5e2e3] tracking-wide uppercase">
                      TASKFLOW
                    </h3>
                    <span className="font-mono text-xs text-[#849495]">2026</span>
                  </div>

                  <p className="font-mono text-xs text-[#00f5ff] mb-4">
                    Fast, intelligent task management platform built with FastAPI and AI Quick-Add
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["ReactJs", "Node.js", "Express", "MongoDB", "FastAPI", "Python"].map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs px-3 py-1 rounded bg-[#131314] text-[#c5c7c8] border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="h-px bg-white/10 w-full mb-6" />

                  {/* Bullet Points */}
                  <div className="space-y-3 mb-8 text-sm text-[#b9caca] leading-relaxed">
                    {taskFlowBullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-[#00f5ff] mr-2.5 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                  <a
                    href="https://github.com/oberoirithik9/taskflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00f5ff] text-black font-mono text-xs font-bold px-8 py-3.5 rounded hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </article>

            {/* PROJECT 2: WORDSCOUNTR */}
            <article className="bg-[#1c1b1c] border border-white/10 rounded-lg flex flex-col md:flex-row group overflow-hidden hover:border-[#00f5ff]/40 hover:shadow-[0_0_40px_rgba(0,245,255,0.08)] transition-all duration-300">
              
              {/* Left Column Image */}
              <div className="w-full md:w-5/12 h-[260px] md:h-[340px] overflow-hidden relative bg-black shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                  alt="Wordscountr Tool"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 border-r border-white/10 hidden md:block pointer-events-none" />
                <div className="absolute top-4 left-4 font-mono text-[10px] text-[#00f5ff] bg-[#131314]/90 px-3 py-1 rounded border border-[#00f5ff]/30">
                  WORDSCOUNTR // TOOL
                </div>
              </div>

              {/* Right Column Content */}
              <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-[#e5e2e3] tracking-wide uppercase">
                      WORDSCOUNTR
                    </h3>
                    <span className="font-mono text-xs text-[#849495]">2026</span>
                  </div>

                  <p className="font-mono text-xs text-[#00f5ff] mb-4">
                    Online Word & Character Counter
                  </p>

                  <p className="text-sm text-[#b9caca] leading-relaxed mb-6">
                    A lightweight web application that instantly counts words, characters, sentences, and paragraphs, helping users analyze and format text efficiently with real-time stats and responsive typography formatting.
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["JavaScript", "React.js", "HTML5", "CSS3", "Tailwind CSS"].map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs px-3 py-1 rounded bg-[#131314] text-[#c5c7c8] border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                  <a
                    href="https://github.com/oberoirithik9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00f5ff] text-black font-mono text-xs font-bold px-6 py-3 rounded hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </article>

          </div>
        )}

      </div>
    </section>
  );
}
