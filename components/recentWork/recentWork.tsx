import React from "react";
import Link from "next/link";
import Image from "next/image";

import CardInfo from "./ui/cardInfo";
import Button from "../ui/button";
import { SkeletonImage } from "../ui/skeletonImage";

export default function recentWork() {
  return (
    <div className="sm:mt-20 mt-12">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-medium">Mon dernier projet</h3>

        <Button url="projets" size="small">
          Mes projets
          <Image
            width={16}
            height={16}
            src="/icons/chevrons-right.svg"
            alt="Chevron droit"
            className="ml-1"/>
        </Button>

      </div>

      <Link href="https://naxt.fr/" target="_blank">
        <div>
          <div className="bg-gradient-to-tr from-blue-500 to-sky-400 p-3 rounded-2xl">
            <SkeletonImage
              src="/images/home-page-naxt.webp"
              alt="Page d'accueil de Naxt"
              width={1200}
              height={800}
              hover={false}
            />
            {/* <Image
              width={1200}
              height={800}
              alt="Page d'accueil de Naxt"
              src="/images/home-page-naxt.webp"
              className="w-fit rounded-lg shadow-sm"
            /> */}
          </div>
        </div>
      </Link>
      <div className="flex justify-between items-center mt-2">
        <Link href="https://naxt.fr/" target="_blank" className="flex items-center text-lg w-fit underline">Naxt.fr</Link>

        <p className="text-sm text-secondaryText text-opacity-65">
          Nov. 2023 - Oct. 2024
        </p>
      </div>

      <p className="text-secondaryText">UI/UX - Front-end</p>

      <div className="flex flex-wrap items mt-1">
        <CardInfo title="E-commerce" />
        <CardInfo title="React.js" />
        <CardInfo title=" Next.js" />
        <CardInfo title="Tailwind" />
      </div>
    </div>
  );
}
