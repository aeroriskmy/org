import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aerorisk | Aviation & Space Insurance Education",
  description: "Master aviation and space insurance with world-class training programs. Join 10,000+ professionals who elevated their careers with our industry-recognized certifications.",
  keywords: "aviation insurance, space insurance, insurance training, aviation underwriting, aerospace insurance education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
