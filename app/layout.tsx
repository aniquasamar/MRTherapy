import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "MRTherapy | Therapy in Santa Monica & Across CA",
  description: "Online and in-person therapy for high-achieving adults, professionals, and creatives navigating anxiety, trauma, and burnout.",
};

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const cursiveFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cursive",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${cursiveFont.variable} ${sansFont.variable}`}
    >
      <body className="font-sans bg-offwhite text-darktext antialiased">
        {children}
      </body>
    </html>
  );
}