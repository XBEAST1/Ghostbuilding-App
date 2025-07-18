"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ExitIcon,
  GhostWink,
  CrownIcon,
  SettingsIcon,
  InviteIcon,
  GiftIcon,
  InfoIcon,
  ThemeIcon,
  CheckIcon,
} from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { ChevronRight, PlusIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SettingsModal from "./SettingsModal";

interface SettingsPopoverProps {
  userName: string;
  userEmail: string;
  creditsUsed: number;
  maxCredits: number;
  // onSignOut?: () => void;
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const SettingsPopover = ({
  userName,
  userEmail,
  creditsUsed,
  maxCredits,
  // onSignOut,
  trigger,
  children,
  open,
  onOpenChange,
}: SettingsPopoverProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        {children || trigger || (
          <Button variant="ghost" className="flex items-center space-x-2">
            <GhostWink className="h-6 w-6" />
            <span>{userName}</span>
          </Button>
        )}
      </PopoverTrigger>

      <PopoverContent className="fixed inset-x-5 top-4 mx-auto w-[90vw] sm:w-100 sm:max-w-lg bg-[#152137] text-white rounded-lg shadow-lg p-4 sm:-me-18">
        <div className="flex flex-col space-y-4">
          {/* User Info */}
          <div className="flex items-center space-x-2">
            <div className="bg-[#4C1AA2] p-3 rounded-lg">
              <GhostWink className="h-6 w-6" />
            </div>
            <div>
              <p className="text-md font-semibold">{userName}</p>
              <p className="text-xs">{userEmail}</p>
            </div>
          </div>

          {/* Turn Pro Section */}
          <div className="bg-[#233557] p-3 mt-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <CrownIcon className="w-8 h-8" />
                <p className="text-sm font-semibold">Turn Pro</p>
              </div>
              <Button className="bg-[#0B2450] text-[#3A74DD] cursor-pointer">
                Upgrade
              </Button>
            </div>
          </div>

          {/* Credits Used Section */}
          <div className="bg-[#233557] p-4 rounded-lg">
            <p className="text-sm font-bold mb-2">Credits Used</p>
            <div className="flex items-center justify-between">
              <span className="text-sm mr-4">Plan</span>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-[#7145BE] h-2 rounded-full"
                  style={{ width: `${(creditsUsed / maxCredits) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm ml-4">
                {creditsUsed}/{maxCredits}
              </span>
            </div>
            <p className="mt-2 text-sm">0 of your daily credits used</p>
          </div>

          <div className="flex gap-3">
            <Button
              className="bg-[#233557] cursor-pointer"
              onClick={handleOpenModal}
            >
              <SettingsIcon className="!w-5 !h-5" />
              Settings
            </Button>

            {/* Render the modal conditionally */}
            {isModalOpen && <SettingsModal onClose={handleCloseModal} />}

            <Button className="bg-[#233557] cursor-pointer">
              <InviteIcon className="!w-5 !h-5" />
              Invite
            </Button>
          </div>

          {/* Workspaces Section */}
          <div className="bg-[#233557] p-4 rounded-lg">
            <p className="text-sm font-bold mb-4">Workspaces(1)</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-[#4C1AA2] p-3 rounded-lg">
                  <GhostWink className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    {userName}{" "}
                    <Badge className="ms-2 px-6 text-[9px] !rounded-sm bg-[#182641] text-[#7BA6F5]">
                      Free
                    </Badge>
                  </p>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="mt-2">
              <PlusIcon />
              Create new workspace
            </Button>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col justify-start space-y-1">
            <Button
              variant="link"
              className="text-white flex items-center justify-start gap-x-2"
            >
              <GiftIcon className="!w-5 !h-5" />
              Free Credits
            </Button>
            <Button
              variant="link"
              className="text-white flex items-center justify-start gap-x-2"
            >
              <InfoIcon className="!w-5 !h-5" />
              Help Center
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex justify-between items-center cursor-pointer">
                  <Button
                    variant="link"
                    className="text-white flex items-center justify-start gap-x-2"
                  >
                    <ThemeIcon className="!w-5 !h-5" />
                    Appearance
                  </Button>
                  <ChevronRight className="me-6" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-50 bg-[#152137] text-white rounded-lg shadow-lg p-4 mt-2">
                <div className="flex flex-col space-y-2">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 justify-start"
                  >
                    <span className="w-3 h-3" />
                    Light
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 justify-start"
                  >
                    <CheckIcon className="w-4 h-4 text-[#7BA6F5]" />
                    Dark
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 justify-start"
                  >
                    <span className="w-3 h-3" />
                    System Theme
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Sign Out */}
          <Button className="w-full p-5 bg-[#572323] flex justify-start">
            <ExitIcon className="ms-3" /> Sign Out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SettingsPopover;
