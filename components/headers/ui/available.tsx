import React from "react";

export default function Available() {
  return (
    <div className="flex justify-center items-center px-4 py-2 border border-borderGray rounded-[20px] w-fit">
      <span className="w-3 h-3 bg-greenAccent rounded-full mr-3 animate-pulse-shadow"></span>
      <p className="font-normal text-textGray">Disponible</p>
    </div>
  );
}
