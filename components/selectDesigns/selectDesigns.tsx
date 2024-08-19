import React from "react";
import { Image } from "@nextui-org/react";

export default function SelectDesign() {
  return (
    <div className="mb-44 space-y-3">
      <div className="border border-pink-400 overflow-hidden rounded-lg h-[444px]">
        <Image
          isBlurred
          src="https://placehold.co/1200x600"
          alt="NextUI Album Cover"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      <div className="flex md:flex-row flex-col space-x-0 md:space-x-3 md:space-y-0 space-y-3">
        <div className="border border-pink-400 overflow-hidden rounded-lg h-[444px]">
          <Image
            isBlurred
            src="https://placehold.co/1600x1000"
            alt="NextUI Album Cover"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="border border-pink-400 overflow-hidden rounded-lg h-[444px]">
          <Image
            isBlurred
            src="https://placehold.co/1200x1000"
            alt="NextUI Album Cover"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
