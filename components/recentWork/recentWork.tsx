import React from "react";
import Link from "next/link";
import { Image } from "@nextui-org/image";

import CardInfo from "./ui/cardInfo";

export default function recentWork() {
  return (
    <div className="sm:mt-20 mt-12">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-medium">Mon dernier projet</h3>

        <button className="flex items-center px-3 py-2 rounded-md bg-mainBg bg-opacity-80 text-sm hover:-translate-y-1 transform transition duration-200">
          Mes autres projets
          <Image width={16} height={16} src="icons/chevrons-right.svg" alt="Chevron droit" className="ml-1"/>
        </button>
      </div>

      <div>
        <Link href="https://naxt.fr/" target="_blank">
          <div className="p-4 rounded-xl bg-bgCardWork hover:bg-neutral-100">
            <Image width={1200} alt="Page d'accueil de Naxt" src="images/home-page-naxt.webp" className="w-fit border border-slate-200 rounded-lg shadow-sm"/>

            <div className="flex justify-between items-center mt-2">
              <span className="flex items-center text-lg w-fit hover:underline">
                Naxt.fr
                <Image width={16} height={16} src="icons/link.svg" alt="Icon de lien" className="ml-1"/>
              </span>

              <p className="text-sm text-secondaryText text-opacity-65">2023 - 2024</p>
            </div>

            <p className="text-secondaryText">UI/UX - Front-end</p>

            <div className="flex flex-wrap items mt-1">
              <CardInfo title="Freelance" />
              <CardInfo title="E-commerce" />
              <CardInfo title="React" />
              <CardInfo title=" Next.js" />
              <CardInfo title="Tailwind" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
