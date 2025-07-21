"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GhostIcon, GhostWink } from "@/components/Icon";
// import CustomButton2 from "@/components/CustomButton2";
import CustomButton3 from "@/components/CustomButton3";
import { Button } from "@/components/ui/button";
import SettingsPopover from "@/components/SettingsPopover";

type Session = {
  user?: {
    name?: string;
    email?: string;
    image?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

const links = [
  { href: "/community", label: "Community" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/learn", label: "Learn" },
];

const Navbar = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/auth/session");
        const data = await res.json();
        setSession(data);
      } catch (error) {
        console.error("Failed to fetch session:", error);
      }
    };
    fetchSession();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex w-full items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-4 backdrop-blur-md bg-black/0">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/">
            <GhostIcon className="pt-2" />
          </Link>
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

        <div className="flex items-center gap-3">
          {/* Desktop CTAs */}
          <div className="hidden lg:flex gap-3">
            {!session?.user ? (
              <Link href="/login">
                <CustomButton3>Login</CustomButton3>
              </Link>
            ) : (
              <div className="hidden lg:flex gap-3">
                <SettingsPopover
                  userName="XBEAST's Ghosty"
                  userEmail="xbeast1@proton.me"
                  creditsUsed={10}
                  maxCredits={20}
                  open={popoverOpen}
                  onOpenChange={setPopoverOpen}
                >
                  <Button
                    className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 bg-transparent hover:bg-transparent hover:shadow-none focus-visible:ring-0 focus:outline-none"
                    onClick={() => setPopoverOpen(!popoverOpen)}
                  >
                    <div className="bg-[#4C1AA2] p-3 rounded-lg">
                      <GhostWink className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-bold">
                      {session.user.name}&apos;s Ghosty
                    </span>
                  </Button>
                </SettingsPopover>
              </div>
            )}
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
            {/* <CustomButton2 className="w-full">Try Ghostbuilding</CustomButton2> */}

            <Button
              className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 bg-transparent hover:bg-transparent hover:shadow-none focus-visible:ring-0 focus:outline-none"
              onClick={() => setPopoverOpen(!popoverOpen)}
            >
              <div className="bg-[#4C1AA2] p-3 rounded-lg">
                <GhostWink className="h-4 w-4" />
              </div>
              <span className="text-sm font-bold">XBEAST&apos;s Ghosty</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
