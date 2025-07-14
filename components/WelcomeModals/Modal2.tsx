"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Modal2Props {
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}

const Modal2: React.FC<Modal2Props> = ({ onNext, onPrev, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[90%] max-w-lg sm:max-w-xl bg-[#151A22] border border-[#4D4D4D] text-white rounded-lg pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-8">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle className="text-2xl sm:text-3xl font-semibold text-center">
            What best describes your role?
          </DialogTitle>
        </DialogHeader>

        {/* role buttons */}
        <div className="flex justify-center gap-3 flex-wrap mt-12 max-w-90 mx-auto">
          {[
            "Founder",
            "Software Engineer",
            "Marketer",
            "Educator",
            "Student",
            "Content Creator",
            "Other",
          ].map((role, i) => (
            <Button
              key={role}
              onClick={() => setSelectedIndex(i)}
              className={`cursor-pointer px-6 h-7 bg-[#39434B] hover:bg-[#23292e] ${
                selectedIndex === i ? "ring-2 ring-[#7C3AED]" : ""
              }`}
            >
              {role}
            </Button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-6 items-center mt-12 sm:mt-20 w-full px-2 sm:px-6">
          {/* progress */}
          <div className="flex items-center gap-4 w-full">
            <div className="w-full bg-white rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#7C3AED] h-2 rounded-full"
                style={{ width: "20%" }}
              />
            </div>
            <span className="text-sm whitespace-nowrap">1/5</span>
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

export default Modal2;
