import React from "react";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { Project } from "../types";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { techColors } from "@/utils";
import Image from "next/image";

const getTechColor = (tech: string): string => {
  return (
    techColors[tech] ||
    "text-neutral-400 border-neutral-400/30 bg-neutral-400/10"
  );
};

interface ProjectWithImage extends Project {
  image: string;
}

const projects: ProjectWithImage[] = [
  {
    id: "1",
    title: "Future Advice By Charm",
    description:
      "Modern spiritual guidance and tarot reading website dedicated to help users gain clarity about their future and life decisions.",
    techStack: ["PHP", "Laravel", "React", "Redux", "Tailwind", "MySQL"],
    status: "Active",
    liveLink: "https://futureadvicebycharm.com",
    image: "/projects/tarot.png",
  },
  {
    id: "2",
    title: "Job Tracker",
    description:
      "A comprehensive job tracking application to manage job applications, jobs posting, and career progress.",
    techStack: ["PHP", "Laravel", "Vue", "Tailwind", "MySQL"],
    status: "Completed",
    liveLink: "http://antiquewhite-chinchilla-670257.hostingersite.com",
    image: "/projects/jobtracker.png",
  },
  {
    id: "3",
    title: "ZeroOnee",
    description:
      "A modern tech company website with a focus on user experience and performance.",
    techStack: ["Next.js", "Tailwind"],
    status: "Completed",
    liveLink: "https://www.zeroonee.com",
    image: "/projects/zeroone.png",
  },
  {
    id: "4",
    title: "Bank Portfolio",
    description:
      "A sleek banking portfolio website showcasing financial services with modern UI/UX design.",
    techStack: ["React", "Tailwind", "Vite"],
    status: "Completed",
    liveLink: "https://bank-portfolio-with-react.vercel.app",
    image: "/projects/bank.png",
  },
];

export const Projects: React.FC = () => {
  return (
    <div
      id="projects"
      className="space-y-16 py-32 border-b border-white/5 relative"
    >
      <RevealOnScroll>
        <div className="relative py-12 mb-12 flex justify-center items-center">
          <h2 className="text-[12vw] md:text-[10vw] font-black text-white/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none uppercase tracking-tighter w-full text-center whitespace-nowrap">
            Work
          </h2>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">
                Portfolio
              </span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              The Projects
            </h3>
          </div>
        </div>
      </RevealOnScroll>

      {/* Projects List */}
      <div className="space-y-1">
        {projects.map((project, index) => (
          <RevealOnScroll key={project.id} delay={index * 80}>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-t border-white/10 py-6 md:py-8 transition-colors duration-300 hover:bg-white/2 relative"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-44 opacity-0 scale-0 rotate-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-12 transition-all duration-500 ease-in-out pointer-events-none z-20 hidden lg:block">
                <div className="relative w-full h-full rounded-none overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="w-[70%] space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl md:text-3xl font-black text-white/90 group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.techStack.includes("Gemini AI") && (
                      <Sparkles
                        size={16}
                        className="text-violet-400 opacity-60"
                      />
                    )}
                    {project.status === "Active" && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-[10px] uppercase tracking-wider text-emerald-400/80 font-medium">
                          Active
                        </span>
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-500 text-sm md:text-base max-w-2xl leading-relaxed font-mono">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex items-center gap-8">
                  <div className="hidden md:flex flex-wrap gap-2 max-w-3xs justify-center">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-medium px-2 py-0.5 rounded-full border ${getTechColor(
                          tech,
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Arrow Icon */}
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
                    <ArrowUpRight
                      size={20}
                      className="text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Tech Stack */}
              <div className="flex md:hidden flex-wrap gap-2 mt-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-[11px] font-medium px-2 py-1 rounded-full border ${getTechColor(
                      tech,
                    )}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </RevealOnScroll>
        ))}

        <div className="border-t border-white/10" />
      </div>
    </div>
  );
};
