"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { NavbarIcon } from "@/components/Icon";
import CustomButton from "@/components/CustomButton";

const links = [
  { href: "/community", label: "Community" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/learn", label: "Learn" },
];

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div
        className="
          mx-auto flex w-full items-center justify-between
          px-24 py-4
          backdrop-blur-md bg-black/0
        "
      >
        <div className="flex items-center gap-8">
          {/* mobile hamburger */}
          <button className="text-white lg:hidden">
            <Menu size={22} />
          </button>

          {/* mascot icon */}
          <NavbarIcon />

          {/* desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="
                  text-sm font-medium text-white transition-colors
                  hover:text-violet-400
                "
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* right-side CTA ---------------------------------------------- */}
      <CustomButton>Try Ghostbuilding</CustomButton>
      </div>
    </nav>
  );
};

export default Navbar;
