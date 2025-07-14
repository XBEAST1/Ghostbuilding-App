"use client";

import { Github, Figma, Plus, Mic } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "@/assets/main-bg.png";
import CustomButton from "@/components/CustomButton";
import { Textarea } from "@/components/ui/textarea";

const HeroSection = () => {
  return (
    <section className="pt-24 sm:pt-7 pb-24 sm:pb-0 relative min-h-screen flex flex-col items-center justify-center text-white px-4">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={BackgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/65" />

      {/* Top banner */}
      <div className="w-full flex justify-center px-4">
        <Link
          href="/hackathon"
          className="flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm border border-white font-medium text-white text-center max-w-xs sm:max-w-full"
        >
          🏆 Join the World&apos;s Largest Hackathon - $100k in prizes!
        </Link>
      </div>

      {/* Main content */}
      <div className="mt-4 text-center w-full max-w-5xl px-2">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-[family-name:var(--font-jersey)] leading-tight">
          <span className="text-[#A46EFF]">GhostBuilder</span> Builds. You
          Scale.
        </h1>

        <p className="mt-3 text-base sm:text-xl md:text-2xl">
          Type your idea. Get a{" "}
          <span className="text-[#00AAFF]">full-stack business.</span>
        </p>

        <div className="mt-8 flex flex-col space-y-3 bg-[#31354D] p-4 rounded-3xl w-full max-w-3xl mx-auto">
          <div>
            <Textarea
              placeholder="Ask anything?"
              className="h-10 text-white placeholder:!text-white border-none !ring-0 !border-0 focus:!ring-0 focus:!border-0 focus:!outline-none focus-visible:!ring-0 focus-visible:!outline-none resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <button className="p-2">
                <Plus className="text-white w-8 h-8" />
              </button>
              <button className="p-2">
                <Mic className="text-white w-6 h-6" />
              </button>
            </div>

            <CustomButton className="bg-purple-600 text-white hover:bg-purple-700 w-full sm:w-auto">
              Try Ghostbuilding
            </CustomButton>
          </div>
        </div>

        {/* Import from section */}
        <div className="mt-6">
          <span className="text-sm sm:text-base">or Import from</span>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white transition"
              style={{
                background: "linear-gradient(135deg, #2C1955, #1D2947)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Figma size={20} />
              Figma
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white transition"
              style={{
                background: "linear-gradient(135deg, #2C1955, #1D2947)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Github size={20} />
              Github
            </button>
          </div>
        </div>

        {/* Example buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl">
          {[
            "Launch an AI fitness coach",
            "Start a local service finder app",
            "Start a local service finder app",
            "Launch an AI fitness coach",
            "Start a local service finder app",
            "Launch an AI fitness coach",
            "Start a local service finder app",
          ].map((text, index) => (
            <button
              key={index}
              className="rounded-lg bg-[#2E4556] px-4 py-2 text-sm text-gray-300 hover:text-white text-center"
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center space-x-3">
        <div className="relative w-6 h-6">
          <div className="absolute left-0 w-6 h-6 rounded-full bg-[#7C3AED] border-2 border-white" />
          <div className="absolute left-3 w-6 h-6 rounded-full bg-[#A97DFF] border-2 border-white" />
          <div className="absolute left-6 w-6 h-6 rounded-full bg-[#E88AF0] border-2 border-white" />
        </div>
        <p className="ms-5 text-sm text-gray-300 font-[family-name:var(--font-inter)] text-center">
          Loved by over 10k builders worldwide
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
