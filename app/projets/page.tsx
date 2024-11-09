import {Image} from "@nextui-org/react";
import Link from "next/link";

import CardInfo from "@/components/recentWork/ui/cardInfo";
import projets from "@/content/projets.json";

export const metadata = {
  title: "Lucas Méné • Projets",
  description: "Lucas Méné • Découvrez mes projets, sites web, maquettes figma et bien plus encore.",
};

export default function Projets() {
  const sortedProjets = projets.sort((a, b) => b.id - a.id);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mx-auto mx-5 max-w-screen-lg">
      {sortedProjets.map((project) => (
        <Link href={project.link} key={project.id}
          className="p-3 rounded-[20px] border border-slate-200 border-opacity-70 shadow-sm w-fit bg-white hover:bg-bgCardWork">
          
          <Image
            src={project.image}
            alt={project.title}
            isZoomed
            className="rounded-lg"/>

          <div className="flex justify-between items-center mt-2">
            <h3 className="text-lg mt-2">{project.title}</h3>

            <p className="text-sm text-secondaryText text-opacity-65">
              {project.date}
            </p>
          </div>

        <div className="flex items-center">
          {project.tags.map((tag) => (
            <CardInfo title={tag} key={tag} />
          ))}
        </div>
        </Link>
      ))}
    </div>
  );
}
