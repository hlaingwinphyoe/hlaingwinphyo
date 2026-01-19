import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://hlaingwinphyo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hlaing Win Phyo | Full Stack Developer",
    template: "%s | Hlaing Win Phyo",
  },
  description:
    "Full stack software engineer specializing in Laravel, React, Vue.js, and Node.js. Building modern web applications with 3+ years of experience.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Software Engineer",
    "Myanmar Developer",
    "Hlaing Win Phyo",
    "Hlaing Win Phyo Portfolio",
  ],
  authors: [{ name: "Hlaing Win Phyo", url: siteUrl }],
  creator: "Hlaing Win Phyo",
  publisher: "Hlaing Win Phyo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Hlaing Win Phyo Portfolio",
    title: "Hlaing Win Phyo | Full Stack Developer",
    description:
      "Full stack software engineer specializing in Laravel, React, Vue.js, and Node.js. Building modern web applications with 3+ years of experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hlaing Win Phyo - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hlaing Win Phyo | Full Stack Developer",
    description:
      "Full stack software engineer specializing in Laravel, React, Vue.js, and Node.js. Building modern web applications with 3+ years of experience.",
    images: ["/og-image.png"],
    creator: "@hlaingwinphyo",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
