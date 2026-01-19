import React from "react";
import { GlassCard } from "./ui/GlassCard";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { Mail, Github, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

export const Contact: React.FC = () => {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/hlaingwinphyoe",
      color: "hover:text-white",
      bg: "group-hover:bg-zinc-800",
      desc: "Code repositories",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/hlaing-win-phyo/",
      color: "hover:text-blue-400",
      bg: "group-hover:bg-blue-500/20",
      desc: "Professional network",
    },
    {
      name: "Facebook",
      icon: Facebook,
      link: "https://www.facebook.com/hlaing.win.phyoe.618705",
      color: "hover:text-blue-500",
      bg: "group-hover:bg-blue-600/20",
      desc: "Social connection",
    },
    {
      name: "Email",
      icon: Mail,
      link: "mailto:dev.hlaingwinphyoe@gmail.com",
      color: "hover:text-emerald-400",
      bg: "group-hover:bg-emerald-500/20",
      desc: "Direct contact",
    },
  ];

  return (
    <div id="contact" className="space-y-16 py-32">
      <RevealOnScroll>
        <div className="relative py-12 mb-12 flex justify-center items-center">
          <h2 className="text-[12vw] md:text-[10vw] font-black text-white/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none uppercase tracking-tighter w-full text-center whitespace-nowrap">
            Contact
          </h2>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">
                Say Hello
              </span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Get In Touch
            </h3>
          </div>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {socials.map((social, index) => (
          <RevealOnScroll key={social.name} delay={index * 100}>
            <a
              href={social.link}
              target={social.link.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                social.link.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="block h-full"
            >
              <GlassCard
                hoverEffect
                spotlight
                className="p-8 flex items-center justify-between group rounded-none h-full border border-white/5 bg-slate-900/40"
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`p-4 bg-white/5 border border-white/5 text-slate-400 transition-all duration-300 ${social.bg} ${social.color} rounded-none group-hover:scale-110`}
                  >
                    <social.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors uppercase tracking-wide">
                      {social.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-1">
                      {social.desc}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="text-slate-600 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={24}
                />
              </GlassCard>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};
