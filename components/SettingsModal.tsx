"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  GhostWink,
  BillingIcon,
  ProfileIcon,
  PeopleIcon,
  LabIcon,
  GithubIconBlack,
} from "@/components/Icon";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import PricePlans from "./PricePlans";

type ActiveSection =
  | "workspace"
  | "people"
  | "billing"
  | "profile"
  | "labs"
  | "github";

const SettingsModal = ({ onClose }: { onClose: () => void }) => {
  const [activeSection, setActiveSection] =
    useState<ActiveSection>("workspace");

  const renderMainContent = () => {
    switch (activeSection) {
      case "workspace":
        return (
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold mb-2">
              Workspace Settings
            </h1>
            <p className="text-slate-400 mb-6 lg:mb-8">
              Workspace allow you to collaborate on projects in real time
            </p>

            {/* Workspace Avatar */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <h2 className="text-lg font-medium mb-2">Workspace Avatar</h2>
                  <p className="text-sm text-slate-400">
                    Set an avatar for your workspace
                  </p>
                </div>
                <div className="bg-[#4C1AA2] ms-75 p-3 rounded-lg">
                  <GhostWink className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Workspace Name */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="lg:w-1/2">
                  <h2 className="text-lg font-medium mb-2">Workspace Name</h2>
                  <p className="text-sm text-slate-400">
                    Your full workspace name, as visible to others.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <Input
                    defaultValue="XBEAST's Ghosty"
                    className="w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Workspace Description */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="lg:w-1/2">
                  <h2 className="text-lg font-medium mb-2">
                    Workspace Description
                  </h2>
                  <p className="text-sm text-slate-400">
                    A short description of what this workspace or team is used
                    for.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <Textarea
                    placeholder="Description"
                    className="w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400 min-h-[120px]"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case "people":
        return (
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold mb-2">People</h1>
            <p className="text-slate-400 mb-6 lg:mb-8">
              Inviting people to XBEAST&apos;s Ghost gives access to workspace shared
              projects and credits. You&apos;re using 1/20 seats. Need more? Contact
              us.
            </p>

            {/* Invite Section */}
            <div className="space-y-3 mb-8">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Add Emails"
                  className="p-5 w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                />
                <Button className="bg-[#4C1AA2] p-5 px-14">Invite</Button>
              </div>
            </div>

            {/* Members Section */}
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-white mb-2">Members</h2>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#A259FF] mt-1" />

                <div className="flex flex-col gap-1">
                  <div className="text-white text-base font-medium">
                    xbeast1@proton.me{" "}
                    <span className="text-slate-400 text-sm">(you)</span>
                  </div>
                  <div className="text-white text-sm">
                    sultanfarooq98@gmail.com
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-white mb-2">Usage</h2>

              <span className="text-md text-[#E8E8E8] mb-2">
                Showing usage for July 2025.
              </span>

              <div className="flex items-start gap-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-[#A259FF] mt-1" />

                <div className="text-white text-base font-medium mt-3">
                  xbeast1@proton.me
                </div>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-md text-[#E8E8E8] mb-2">
                Total usage across all months.
              </span>

              <div className="flex items-start gap-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-[#A259FF] mt-1" />

                <div className="text-white text-base font-medium mt-3">
                  xbeast1@proton.me
                </div>
              </div>
            </div>
          </div>
        );

      case "billing":
        return (
          <div>
            <div className="mb-16">
              <h1 className="text-xl lg:text-2xl font-semibold mb-2">
                Plans & Billing
              </h1>
              <div className="bg-slate-800 mt-6 p-4 rounded-lg">
                <p className="text-slate-400">
                  You&apos;re currently on plan: free. Manage your payment
                  preferences and view past invoices, or change your plan below.
                </p>
              </div>
            </div>
            <PricePlans />
          </div>
        );

      case "profile":
        return (
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold mb-2">
              Your Avatar
            </h1>
            <p className="text-slate-400 mb-6 lg:mb-8">
              Your avatar is automatically generated based on your account.
            </p>

            <h1 className="text-xl lg:text-xl font-semibold mb-2">
              Account Settings
            </h1>
            <p className="text-slate-400 mb-6 lg:mb-8">
              Personalize how others see and interact with you on ghost.
            </p>

            {/* Username */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="lg:w-1/2">
                  <h2 className="text-lg font-medium mb-2">Username</h2>
                  <p className="text-sm text-slate-400">
                    Your public identifier and profile URL.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <Input
                    defaultValue="xbeast1"
                    className="w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="lg:w-1/2">
                  <h2 className="text-lg font-medium mb-2">Email</h2>
                  <p className="text-sm text-slate-400">
                    Your email address associated with your account.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <Input
                    type="email"
                    defaultValue="xbeast1@proton.me"
                    className="w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="lg:w-1/2">
                  <h2 className="text-lg font-medium mb-2">Name</h2>
                  <p className="text-sm text-slate-400">
                    Your full name, as visible to others.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <Input
                    defaultValue="XBEAST"
                    className="w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="lg:w-1/2">
                  <h2 className="text-lg font-medium mb-2">Description</h2>
                  <p className="text-sm text-slate-400">
                    A short description of yourself or your work.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <Textarea className="w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400 min-h-[60px]" />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="lg:w-1/2">
                  <h2 className="text-lg font-medium mb-2">Location</h2>
                  <p className="text-sm text-slate-400">
                    Where you&apos;re based.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <Textarea className="w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400 min-h-[60px]" />
                </div>
              </div>
            </div>

            {/* Link */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="lg:w-1/2">
                  <h2 className="text-lg font-medium mb-2">Link</h2>
                  <p className="text-sm text-slate-400">
                    Add a link to your personal website or portfolio.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <Textarea className="w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400 min-h-[60px]" />
                </div>
              </div>
            </div>

            {/* Hide Profile Picture */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="lg:w-1/2">
                  <h2 className="text-lg font-medium mb-2">
                    Hide Profile Picture
                  </h2>
                </div>
                <div className="lg:w-1/2">
                  <Input
                    defaultValue="XBEAST's Ghosty"
                    className="w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Generation complete sound */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="lg:w-1/2">
                  <h2 className="text-lg font-medium mb-2">
                    Generation complete sound
                  </h2>
                  <p className="text-sm text-slate-400">
                    Plays a satisfying sound notification when a generation is
                    finished.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <RadioGroup defaultValue="first">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="first"
                        id="first"
                        className="border-slate-600 text-[#7C3AED] data-[state=checked]:bg-[#7C3AED] data-[state=checked]:border-[#7C3AED]"
                      />
                      <label
                        htmlFor="first"
                        className="text-sm text-white cursor-pointer"
                      >
                        First Generation
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="always"
                        id="always"
                        className="border-slate-600 text-[#7C3AED] data-[state=checked]:bg-[#7C3AED] data-[state=checked]:border-[#7C3AED]"
                      />
                      <label
                        htmlFor="always"
                        className="text-sm text-white cursor-pointer"
                      >
                        Always
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="never"
                        id="never"
                        className="border-slate-600 text-[#7C3AED] data-[state=checked]:bg-[#7C3AED] data-[state=checked]:border-[#7C3AED]"
                      />
                      <label
                        htmlFor="never"
                        className="text-sm text-white cursor-pointer"
                      >
                        Never
                      </label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        );

      case "labs":
        return (
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold mb-2">Labs</h1>
            <p className="text-slate-400 mb-6 lg:mb-8">
              These are experimental features, that might be modified or
              removed.
            </p>

            <div className="flex justify-between">
              <div>
                <h1 className="text-xl lg:text-xl font-semibold mb-2">
                  GitHub Branch Switching
                </h1>
                <p className="text-slate-400 mb-6">
                  Select the branch to make edits to in your GitHub repository.
                </p>
              </div>
              <Switch
                id="branch-toggle"
                defaultChecked
                className="scale-135 data-[state=checked]:bg-[#411D7E] bg-slate-200 me-5 cursor-pointer"
              />
            </div>
          </div>
        );

      case "github":
        return (
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold mb-2">GitHub</h1>
            <p className="text-slate-400 mb-6 lg:mb-8">
              Sync your project 2-way with GitHub to collaborate at source.
            </p>

            <div className="flex justify-between">
              <div>
                <h1 className="text-xl lg:text-xl font-semibold mb-2">
                  Connected Account
                </h1>
                <p className="text-slate-400 mb-6">
                  Add your GitHub account to manage connected organizations.
                </p>
              </div>
              <Button className="cursor-pointer p-5 rounded-full bg-[#D9D9D9] hover:bg-[#848484] text-black">
                <GithubIconBlack className="!h-5 !w-5" />
                Connect GitHub
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent
        className="w-[95%] max-w-full h-[90vh] lg:w-[88rem] lg:max-w-none lg:h-[80vh] p-0 bg-slate-900 border-slate-700 rounded-3xl overflow-hidden font-[family-name:var(--font-poppins)] [&>button.absolute.right-4.top-4]:hidden"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="border border-slate-700 rounded-3xl w-full">
          <VisuallyHidden>
            <DialogTitle>Workspace Settings</DialogTitle>
          </VisuallyHidden>

          <DialogClose asChild>
            <button
              className="cursor-pointer absolute top-4 right-4 text-white hover:text-black transition-colors p-2 rounded-full bg-slate-700 hover:bg-slate-600"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </DialogClose>

          <div className="flex flex-col lg:flex-row h-full">
            {/* Sidebar */}
            <div className="w-full lg:w-64 bg-slate-800 border-b lg:border-b-0 lg:border-r border-slate-700 p-4 lg:p-6 overflow-y-auto">
              <div className="mt-0 sm:mt-18 space-y-4 lg:space-y-6">
                {/* Workspace Section */}
                <div>
                  <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">
                    Workspace
                  </h3>
                  <div className="space-y-2">
                    <div
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                        activeSection === "workspace"
                          ? "bg-slate-700 text-white"
                          : "text-slate-300 hover:bg-slate-700"
                      }`}
                      onClick={() => setActiveSection("workspace")}
                    >
                      <div className="bg-[#4C1AA2] p-2 lg:p-3 rounded-lg">
                        <GhostWink className="h-3 w-3" />
                      </div>
                      <span className="text-sm truncate">
                        XBEAST&apos;s Ghosty
                      </span>
                    </div>
                    <div
                      className={`ms-1 sm:ms-2 flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                        activeSection === "people"
                          ? "bg-slate-700 text-white"
                          : "text-slate-300 hover:bg-slate-700"
                      }`}
                      onClick={() => setActiveSection("people")}
                    >
                      <PeopleIcon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">People</span>
                    </div>
                    <div
                      className={`ms-1 sm:ms-2 flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                        activeSection === "billing"
                          ? "bg-slate-700 text-white"
                          : "text-slate-300 hover:bg-slate-700"
                      }`}
                      onClick={() => setActiveSection("billing")}
                    >
                      <BillingIcon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">Plans & Billing</span>
                    </div>
                  </div>
                </div>

                {/* Account Section */}
                <div>
                  <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">
                    Account
                  </h3>
                  <div className="space-y-2">
                    <div
                      className={`ms-1 sm:ms-2 flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                        activeSection === "profile"
                          ? "bg-slate-700 text-white"
                          : "text-slate-300 hover:bg-slate-700"
                      }`}
                      onClick={() => setActiveSection("profile")}
                    >
                      <ProfileIcon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">XBEAST</span>
                    </div>
                    <div
                      className={`ms-1 sm:ms-2 flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                        activeSection === "labs"
                          ? "bg-slate-700 text-white"
                          : "text-slate-300 hover:bg-slate-700"
                      }`}
                      onClick={() => setActiveSection("labs")}
                    >
                      <LabIcon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">Labs</span>
                    </div>
                  </div>
                </div>

                {/* Integrations Section */}
                <div>
                  <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">
                    Integrations
                  </h3>
                  <div className="space-y-2">
                    <div
                      className={`ms-1 sm:ms-2 flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                        activeSection === "github"
                          ? "bg-slate-700 text-white"
                          : "text-slate-300 hover:bg-slate-700"
                      }`}
                      onClick={() => setActiveSection("github")}
                    >
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span className="text-sm">GitHub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="mt-0 sm:mt-22 flex-1 p-4 lg:p-8 bg-slate-900 text-white overflow-y-auto">
              {renderMainContent()}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
