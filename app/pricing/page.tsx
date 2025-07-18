"use client";

import { GhostIcon } from "@/components/Icon";
import ContactSection from "@/components/ContactSection";
import PricePlans from "@/components/PricePlans";

const PricingSection = () => {
  return (
    <>
      <div className="pt-36 pb-24 flex flex-col items-center text-white px-4 sm:px-6 md:px-10">
        <GhostIcon className="mb-4" />
        <h2 className="text-xl sm:mb-10 text-center text-[#B3B3B3] font-[family-name:var(--font-poppins)]">
          Whether your time-saving automation needs are large or small,
          we&apos;re here to help you scale.
        </h2>

        <PricePlans />

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
