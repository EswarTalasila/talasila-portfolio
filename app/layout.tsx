import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Eswar Talasila — Software & ML Engineer",
  description:
    "Portfolio of Eswar Talasila, a software and machine learning engineer building AI-powered systems and full-stack applications.",
  authors: [{ name: "Eswar Talasila" }],
  openGraph: {
    title: "Eswar Talasila — Software & ML Engineer",
    description:
      "Software and machine learning engineer building AI-powered systems and full-stack applications.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body className={inter.className}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
