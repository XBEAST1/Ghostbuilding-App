"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const TemplateSection = () => {
  return (
    <div className="mt-14 mb-10 rounded-xl p-4 sm:p-8 md:p-14 max-w-[95%] md:max-w-[90%] mx-auto bg-[#1B2332] text-white min-h-screen">
      {/* Yours Workspace Section */}
      <section className="mb-12">
        <div className="mb-4 space-y-4">
          <h2 className="text-xl font-semibold font-[family-name:var(--font-otomanopee)] block">
            Yours Workspace
          </h2>
          <div className="pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center font-[family-name:var(--font-otomanopee)] gap-4">
            <Input
              type="text"
              placeholder="Search projects"
              className="bg-[#1D2330] border border-white/90 text-white !placeholder-white/60 focus-visible:ring-0 focus-visible:ring-offset-0 w-full sm:max-w-sm h-10 rounded-lg"
            />
            <button className="text-white text-sm whitespace-nowrap">
              View More
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index}>
                {/* Card */}
                <Card className="bg-[#5528A3] border-0 rounded-lg overflow-hidden shadow-md w-full">
                  <div className="h-32 bg-[#5528A3]"></div>
                </Card>
                {/* Avatar and Text */}
                <div className="flex items-center mt-4">
                  <Avatar className="w-8 h-8 bg-gray-300 mr-2" />
                  <div>
                    <Badge className="bg-[#5528A3] text-[#e9e2f6] mb-1">
                      Website
                    </Badge>
                    <p className="text-sm text-white">crypto trade template</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* From GhostBuilder Community Section */}
      <section>
        <div className="mb-4 space-y-4">
          {/* Title full-width */}
          <h2 className="text-xl font-semibold font-[family-name:var(--font-otomanopee)] block">
            From GhostBuilder Community
          </h2>

          {/* Row: Popular - Categories - View More */}
          <div className="pt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between font-[family-name:var(--font-otomanopee)]">
            {/* Left: Popular Dropdown */}
            <div className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#1D2330] border border-white/90 rounded-xl !px-6 text-white hover:bg-white/10">
                Popular <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Center: Category Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center items-center">
              {["Discover", "Website", "App", "Branding", "Prototype"].map(
                (label) => (
                  <Button
                    key={label}
                    className="w-full sm:w-auto bg-[#1D2330] font-light border border-white/90 rounded-xl text-white hover:bg-white/10"
                  >
                    {label}
                  </Button>
                )
              )}
            </div>

            {/* Right: View More */}
            <div className="w-full sm:w-auto text-center sm:text-right">
              <button className="w-full sm:w-auto text-white text-sm whitespace-nowrap">
                View More
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div key={index}>
                {/* Card */}
                <Card className="bg-[#5528A3] border-0 rounded-lg overflow-hidden shadow-md w-full">
                  <div className="h-32 bg-[#5528A3]"></div>
                </Card>
                {/* Avatar and Text */}
                <div className="flex items-center mt-4">
                  <Avatar className="w-8 h-8 bg-gray-300 mr-2" />
                  <div>
                    <Badge className="bg-[#5528A3] text-[#e9e2f6] mb-1">
                      Website
                    </Badge>
                    <p className="text-sm text-white">crypto trade template</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default TemplateSection;
