import React from "react";

type ButtonBookCallProps = {
  children: React.ReactNode;
};

export default function buttonBookCall({ children }: ButtonBookCallProps) {
  return (
    <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500 px-5 py-2.5 font-medium text-white">
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-500 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20"></div>
      </div>
      <div className="relative">
        <div className="translate-y-0 transition-transform duration-300 group-hover:-translate-y-[150%]">
          {children}
        </div>

        <div className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
          {children}
        </div>
      </div>
    </button>
  );
}
