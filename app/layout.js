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
        className={`${geistSans.variable} ${geistMono.variable} ${kalam.variable} antialiased min-h-screen bg-gradient-to-br from-[#0a0b23] via-[#1a1b3a] to-[#0a0b23] relative`}
      >
        {/* Global Background Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 [background-size:40px_40px] select-none [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] z-[-1]" />
        
        {/* Global Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-2]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-600/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }} />
        </div>
        
        {children}
      </body>
    </html>
  );
}
