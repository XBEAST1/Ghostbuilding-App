"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  AvatarIcon,
  RocketIcon,
  BriefCaseIcon,
  BuildingsIcon,
  DegreeCapIcon,
  InfoIcon,
} from "./ModalIcons";

interface Modal5Props {
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}

const Modal5: React.FC<Modal5Props> = ({ onNext, onPrev, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95%] max-w-lg sm:max-w-xl bg-[#151A22] border border-[#4D4D4D] text-white rounded-lg pt-16 pb-16 sm:pt-20 sm:pb-20 px-4 sm:px-8">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle className="text-2xl sm:text-3xl font-semibold text-center">
            What best describes your Workplace?
          </DialogTitle>
        </DialogHeader>

        {/* cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-12 px-0 sm:px-6">
          {[
            {
              label: "Freelance / Solo",
              icon: (
                <AvatarIcon className="text-white w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
              ),
            },
            {
              label: "Venture Backed Startup",
              icon: (
                <RocketIcon className="text-white w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
              ),
            },
            {
              label: "Small Business",
              icon: (
                <BuildingsIcon className="text-white w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
              ),
            },
            {
              label: "Mid-Size Company",
              icon: (
                <BriefCaseIcon className="text-white w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
              ),
            },
            {
              label: "Large Enterprise",
              icon: (
                <DegreeCapIcon className="text-white w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
              ),
            },
            {
              label: "Agency or Consultancy",
              icon: (
                <InfoIcon className="text-white w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
              ),
            },
          ].map((card, i) => (
            <div
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`flex flex-col items-center justify-center bg-[#232B37] border border-[#4D4D4D] rounded-lg py-4 px-2 sm:py-6 sm:px-4 hover:bg-[#2A2F38] cursor-pointer ${
                selectedIndex === i ? "ring-2 ring-[#7C3AED]" : ""
              }`}
            >
              {card.icon}
              <span className="text-white text-xs sm:text-sm font-medium text-center">
                {card.label}
              </span>
            </div>
          ))}
        </div>

        {/* progress + nav */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 items-center mt-12 sm:mt-20 w-full px-2 sm:px-6">
          <div className="flex items-center gap-4 w-full">
            <div className="w-full bg-white rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#7C3AED] h-2 rounded-full"
                style={{ width: "80%" }}
              />
            </div>
            <span className="text-sm whitespace-nowrap">4/5</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              onClick={onPrev}
              className="cursor-pointer bg-[#484848] text-white border-0 py-3 px-6 hover:bg-[#373737] w-full sm:w-auto"
            >
              Back
            </Button>
            <Button
              onClick={onNext}
              className="cursor-pointer bg-[#5528A3] text-white py-3 px-6 hover:bg-[#5528a3bc] w-full sm:w-auto"
            >
              Next
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal5;
