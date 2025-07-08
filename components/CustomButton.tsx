import * as React from "react";
import { GhostWink } from "@/components/Icon";

function CustomButton({
  className,
  children,
  ...props
}: React.ComponentProps<"button"> & { children: React.ReactNode }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl text-white text-sm font-medium px-4 py-2 transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      style={{
        background: "radial-gradient(circle, #3B82F6, #7C3AED)",
      }}
      {...props}
    >
      <GhostWink className="w-5 h-5" />
      {children}
    </button>
  );
}

export default CustomButton;
