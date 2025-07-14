"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Modal4Props {
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

const Modal4: React.FC<Modal4Props> = ({ onNext, onPrev, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95%] sm:w-auto !max-w-xl bg-[#151A22] !border-1 !border-[#4D4D4D] text-white rounded-lg pt-6 pb-6 sm:pt-12 sm:pb-12 transform scale-95 md:scale-100">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle className="text-xl sm:text-3xl font-semibold text-center px-2 sm:px-12">
            How would you describe your AI/No-code building experience?
          </DialogTitle>
        </DialogHeader>

        {/* cards */}
        <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-1 sm:mt-12 px-4 sm:px-6">
          {[
            {
              title: "Beginner",
              desc: "First time building with AI/no-code tools",
            },
            {
              title: "Basic",
              desc: "I have used AI/no-code tools to build before",
            },
            {
              title: "Intermediate",
              desc: "I am comfortable building apps with AI/no-code tools",
            },
            {
              title: "Advanced",
              desc: "I have built fully featured apps using AI/no-code tools",
            },
          ].map((card, i) => (
            <div
              key={card.title}
              onClick={() => setSelectedIndex(i)}
              className={`flex flex-col items-center justify-center bg-[#232B37] rounded-lg py-3 px-4 hover:bg-[#2A2F38] cursor-pointer ${
                selectedIndex === i ? "ring-2 ring-[#7C3AED]" : ""
              }`}
            >
              <span className="text-white text-base sm:text-lg font-semibold mb-2">
                {card.title}
              </span>
              <span className="text-white text-xs sm:text-sm text-center">
                {card.desc}
              </span>
            </div>
          ))}
        </div>

        {/* progress + nav buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-8 items-center mt-8 sm:mt-10 w-full px-4 sm:px-6">
          <div className="flex items-center gap-4 w-full">
            <div className="w-full bg-white rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#7C3AED] h-2 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <span className="text-sm whitespace-nowrap">3/5</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              onClick={onPrev}
              className="cursor-pointer bg-[#484848] text-white border-0 py-3 px-8 hover:bg-[#373737] w-full sm:w-auto"
            >
              Back
            </Button>
            <Button
              onClick={onNext}
              className="cursor-pointer bg-[#5528A3] text-white py-3 px-8 hover:bg-[#5528a3bc] w-full sm:w-auto"
            >
              Next
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal4;
