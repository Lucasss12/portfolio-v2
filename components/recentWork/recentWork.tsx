import React from "react";
import Link from "next/link";
import { Image } from "@nextui-org/image";

import CardInfo from "./ui/cardInfo";

export default function recentWork() {
  return (
    <div className="sm:mt-20 mt-12 mb-32">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-medium">Mon dernier projet</h3>

        <button className="flex items-center px-3 py-2 rounded-md bg-mainBg bg-opacity-80 text-sm hover:-translate-y-1 transform transition duration-200">
          Mes autres projets
          <Image width={16} height={16} src="icons/chevrons-right.svg" alt="Chevron droit" className="ml-1"/>
        </button>
      </div>

      <div className="border p-4 rounded-xl bg-bgCardWork bg-opacity-60">
        <Link href="https://naxt.fr/" target="_blank">
          <Image width={1200} alt="Page d'accueil de Naxt" src="images/home-page-naxt.webp" className="w-fit border rounded-lg"/>
        </Link>

        <div className="flex justify-between items-center">
          <div>
            <Link href="https://naxt.fr/" target="_blank" className="flex items-center text-lg w-fit hover:underline">
              Naxt.fr
              <Image width={16} height={16}src="icons/link.svg" alt="Icon de lien"  className="ml-1"/>
            </Link>
          </div>
        </div>

        {/* <p className="text-secondaryText mt-2">
          Naxt, est une plateforme e-commerce dédiée à l&apos;industrie 5.0, qui
          allie innovation et qualité avec une offre diversifiée, portée par des
          partenaires prestigieux tels que{" "}
          <Link href="https://www.sirena.it/fr/" className="underline text-black">SIRENA</Link> et {" "}
          <Link href="https://www.italplant.com/en/" className="underline text-black">ITALPLANT</Link>.
        </p> */}

        <p className="text-secondaryText mt-2">

        </p>

        <div className="flex items space-x-2 mt-2">
          <CardInfo title="Freelance" />
          <CardInfo title="E-commerce" />
          <CardInfo title="React" />
          <CardInfo title=" Next.js" />
          <CardInfo title="Tailwind" />
        </div>

        <div className="flex justify-start mt-4">
          <button className="flex items-center px-3 py-2 rounded-md bg-mainBg bg-opacity-80 text-sm hover:-translate-y-1 transform transition duration-200">
            En savoir plus
            <Image width={16} height={16} src="icons/chevrons-right.svg" alt="Chevron droit" className="ml-1"/>
          </button>
        </div>
      </div>
    </div>
  );
}