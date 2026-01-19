"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="pt-28">
      <ol className="flex items-center gap-2 text-sm font-mono">
        {/* Home Link */}
        <li>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-slate-500 hover:text-indigo-400 transition-colors group"
          >
            <Home
              size={14}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="uppercase tracking-wider text-xs">Home</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight size={14} className="text-slate-600" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-slate-500 hover:text-indigo-400 transition-colors uppercase tracking-wider text-xs"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-indigo-400 uppercase tracking-wider text-xs font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Decorative line */}
      <div className="mt-4 h-px w-full bg-linear-to-r from-indigo-500/50 via-purple-500/30 to-transparent"></div>
    </nav>
  );
};
