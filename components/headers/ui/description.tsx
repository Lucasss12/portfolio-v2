import React from "react";

import ButtonHeaders from "@/components/ui/buttonHeaders";
import Available from "./available";

export default function description() {
  return (
    <div className="mt-5 w-full">
      <div className="flex items-end justify-between mb-5">
        <h1 className="text-2xl font-medium">Lucas Méné</h1>
        <Available />
      </div>

      <p className="text-textGray">
        Bonjour 👋 je suis développeur
        <ButtonHeaders text="front-end" svg="/icons/code.svg" url="#" />.
        Je conçois et design votre site avec
        <ButtonHeaders text="figma" svg="/icons/figma.svg" url="https://www.figma.com/fr-fr/" />
        puis je le développe avec
        <ButtonHeaders text="react" svg="/icons/react.svg" url="https://fr.react.dev/" rotate />
        ou
        <ButtonHeaders text="next" svg="/icons/next.svg" url="https://nextjs.org/" />
        tout sa combiné avec 
        <ButtonHeaders text="tailwind" svg="/icons/tailwind.svg" url="https://tailwindcss.com/" />
        pour offrir un design et une expérience utilisateur fluide et moderne.
      </p>
    </div>
  );
}
