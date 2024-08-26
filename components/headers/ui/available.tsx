import React from "react";

export default function Available() {
  return (
    <div className="flex justify-center items-center px-3 py-1.5">
      <span className="relative flex h-2.5 w-2.5 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-greenAccent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-greenAccent"></span>
      </span>
      <p className="text-secondaryText">Disponible</p>
    </div>
  );
}