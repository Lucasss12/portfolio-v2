import React from "react";
import Link from "next/link";

import { Image } from "@nextui-org/image";

export default function recentWork() {
  return (
    <div className="mt-20 mb-96">
      <h3 className="text-xl font-medium">Mon dernier projet</h3>

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

      <div className="flex justify-center mt-4"> 
        <button className="flex items-center bg-gradient-to-t from-gradiantAccentBlue to-gradiantBlue px-10 py-2 rounded-[11px] text-white inner-shadow">
          En voir plus
          <Image width={16} height={16} src="icons/chevrons-right.svg" alt="Chevron droit" className="ml-1"/>
        </button>

      </div>
    </div>
  );
}