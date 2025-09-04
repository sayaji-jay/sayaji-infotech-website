import { Geist, Geist_Mono, Kalam } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "AI Tool - Next.js Template for AI Tools",
  description: "Build SaaS AI applications using OpenAI and Next.js, this kit Kickstart your AI Startuplt examples.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kalam.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
