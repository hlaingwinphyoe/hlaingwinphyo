"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import SplashCursor from "@/components/ui/SplashCursor";
import { Footer } from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-indigo-600 selection:text-white bg-[#020617] overflow-x-hidden">
      {/* Dynamic Data Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-10"></div>

        <div className="absolute inset-0">
          <div className="absolute h-px w-full top-[20%] left-0 bg-linear-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 animate-beam-horz [animation-duration:12s]"></div>
          <div className="absolute h-px w-full top-[60%] left-0 bg-linear-to-r from-transparent via-purple-500/30 to-transparent opacity-0 animate-beam-horz [animation-duration:8s] [animation-delay:4s]"></div>
        </div>

        {/* Radial Aura */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="absolute inset-0 bg-[#020617]/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 min-h-screen flex flex-col">
        {children}
        <Footer />
      </main>
      <SplashCursor />
    </div>
  );
}
