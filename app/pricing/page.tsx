"use client";

import { GhostIcon } from "@/components/Icon";
import { CheckIconDark, CheckIconLight } from "@/components/Icon";
import ContactSection from "@/components/ContactSection";

const PricingSection = () => {
  return (
    <>
      <div className="pt-36 pb-24 flex flex-col items-center text-white px-4 sm:px-6 md:px-10">
        <GhostIcon className="mb-4" />
        <h2 className="text-xl sm:mb-10 text-center text-[#B3B3B3] font-[family-name:var(--font-poppins)]">
          Whether your time-saving automation needs are large or small,
          we&apos;re here to help you scale.
        </h2>

        <div className="bg-[#14213A] rounded-3xl p-6 flex flex-col lg:flex-row flex-wrap justify-center gap-6 mt-8 shadow-xl font-[family-name:var(--font-poppins)] w-full max-w-6xl">
          {/* Starter Plan */}
          <div className="w-full sm:w-80 bg-transparent text-white p-6 flex flex-col justify-between rounded-3xl">
            <div>
              <div className="text-3xl font-bold">
                <span className="text-[#C8C0FF] text-4xl">$19</span>
                <span className="text-base font-normal text-[#848199]">
                  /month
                </span>
              </div>
              <p className="text-2xl mt-6 text-[#C8C0FF] font-medium">
                Starter
              </p>
              <p className="text-sm mt-2 font-medium text-[#848199]">
                Unleash the power of automation.
              </p>
              <ul className="space-y-2 text-sm mt-4 text-[#848199] font-medium">
                <li className="flex items-center gap-2">
                  <CheckIconDark /> Multi-step Zaps
                </li>
                <li className="flex items-center gap-2">
                  <CheckIconDark /> 3 Premium Apps
                </li>
                <li className="flex items-center gap-2">
                  <CheckIconDark /> 2 Users team
                </li>
              </ul>
            </div>
            <button className="w-full mt-6 p-3 rounded-full font-medium text-[#252525] bg-[#6E719C] hover:bg-[#949ae3]">
              Choose plan
            </button>
          </div>

          {/* Professional Plan */}
          <div className="w-full sm:w-80 bg-transparent text-white p-6 flex flex-col justify-between rounded-3xl font-[family-name:var(--font-poppins)]">
            <div>
              <div className="text-3xl font-bold">
                <span className="text-[#C8C0FF] text-4xl">$54</span>
                <span className="text-base font-normal text-[#848199]">
                  /month
                </span>
              </div>
              <p className="text-2xl mt-6 text-[#C8C0FF] font-medium">
                Professional
              </p>
              <p className="text-sm mt-2 font-medium text-[#848199]">
                Advanced tools to take your work to the next level.
              </p>
              <ul className="space-y-2 text-sm mt-4 text-[#848199] font-medium">
                <li className="flex items-center gap-2">
                  <CheckIconDark /> Multi-step Zaps
                </li>
                <li className="flex items-center gap-2">
                  <CheckIconDark /> Unlimited Premium
                </li>
                <li className="flex items-center gap-2">
                  <CheckIconDark /> 50 Users team
                </li>
                <li className="flex items-center gap-2">
                  <CheckIconDark /> Shared Workspace
                </li>
              </ul>
            </div>
            <button className="w-full mt-6 p-3 rounded-full font-medium text-[#252525] bg-[#6E719C] hover:bg-[#949ae3]">
              Choose plan
            </button>
          </div>

          {/* Company Plan (Highlighted) */}
          <div className="w-full sm:w-80 bg-[#443A97] text-white p-6 flex flex-col justify-between rounded-4xl relative z-20 font-[family-name:var(--font-poppins)] shadow-[0_20px_40px_-4px_#443A97,8px_6px_12px_-6px_#443A97,-8px_6px_12px_-6px_#443A97] sm:-mt-14 sm:mb-4">
            <div>
              <span className="bg-[#D2CDFF] text-[#152133] text-xs px-3 py-2 rounded-full shadow-md font-semibold">
                MOST POPULAR
              </span>
              <div className="mt-6 text-3xl font-bold">
                <span className="text-4xl">$89</span>
                <span className="text-base font-normal">/month</span>
              </div>
              <p className="text-2xl mt-6 font-medium">Company</p>
              <p className="text-md mt-2 font-medium">
                Automation plus enterprise-grade features.
              </p>
              <ul className="space-y-2 text-sm mt-4 font-medium">
                <li className="flex items-center gap-2">
                  <CheckIconLight /> Multi-step Zap
                </li>
                <li className="flex items-center gap-2">
                  <CheckIconLight /> Unlimited Premium
                </li>
                <li className="flex items-center gap-2">
                  <CheckIconLight /> Unlimited Users Team
                </li>
                <li className="flex items-center gap-2">
                  <CheckIconLight /> Advanced Admin
                </li>
                <li className="flex items-center gap-2">
                  <CheckIconLight /> Custom Data Retention
                </li>
              </ul>
            </div>
            <button className="w-full mt-6 p-3 rounded-full font-medium bg-[#111827] hover:bg-[#0f172ab9]">
              Choose plan
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="relative mt-16 flex flex-col items-center text-center">
          <div className="flex justify-center items-center space-x-3">
            <div className="relative w-6 h-6">
              <div className="absolute left-0 w-8 h-8 rounded-full bg-[#7C3AED] border-2 border-white" />
              <div className="absolute left-4 w-8 h-8 rounded-full bg-[#A97DFF] border-2 border-white" />
              <div className="absolute left-8 w-8 h-8 rounded-full bg-[#E88AF0] border-2 border-white" />
            </div>
            <p className="ms-7 sm:ms-9 mt-2 text-md text-gray-300 font-[family-name:var(--font-inter)]">
              Loved by over 10k builders worldwide
            </p>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
};

export default PricingSection;
