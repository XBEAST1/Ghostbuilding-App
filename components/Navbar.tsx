"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavbarIcon } from "@/components/Icon";
import CustomButton2 from "@/components/CustomButton2";
import CustomButton3 from "@/components/CustomButton3";

const links = [
  { href: "/community", label: "Community" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/learn", label: "Learn" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex w-full items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-4 backdrop-blur-md bg-black/0">
        {/* Left: Logo + Desktop links */}
        <div className="flex items-center gap-6 lg:gap-10">
          <NavbarIcon />
          <div className="hidden lg:flex items-center gap-10">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-white transition-colors hover:text-violet-400"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: CTA buttons or hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop CTAs */}
          <div className="hidden lg:flex gap-3">
            <CustomButton3>Login</CustomButton3>
            <CustomButton2>Try Ghostbuilding</CustomButton2>
          </div>

          {/* Mobile hamburger */}
          <button
            className="text-white lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border border-gray-400 mt-4 absolute left-1/2 -translate-x-1/2 rounded-xl max-w-80 w-full lg:hidden bg-black/0 backdrop-blur-lg px-6 py-4">
          <div className="flex flex-col items-center gap-4 text-center">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white transition-colors hover:text-violet-400"
              >
                {label}
              </Link>
            ))}
            <CustomButton3 className="w-full">Login</CustomButton3>
            <CustomButton2 className="w-full">Try Ghostbuilding</CustomButton2>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
