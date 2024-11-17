import Image from "next/image";
import React from "react";

type ReviewCardProps = {
   text: string;
   name: string;
   title: string;
   imageSrc?: string;
   };

export default function ReviewCard({ text, name, title, imageSrc }: ReviewCardProps
) {
  return (
    <div className="p-4 rounded-xl bg-bgCardWork hover:bg-neutral-100 shadow-sm">
      <p>{text}</p>
      <div className="flex justify-start items-center mt-2">
        {imageSrc ? (
          <Image
            width={36}
            height={36}
            alt={`Photo ${name}`}
            src={imageSrc}
            className="rounded-full mr-2"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-blue-300 mr-2"></div> 
        )}
        <div className="flex flex-col justify-center items-start">
          <h6 className="font-medium text-black">{name}</h6>
          <p className="text-xs text-secondaryText">{title}</p>
        </div>
      </div>
    </div>
  );
}
