"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BulbIcon } from "./ModalIcons";

interface Modal1Props {
  onNext: () => void;
  onClose: () => void;
}

const Modal1: React.FC<Modal1Props> = ({ onNext, onClose }) => {
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[90%] max-w-xl bg-[#151A22] border border-[#4D4D4D] text-white rounded-lg pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-8">
        <DialogHeader className="flex flex-col items-center">
          <BulbIcon className="text-white mb-4" />
          <DialogTitle className="text-2xl sm:text-3xl font-semibold text-center">
            Tell us a little about yourself
          </DialogTitle>
        </DialogHeader>
        <p className="text-center mt-4 sm:mt-2 px-4 sm:px-16 text-[#C7C7C7] text-sm sm:text-base">
          Your answers will help us tailor ghost to your needs and give you the
          best experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 sm:mt-20">
          <Button
            onClick={onClose}
            className="cursor-pointer bg-[#484848] text-white border-0 py-4 px-6 hover:bg-[#373737] w-full sm:w-auto"
          >
            Not now
          </Button>
          <Button
            onClick={onNext}
            className="cursor-pointer bg-[#5528A3] text-white py-4 px-6 hover:bg-[#5528a3bc] w-full sm:w-auto"
          >
            Let&apos;s do it
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal1;
