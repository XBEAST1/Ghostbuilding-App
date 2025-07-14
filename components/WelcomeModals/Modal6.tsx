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
      <DialogContent className="w-[95%] max-w-xl bg-[#151A22] border border-[#4D4D4D] text-white rounded-lg pt-12 pb-12 sm:pt-16 sm:pb-16 px-4 sm:px-8">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle className="text-2xl sm:text-3xl font-semibold text-center px-2 sm:px-12">
            What are you looking to achieve in ghost?
          </DialogTitle>
        </DialogHeader>

        {/* cards */}
        <div className="grid grid-cols-1 gap-4 mt-12 px-0 sm:px-6">
          {[
            "Build and launch an app / website",
            "Quickly build an example / prototype",
            "Learn how to build apps / websites",
            "Not sure yet",
          ].map((text, i) => (
            <div
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`flex flex-col items-center justify-center bg-[#232B37] rounded-lg py-4 px-3 sm:py-6 sm:px-4 hover:bg-[#2A2F38] cursor-pointer ${
                selectedIndex === i ? "ring-2 ring-[#7C3AED]" : ""
              }`}
            >
              <span className="text-white text-xs sm:text-sm text-center">
                {text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-6 items-center mt-12 sm:mt-20 w-full px-2 sm:px-6">
          {/* progress */}
          <div className="flex items-center gap-4 w-full">
            <div className="w-full bg-white rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#7C3AED] h-2 rounded-full"
                style={{ width: "100%" }}
              />
            </div>
            <span className="text-sm whitespace-nowrap">5/5</span>
          </div>

          {/* nav buttons */}
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

export default Modal4;
