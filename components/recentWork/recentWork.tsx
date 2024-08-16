import React from "react";
import Link from "next/link";

import { Image } from "@nextui-org/image";

export default function recentWork() {
  return (
    <div className="sm:mt-20 mt-12 mb-96">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">Mon dernier projet</h3>

        <button className="flex items-center px-3 py-2 rounded-md border border-slate-200 bg-slate-50 bg-opacity-70 text-sm hover:-translate-y-1 transform transition duration-200">
          Mes autres projets
          <Image width={16} height={16} src="icons/chevrons-right.svg" alt="Chevron droit" className="ml-1"/>
        </button>       
      </div>

      <Link href="https://naxt.fr/" target="_blank">
        <Image isBlurred width={1200} alt="Page d'accueil de Naxt" src="images/home-page-naxt.webp" className="w-fit"/>
      </Link>

      <div>
        <Link href="https://naxt.fr/" target="_blank" className="flex items-center text-lg w-fit hover:underline">
          Naxt.fr
          <Image width={16} height={16} src="icons/link.svg" alt="Icon de lien" className="ml-1"/>
        </Link>
      </div>

      <p className="text-textGray mt-2">
        Naxt, est une plateforme e-commerce dédiée à l&apos;industrie 5.0, qui
        allie innovation et qualité avec une offre diversifiée, portée par des
        partenaires prestigieux tels que{" "}
        <Link href="https://www.sirena.it/fr/" className="underline text-black">SIRENA</Link> et {" "}
        <Link href="https://www.italplant.com/en/" className="underline text-black">ITALPLANT</Link>.
      </p>

      <div className="flex items space-x-2 mt-2">
        <p className="py-1 px-2 bg-black text-white text-xs rounded w-fit">
          Freelance
        </p>

        <p className="py-1 px-2 bg-black text-white text-xs rounded w-fit">
          E-commerce
        </p>

        <p className="py-1 px-2 bg-black text-white text-xs rounded w-fit">
          Next.js
        </p>

        <p className="py-1 px-2 bg-black text-white text-xs rounded w-fit">
          React
        </p>

        <p className="py-1 px-2 bg-black text-white text-xs rounded w-fit">
          Tailwind
        </p>
      </div>


      <div className="flex justify-start mt-4"> 
        <button className="flex items-center px-3 py-2 rounded-md border border-slate-200 bg-slate-50 bg-opacity-70 text-sm hover:-translate-y-1 transform transition duration-200">
          En savoir plus
          <Image width={16} height={16} src="icons/chevrons-right.svg" alt="Chevron droit" className="ml-1"/>
        </button>

      </div>
    </div>
  );
}
