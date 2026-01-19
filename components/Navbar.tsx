"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  FolderGit2,
  Mail,
  ArrowRight,
  Home,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-110 bg-[#020617]/50 backdrop-blur-lg transition-all duration-500 ${
          scrolled ? "py-3 sm:py-4" : "py-4 sm:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Image src="/icon.png" alt="Logo" width={36} height={40} />
            <span className="font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase text-white transition-opacity duration-300">
              &lt;HlaingWinPhyo /&gt;
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-4 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl transition-all group cursor-pointer"
          >
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-slate-300 group-hover:text-white">
              {isOpen ? "Close" : "Menu"}
            </span>
            <div className="relative w-5 h-5 overflow-hidden">
              {isOpen ? (
                <X size={20} className="text-indigo-400" />
              ) : (
                <Menu size={20} className="text-white" />
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Slide-Down Modal */}
      <div
        className={`fixed inset-0 z-105 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-950/95 backdrop-blur-3xl"
          onClick={() => setIsOpen(false)}
        ></div>

        <div className="relative h-full flex flex-col justify-center items-center px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-indigo-500 to-transparent opacity-50"></div>

          <div className="space-y-4 w-full max-w-lg">
            {navItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group w-full flex items-center justify-between py-6 border-b border-white/5 hover:border-indigo-500/50 transition-all text-left"
                style={{
                  transitionDelay: `${idx * 50}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-slate-600 group-hover:text-indigo-500 transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-4xl md:text-6xl font-black text-white group-hover:translate-x-4 transition-transform duration-500 uppercase tracking-tighter italic">
                      {item.name}
                    </span>
                  </div>
                </div>
                <ArrowRight
                  className="text-indigo-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500"
                  size={32}
                />
              </Link>
            ))}
          </div>

          {/* Social Links in Modal */}
          <div
            className="absolute bottom-12 flex gap-8 text-xs font-mono uppercase tracking-widest text-slate-500"
            style={{ opacity: isOpen ? 1 : 0, transitionDelay: "400ms" }}
          >
            <a
              href="https://github.com/hlaingwinphyoe"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hlaing-win-phyo/"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dev.hlaingwinphyoe@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
