import * as React from "react";

function CustomButton2({
  className,
  children,
  ...props
}: React.ComponentProps<"button"> & { children: React.ReactNode }) {
  return (
    <button
      className={`cursor-pointer border-2 border-[#4C1AA2] text-[#7C3AED] inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium px-10 py-2 transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton2;
