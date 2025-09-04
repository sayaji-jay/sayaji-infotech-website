import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

const HeroSection = () => {
  return (
    <div
      className="relative flex h-[40rem] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center bg-[#0a192f]">
      
      {/* Box Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"
        )}
      />

      {/* Fade Effect Bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent" />
      
      {/* Fade Effect Top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-transparent to-transparent" />
      
      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      
      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-center text-4xl font-extrabold text-transparent md:text-7xl">
          Sayaji Infotech
        </h1>
        <h2 className="mt-2 text-center text-xl md:text-3xl font-semibold text-white">
          Tech for All, Tech for Growth
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300">
          Empowering businesses with cutting-edge software solutions, 
          scalable applications, and next-gen technologies for a better tomorrow.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
