import React from "react";

import Available from "./available";
import ButtonsInfos from "./buttonsInfos";
import PulsatingButton from "@/components/magicui/pulsating-button";

export default function description() {
  return (
    <div className="mt-5 w-full">
      <div className="flex items-end justify-between mb-5">
        <h1 className="text-2xl font-medium">Lucas Méné</h1>
        <Available />
      </div>

      <p className="text-textGray">
        Bonjour 👋 je suis développeur web <span className="text-black underline">front-end.</span> {" "}
        J&apos;imagine et design votre site avec
        <ButtonsInfos text="figma" svg="/icons/figma.svg" url="https://www.figma.com/fr-fr/" />
        puis le développe avec
        <ButtonsInfos text="react" svg="/icons/react.svg" url="https://fr.react.dev/" rotate />
        ou
        <ButtonsInfos text="next" svg="/icons/next.svg" url="https://nextjs.org/" />.
        Tout sa combiné à 
        <ButtonsInfos text="tailwind" svg="/icons/tailwind.svg" url="https://tailwindcss.com/" />
        pour offrir une expérience utilisateur fluide et moderne.
      </p>

      <div className='mt-4'>
        <PulsatingButton>Réserver un appel</PulsatingButton>
      </div>
    </div>
  );
}
