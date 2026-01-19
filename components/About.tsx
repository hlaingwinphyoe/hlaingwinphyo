import React from "react";
import { GlassCard } from "./ui/GlassCard";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { User, Briefcase, GraduationCap, School, Award } from "lucide-react";

export const About: React.FC = () => {
  return (
    <div
      id="about"
      className="space-y-16 py-32 border-b border-white/5 relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="relative py-12 mb-12 flex justify-center items-center">
          <h2 className="text-[12vw] md:text-[10vw] font-black text-white/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none uppercase tracking-tighter w-full text-center whitespace-nowrap">
            About Me
          </h2>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
                My Profile
              </span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              The Developer
            </h3>
          </div>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Bio */}
        <RevealOnScroll className="h-full col-span-full">
          <GlassCard className="p-8 md:p-10 h-full" spotlight>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <User size={28} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-wide">
                About Me
              </h3>
            </div>

            <p className="indent-6 md:indent-12 text-slate-300  leading-relaxed text-justify font-mono">
              Web developer with{" "}
              <span className="text-white font-semibold">3+ years</span> of
              experience building web applications. I specialize in{" "}
              <span className="text-rose-400 font-medium">PHP/Laravel</span> for
              backend development and{" "}
              <span className="text-cyan-400 font-medium">
                React, Vue.js, React Native
              </span>{" "}
              for creating interactive user interfaces. I enjoy crafting
              solutions that are both functional and elegant, working across the
              stack to create practical and efficient solutions.
            </p>
          </GlassCard>
        </RevealOnScroll>

        {/* Education Section */}
        <RevealOnScroll delay={300}>
          <GlassCard className="p-10" spotlight>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-none">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-wide">
                Education & Certs
              </h3>
            </div>

            <div className="space-y-4">
              {/* SIBA */}
              <div className="flex flex-col sm:flex-row gap-4 p-5 border border-white/5 bg-white/2 hover:bg-white/5 transition-colors group">
                <div className="mt-1 text-emerald-500/80 group-hover:text-emerald-400 transition-colors">
                  <Briefcase size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-lg font-bold text-white">
                      Digital Business
                    </h4>
                    <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 border border-white/10 rounded-none">
                      2024 - 2026
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm font-mono">
                    SIBA College
                  </p>
                </div>
              </div>

              {/* University */}
              <div className="flex flex-col sm:flex-row gap-4 p-5 border border-white/5 bg-white/2 hover:bg-white/5 transition-colors group">
                <div className="mt-1 text-emerald-500/80 group-hover:text-emerald-400 transition-colors">
                  <School size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Second Year (Computer Science)
                      </h4>
                      {/* <p className="text-red-200 text-xs italic">
                        Not Graduated
                      </p> */}
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 border border-white/10 rounded-none">
                      2018 - 2020
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm font-mono">
                    University of Computer Studies
                  </p>
                </div>
              </div>

              {/* MMS Course */}
              <div className="flex flex-col sm:flex-row gap-4 p-5 border border-white/5 bg-white/2 hover:bg-white/5 transition-colors group">
                <div className="mt-1 text-emerald-500/80 group-hover:text-emerald-400 transition-colors">
                  <School size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-lg font-bold text-white">
                      Web Application Developer Course
                    </h4>
                    <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 border border-white/10 rounded-none">
                      2021 - 2022
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm font-mono">
                    MMS One Stop IT Solutions
                  </p>
                </div>
              </div>

              {/* FE Exam */}
              <div className="flex flex-col sm:flex-row gap-4 p-5 border border-white/5 bg-white/2 hover:bg-white/5 transition-colors group border-l-2 border-l-emerald-500">
                <div className="mt-1 text-emerald-500/80 group-hover:text-emerald-400 transition-colors">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-lg font-bold text-white">
                      FE Certified Engineer
                    </h4>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 border border-emerald-500/20 rounded-none">
                      Apr, 2023
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm font-mono">
                    Information Technology Professionals Examination Council
                    (ITPEC)
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </RevealOnScroll>

        <RevealOnScroll delay={200} className="flex-1">
          <GlassCard className="p-10 h-fixed" spotlight>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-none">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-wide">
                Experiences
              </h3>
            </div>

            <div className="space-y-10 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-linear-to-b before:from-indigo-500 before:to-transparent">
              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 w-4 h-4 bg-indigo-500 border-2 border-slate-900 shadow-[0_0_0_4px_rgba(99,102,241,0.2)] rounded-none group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-xs font-mono text-indigo-400 mb-2 block tracking-wider">
                  2025 - Present
                </span>
                <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Backend Developer - MMS One Stop IT Solutions
                </h4>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed font-mono">
                  Developing POS Backend Api with laravel.
                </p>
              </div>

              <div className="relative pl-10 group">
                <div className="absolute left-[3px] top-2 w-2.5 h-2.5 bg-slate-600 rounded-none group-hover:bg-slate-400 transition-colors"></div>
                <span className="text-xs font-mono text-slate-500 mb-2 block tracking-wider">
                  2022 - Present
                </span>
                <h4 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                  Full Stack Developer
                </h4>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed font-mono">
                  Specialized in PHP/Laravel backend development and Vue.js
                  frontends for enterprise clients. Delivered 10+ production
                  projects.
                </p>
              </div>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </div>
  );
};
