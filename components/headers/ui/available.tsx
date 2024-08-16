import React from "react";

export default function Available() {
  return (
    <div className="flex justify-center items-center px-3 py-1.5 border border-slate-200 rounded-xl hover:-translate-y-1 transform transition duration-200 w-fit">
      <span className="w-3 h-3 bg-gradient-to-b from-green-500 via-green-400 to-greenAccent rounded-full mr-3 animate-pulse-shadow"></span>
      <p className="font-normal text-textGray">Disponible</p>
    </div>
  );
}