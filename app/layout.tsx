import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahran - Portfolio",
  description:
    "Full-Stack Engineer building intelligent systems & digital experiences. Based in Berlin.",
  keywords: [
    "full-stack engineer",
    "web developer",
    "AI engineer",
    "Berlin",
    "Mohamed Mahran",
  ],
  authors: [{ name: "Mohamed Mahran" }],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%2300f0ff'/%3E%3Ctext x='50' y='50' font-family='Arial, sans-serif' font-size='50' font-weight='bold' fill='%230a0a0a' text-anchor='middle' dominant-baseline='central'%3EMM%3C/text%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%2300f0ff'/%3E%3Ctext x='50' y='50' font-family='Arial, sans-serif' font-size='50' font-weight='bold' fill='%230a0a0a' text-anchor='middle' dominant-baseline='central'%3EMM%3C/text%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Mahran - Portfolio",
    description: "Building intelligent systems & digital experiences",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahran - Portfolio",
    description: "Building intelligent systems & digital experiences",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <CursorGlow />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
