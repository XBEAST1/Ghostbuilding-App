"use client";

import { useState } from "react";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";
import Modal6 from "./Modal6";

const ParentModal = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);
  const handleClose = () => setStep(0);

  return (
    <>
      {step === 1 && (
        <Modal1 onNext={handleNext} onClose={handleClose} />
      )}
      {step === 2 && (
        <Modal2 onNext={handleNext} onPrev={handlePrev} onClose={handleClose} />
      )}
      {step === 3 && <Modal3 onNext={handleNext} onPrev={handlePrev} onClose={handleClose}/>}
      {step === 4 && <Modal4 onNext={handleNext} onPrev={handlePrev} onClose={handleClose}/>}
      {step === 5 && <Modal5 onNext={handleNext} onPrev={handlePrev} onClose={handleClose}/>}
      {step === 6 && <Modal6 onNext={handleNext} onPrev={handlePrev} onClose={handleClose}/>}
    </>
  );
};

export default ParentModal;
