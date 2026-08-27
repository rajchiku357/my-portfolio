import React, { useState, useEffect } from 'react';
import { fetchSkills } from '../services/api';
import { Cpu, Server, Database, Wrench, Code2 } from 'lucide-react';

export default function Skills() {
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSkills() {
      try {
        const data = await fetchSkills();
        setSkillsData(data);
      } catch (err) {
        console.error('Failed to load skills:', err);
      } finally {
        setLoading(false);
      }
    }
    loadSkills();
  }, []);

  const categoryIcons = {
    'Languages': Code2,
    'Frameworks & Backend': Server,
    'Databases & Tools': Database,
    'Frontend': Code2
  };

  return (
    <section id="technology" className="py-24 bg-[#131314] text-[#e5e2e3] border-t border-white/10 font-sans relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-[#00f5ff] shrink-0">02 //</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e5e2e3] tracking-wide shrink-0">
            TECHNICAL STACK & COMPETENCIES
          </h2>
          <div className="h-px bg-white/10 w-full" />
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#00f5ff]" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData && Object.entries(skillsData).map(([category, skills]) => {
              const IconComponent = categoryIcons[category] || Cpu;
              return (
                <div
                  key={category}
                  className="bg-[#1c1b1c] border border-white/10 p-6 md:p-8 rounded-lg hover:border-[#00f5ff]/40 hover:shadow-[0_0_30px_rgba(0,245,255,0.06)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded bg-white/5 border border-white/10 text-[#00f5ff]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#e5e2e3] uppercase tracking-wider">{category}</h3>
                    </div>
                    <span className="font-mono text-xs text-[#849495]">{skills.length} MODULES</span>
                  </div>

                  <div className="space-y-4">
                    {skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-center mb-1.5 font-mono text-xs">
                          <span className="text-[#b9caca] flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#00f5ff] rounded-full" />
                            {skill.name}
                          </span>
                          <span className="text-[#849495]">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#131314] rounded overflow-hidden border border-white/10">
                          <div
                            className="h-full bg-[#00f5ff] rounded transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
