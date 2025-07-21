"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/actions/auth";
import { GhostIcon, GoogleIcon, GithubIcon } from "@/components/Icon";

const Page = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <GhostIcon className="w-12 h-12 mb-3" />
          <h1 className="text-2xl font-semibold text-white mb-6">Login</h1>
          <div className="space-y-4 text-white">
            <Button
              variant="outline"
              className="cursor-pointer w-full bg-[#414653] border-none p-6 rounded-lg hover:bg-[#6e7483] hover:text-white"
              onClick={() => login("google")}
            >
              <span className="flex items-center justify-center gap-2">
                <GoogleIcon />
                Continue with Google
              </span>
            </Button>
            <Button
              variant="outline"
              className="cursor-pointer w-full bg-[#414653] border-none p-6 rounded-lg hover:bg-[#6e7483] hover:text-white"
              onClick={() => login("github")}
            >
              <span className="flex items-center justify-center gap-2">
                <GithubIcon />
                Continue with GitHub
              </span>
            </Button>
          </div>
          <div className="flex items-center mt-4 mb-4">
            <div className="flex-grow h-px bg-[#505050]" />
            <span className="mx-4 text-[#505050] text-sm">OR</span>
            <div className="flex-grow h-px bg-[#505050]" />
          </div>
          <form className="space-y-4">
            <Input
              type="email"
              className="p-6 text-white border-[#505050]"
              placeholder="Email Address"
              required
            />
            <Input
              type="password"
              className="p-6 text-white border-[#505050]"
              placeholder="Password"
              required
            />
            <div className="flex justify-end items-center space-x-2 text-gray-400">
              <span className="underline text-sm text-[#848484]">
                Forgot Password
              </span>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#4C1AA2] hover:bg-[#4c1aa27c] mt-6"
            >
              Create Account
            </Button>
          </form>
          <p className="mt-3 text-sm text-center text-gray-400 font-[family-name:var(--font-poppins)]">
            Don&apos;t have an account?{" "}
            <Link href="/login" className="underline">
              Create Your Account
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden sm:block flex-1 bg-black/50 m-8 rounded-lg"></div>
    </div>
  );
};

export default Page;
