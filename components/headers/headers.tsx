import React from "react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";

import Available from "./ui/available";
import Button from "../ui/button";

interface BadgeProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <Link
      {...props}
      target="_blank"
      className={`inline-flex items-center border border-neutral-200 bg-neutral-50 bg-opacity-50 text-black text-sm rounded-md p-1 leading-4 no-underline ${className}`}
    />
  );
}

export default function headers() {
  return (
    <div className="flex flex-col items-start">
      <div className="w-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-medium">Lucas Méné</h1>
          <Available />
        </div>

        <p className="mb-4 text-base text-secondaryText">
        <span className='text-xl font-medium text-black'>Développeur front-end. {" "}</span> <br/>
          {` J'imagine et design votre site avec `}
          <Badge href="https://www.figma.com/fr-fr/">
            <Image alt="Logo Figma" src="/icons/figma.svg" className="!mr-1" width="14" height="14"/>
            Figma
          </Badge>
          {` et le développe avec `}
          <Badge href="https://fr.react.dev/">
            <Image alt="Logo React" src="/icons/react.svg" className="!mr-1" width="14" height="14"/>
            React
          </Badge>
          {` et `}
          <Badge href="https://nextjs.org">
            <Image alt="Logo Next.js" src="/icons/next.svg" className="!mr-1" width="14" height="14"/>
            Next.js
          </Badge>,
          {` pour offrir à vos utilisateurs une expérience web unique et dans l'air du temps.`}
        </p>

        <div>
          <Button url="https://cal.com/lucas-mene" target="_blank" size="base">Réserver un appel</Button>
        </div>
      </div>
    </div>
  );
}
