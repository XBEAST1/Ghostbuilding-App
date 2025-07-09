"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsappIcon,
  ArrowIcon,
  SendIcon,
} from "@/components/Icon";

const ContactSection = () => {
  return (
    <div className="mb-10 rounded-xl p-14 max-w-[90%] mx-auto bg-[#1B2332] text-white">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <h1 className="text-5xl font-bold">Lets Connect there</h1>
        <Button className="mt-4 sm:mt-0 bg-gradient-to-r text-xl from-[#3B82F6] to-[#7C3AED] text-white !px-8 py-6 rounded-full flex items-center gap-2 w-full sm:w-auto">
          Contact Us <ArrowIcon className="!w-8 !h-8" />
        </Button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mb-10"></div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Content (50% width on md+) */}
        <div className="md:w-1/2 mt-10">
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas ipsum
            adipiscing dignissim lobortis.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <FacebookIcon className="text-white w-6 h-6 cursor-pointer" />
            <YoutubeIcon className="text-white w-6 h-6 cursor-pointer" />
            <WhatsappIcon className="text-white w-6 h-6 cursor-pointer" />
            <InstagramIcon className="text-white w-6 h-6 cursor-pointer" />
            <TwitterIcon className="text-white w-6 h-6 cursor-pointer" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="md:w-1/4">
          <h2 className="text-[#A46EFF] font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-[#A46EFF]">Home</li>
            <li className="cursor-pointer hover:text-[#A46EFF]">Community</li>
            <li className="cursor-pointer hover:text-[#A46EFF]">Enterprise</li>
            <li className="cursor-pointer hover:text-[#A46EFF]">Learn</li>
          </ul>
        </div>

        {/* Email Subscription */}
        <div className="md:w-1/4">
          <h2 className="text-[#A46EFF] font-semibold mb-4">
            Get the latest information
          </h2>
          <div className="flex items-center">
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-white border-none text-white px-4 py-2 rounded-l-lg rounded-r-none flex-1"
            />
            <Button className="bg-[#A46EFF] hover:bg-[#a36effb8] text-white px-4 py-2 rounded-r-lg rounded-l-none">
              <SendIcon />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex justify-between items-center text-sm text-gray-400">
        <p className="text-white">
          Copyright© 2025 ghostbuilder. All Rights Reserved.
        </p>
        <div className="flex gap-4 text-white">
          <span className="cursor-pointer hover:text-white">
            User Terms & Conditions
          </span>
          <span className="cursor-pointer hover:text-white">
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
