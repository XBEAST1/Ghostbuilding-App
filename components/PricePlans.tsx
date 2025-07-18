"use client";

import { CheckIconDark, CheckIconLight } from "@/components/Icon";

const PricePlans = () => {
  return (
    <div className="bg-[#14213A] rounded-3xl p-6 flex flex-col lg:flex-row flex-wrap justify-center gap-6 mt-8 shadow-xl font-[family-name:var(--font-poppins)] w-full max-w-6xl">
      {/* Starter Plan */}
      <div className="w-full sm:w-80 bg-transparent text-white p-6 flex flex-col justify-between rounded-3xl">
        <div>
          <div className="text-3xl font-bold">
            <span className="text-[#C8C0FF] text-4xl">$19</span>
            <span className="text-base font-normal text-[#848199]">/month</span>
          </div>
          <p className="text-2xl mt-6 text-[#C8C0FF] font-medium">Starter</p>
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
            <span className="text-base font-normal text-[#848199]">/month</span>
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
          <div className="flex items-center">
            <span className="ml-auto bg-[#D2CDFF] text-[#152133] text-xs px-3 py-2 rounded-full shadow-md font-semibold">
              MOST POPULAR
            </span>
          </div>
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
  );
};

export default PricePlans;
