import React from "react";
import Link from "next/link";
import {Image} from "@nextui-org/image";

import CardInfo from "./ui/cardInfo";

export default function recentWork() {
  return (
    <div className="sm:mt-20 mt-12">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-medium">Mon dernier projet</h3>

        <Link href="/projets" className="flex items-center py-1 px-2 rounded-md bg-black text-white text-sm hover:-translate-y-1 transform transition duration-200">
          Mes autres projets
          <Image width={16} height={16} src="/icons/chevrons-right.svg" alt="Chevron droit" className="ml-1"/>
        </Link>
      </div>

      <Link href="https://naxt.fr/" target="_blank">
        <div className="p-3 rounded-[20px] border border-slate-200 border-opacity-70 shadow-sm w-fit bg-bgCardWork">
          <Image alt="Page d'accueil de Naxt" src="/images/home-page-naxt.webp" className="border border-slate-200 border-opacity-100 w-fit rounded-lg shadow-sm"/>

          <div className="flex justify-between items-center mt-2">
            <span className="flex items-center text-lg w-fit">
              Naxt.fr
            </span>

            <p className="text-sm text-secondaryText text-opacity-65">Nov. 2023 - Oct. 2024</p>
          </div>

          <p className="text-secondaryText">UI/UX - Front-end</p>

          <div className="flex flex-wrap items mt-1">
            <CardInfo title="E-commerce" />
            <CardInfo title="React" />
            <CardInfo title=" Next.js" />
            <CardInfo title="Tailwind" />
          </div>
        </div>
      </Link>
    </div>
  );
}
