import React from "react";
import { Github, FileDown, Globe } from "lucide-react";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { GlassCard } from "./ui/GlassCard";
import Image from "next/image";

const TechIcons = {
  Laravel: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-laravel"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" />
      <path d="M11 18v4" />
      <path d="M7 15.5l7 -4" />
      <path d="M14 7.5v4" />
      <path d="M14 11.5l4 2.5" />
      <path d="M11 13v-7.5l-4 -2.5l-4 2.5" />
      <path d="M7 8l4 -2.5" />
      <path d="M18 10l4 -2.5" />
    </svg>
  ),
  NextJs: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nextjs"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
      <path d="M15 12v-3" />
    </svg>
  ),
  React: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
      <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
      <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
      <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
      <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
      <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
      <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
    </svg>
  ),
  Vue: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-vue"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16.5 4l-4.5 8l-4.5 -8" />
      <path d="M3 4l9 16l9 -16" />
    </svg>
  ),
  Node: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
      <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
    </svg>
  ),
  TS: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-typescript"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />
      <path d="M9 12h4" />
      <path d="M11 12v6" />
      <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />
    </svg>
  ),
  SQL: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-mysql"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" />
      <path d="M9 7h.01" />
    </svg>
  ),
};

export const Hero: React.FC = () => {
  return (
    <div id="hero" className="space-y-32 pb-24 border-b border-white/5">
      <section className="relative pt-24 md:pt-32 min-h-[90vh] flex flex-col justify-center">
        <RevealOnScroll>
          <div className="relative z-10 select-none -ml-2 md:-ml-4">
            <h1 className="text-[12vw] leading-[0.75] font-extrabold tracking-tighter text-white mix-blend-overlay opacity-30 mb-px">
              HLAING
            </h1>
            <h1 className="text-[12vw] leading-[0.75] font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-slate-100 via-indigo-200 to-indigo-500">
              WIN PHYO
            </h1>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mt-8 sm:mt-12 z-20 items-end">
          <div className="lg:col-span-7 space-y-10">
            <RevealOnScroll delay={200}>
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-16 bg-indigo-500"></div>
                <span className="text-indigo-400 font-mono tracking-[0.2em] uppercase text-sm font-semibold">
                  Software Engineer
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <p className="font-mono text-sm md:text-base text-indigo-200/80 leading-7 tracking-wide border-l-2 border-indigo-500/30 pl-6">
                Enjoys building things for the web. From backend logic to
                interactive frontends, I like working across the stack to create
                practical and efficient solutions. I’m always exploring new
                technologies and improving my skills with every project.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={600}>
              <div className="flex flex-wrap gap-6 pt-4 relative z-10">
                <a
                  href="/Hlaing-Win-Phyo-CV.pdf"
                  download
                  className="group relative px-8 py-4 bg-white text-slate-950 font-bold text-lg hover:bg-indigo-50 transition-all flex items-center gap-3 rounded-none overflow-hidden"
                >
                  <FileDown size={20} />
                  <span>Download CV</span>
                </a>
                <a
                  href="https://github.com/hlaingwinphyoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-3 rounded-none"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-5">
            <RevealOnScroll delay={800}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm"></div>

                <div className="relative bg-slate-900 border border-white/10 p-8">
                  <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left">
                    <div className="w-32 h-32 shrink-0 bg-slate-800 overflow-hidden border border-white/10 rounded-none shadow-2xl">
                      <Image
                        src="/me.png"
                        alt="Profile"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                      />
                    </div>

                    {/* Short Bio */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl tracking-tight">
                          3+ Years Experience
                        </h3>
                        <p className="text-indigo-400 font-mono text-sm mt-1 uppercase">
                          Specialized in Website Development
                        </p>
                      </div>
                      <div className="h-px w-full bg-white/10"></div>
                      <div className="flex justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <Globe size={12} /> Myanmar
                        </span>
                        <span className="w-px h-3 bg-white/20"></span>
                        <span>Remote Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      {/* Tech Stack */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <RevealOnScroll className="h-full">
            <GlassCard className="p-8 h-full bg-slate-900/40" spotlight>
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
                  Technical Stack
                </h3>
                <div className="h-px flex-1 bg-white/10 mx-6"></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  {
                    n: "PHP / Laravel",
                    Icon: TechIcons.Laravel,
                    c: "text-red-500",
                  },
                  {
                    n: "Next Js",
                    Icon: TechIcons.NextJs,
                    c: "text-white",
                  },
                  {
                    n: "React / Native",
                    Icon: TechIcons.React,
                    c: "text-cyan-400",
                  },
                  { n: "Vue.js", Icon: TechIcons.Vue, c: "text-emerald-400" },
                  { n: "Node.js", Icon: TechIcons.Node, c: "text-green-500" },
                  { n: "TypeScript", Icon: TechIcons.TS, c: "text-blue-400" },
                  {
                    n: "MySQL",
                    Icon: TechIcons.SQL,
                    c: "text-orange-400",
                  },
                ].map((tech) => (
                  <div
                    key={tech.n}
                    className="group relative flex flex-col items-center justify-center gap-4 p-6 bg-white/2 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300 rounded-none overflow-visible"
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap z-20 shadow-xl">
                      {tech.n}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-indigo-600"></div>
                    </div>

                    <div
                      className={`w-10 h-10 ${tech.c} opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 ease-out`}
                    >
                      <tech.Icon />
                    </div>
                    <span className="text-sm font-bold text-slate-400 group-hover:text-white tracking-wide text-center transition-colors duration-300">
                      {tech.n}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>

        {/* Stats */}
        <div className="md:col-span-4">
          <RevealOnScroll delay={200} className="h-full">
            <GlassCard
              className="p-8 h-full flex flex-col justify-between bg-indigo-950/20"
              spotlight
            >
              <div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">
                  Impact
                </h3>
                <p className="text-indigo-200/70 text-sm leading-relaxed">
                  Delivering measurable results through code quality and system
                  performance.
                </p>
              </div>
              <div className="mt-8 space-y-6">
                <div className="group">
                  <div className="flex justify-between items-end pb-2 border-b border-white/10 group-hover:border-indigo-500/50 transition-colors">
                    <span className="text-slate-500 text-sm font-mono uppercase">
                      Years Exp.
                    </span>
                    <span className="text-5xl font-black text-white group-hover:text-indigo-400 transition-colors">
                      03
                    </span>
                  </div>
                </div>
                <div className="group">
                  <div className="flex justify-between items-end pb-2 border-b border-white/10 group-hover:border-indigo-500/50 transition-colors">
                    <span className="text-slate-500 text-sm font-mono uppercase">
                      Projects
                    </span>
                    <span className="text-5xl font-black text-white group-hover:text-indigo-400 transition-colors">
                      15+
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};
