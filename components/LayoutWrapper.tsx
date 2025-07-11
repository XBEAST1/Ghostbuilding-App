"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/login", "/signup"];

  const shouldHide = hideNavbarRoutes.includes(pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      {children}
    </>
  );
}
