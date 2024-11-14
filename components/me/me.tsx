import Image from "next/image";
import React from "react";

export default function me() {
  return (
    <div id='about' className="sm:mt-20 mt-12 text-secondaryText">
      <h3 className="text-xl font-medium mb-4 text-black">Qui suis-je ?</h3>
      <p>
        Bonjour 👋, moi c’est Lucas, développeur web de 22 ans. <br/>
        Après des études en réseaux informatiques, je me suis intéressé au monde du code. 
        J&apos;ai donc décidé de poursuivre dans ce domaine en rejoignant <span className="underline text-black">The Hacking Project</span>,
         un bootcamp intensif de 6 mois pour apprendre les bases du code.
      </p>

      <br />

      <p>
        Après avoir validé mon bootcamp, j&apos;ai continué à me former en
        autodidacte sur des principes et technologies plus avancés comme {""}
        <span className="underline text-black">Next.js</span>, <span className="underline text-black">l&apos;UI/UX </span> ou encore <span className="underline text-black">Figma</span>. C&apos;est à ce moment-là que j&apos;ai
        choisi de me spécialiser dans le développement <span className="underline text-black">front-end</span> et de me lancer
        dans le freelancing.
      </p>

      <a href="/CV | Lucas Méné.pdf" download="CV | Lucas Méné.pdf" className="mt-2 w-fit flex items-center py-1 px-2 rounded-md bg-mainGrey button-inner-shadow-sm text-white text-sm hover:-translate-y-1 transform transition duration-200">
        CV
        <Image width={16} height={16} src="/icons/download.svg" alt="Download" className="ml-1"/>
      </a>
    </div>
  );
}
