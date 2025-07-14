"use client";

import { useEffect, useState } from "react";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import TemplateSection from "@/components/TemplateSection";
import ParentModal from "@/components/WelcomeModals/ParentModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div>
      {showModal && <ParentModal  />}
      <HeroSection />
      <TemplateSection />
      <ContactSection />
    </div>
  );
}
