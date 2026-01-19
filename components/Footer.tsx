import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-white/10 text-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-slate-500 text-sm font-mono">
          © {new Date().getFullYear()} Hlaing Win Phyo. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-2">
          <div className="w-2 h-2 bg-slate-800 rounded-none"></div>
          <div className="w-2 h-2 bg-slate-800 rounded-none"></div>
          <div className="w-2 h-2 bg-slate-800 rounded-none"></div>
        </div>
      </div>
    </footer>
  );
};
