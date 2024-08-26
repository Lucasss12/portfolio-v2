import React from 'react'
import Available from './ui/available'
import ToolTip from './ui/ToolTip'
import ButtonBookCall from './ui/buttonBookCall'

export default function headers() {
  return (
    <div className='flex flex-col items-start'>
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-medium">Lucas Méné</h1>
          <Available />
        </div>

        <p className="text-secondaryText mb-4">
          Bonjour 👋 je suis développeur web <span className="text-black underline">front-end.</span> {" "}
          J&apos;imagine et design votre site avec
          <ToolTip text="Figma" svg="/icons/figma.svg" url="https://www.figma.com/fr-fr/" />
          puis le développe avec
          <ToolTip text="React" svg="/icons/react.svg" url="https://fr.react.dev/" rotate />
          ou
          <ToolTip text="Next.js" svg="/icons/next.svg" url="https://nextjs.org/" />.
          Combiné à 
          <ToolTip text="Tailwind" svg="/icons/tailwind.svg" url="https://tailwindcss.com/" />
          pour offrir une expérience utilisateur fluide et moderne.
        </p>

        <p className="text-secondaryText mb-4">
          <span className='font-medium text-black '>Je design et code des sites modernes et performants. {" "}</span> <br/>
          Je combine l&apos;art design avec <ToolTip text="Figma" svg="/icons/figma.svg" url="https://www.figma.com/fr-fr/" /> 
          et la puissance du code grace à <ToolTip text="React" svg="/icons/react.svg" url="https://fr.react.dev/" rotate />
          ou bien
          <ToolTip text="Next.js" svg="/icons/next.svg" url="https://nextjs.org/" />, 
          pour offrir a vos utilisateurs une expérience fluide et moderne.
        </p>

        <div>
          <ButtonBookCall>Réserver un appel</ButtonBookCall>
        </div>
      </div>
    </div>
  )
}
