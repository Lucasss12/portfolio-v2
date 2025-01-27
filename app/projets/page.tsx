import { useMemo } from "react";
import Link from "next/link";

import CardInfo from "@/components/recentWork/ui/cardInfo";
import projets from "@/content/projets.json";
import { SkeletonImage } from "../../components/ui/skeletonImage";

export const metadata = {
  title: "Lucas Méné • Projets",
  description: "Lucas Méné • Découvrez mes projets, sites web, maquettes figma et bien plus encore.",
};

export default function Projets() {
  const sortedProjets = useMemo(() => {
    return projets.sort((a, b) => b.id - a.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projets]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mx-auto mx-5 max-w-screen-lg min-h-[1000px]">
      {sortedProjets.map((project) => (
        <Link href={project.link} key={project.id}
          className="p-3 rounded-[20px] border border-neutral-200 border-opacity-70 shadow-sm w-fit bg-white hover:bg-bgCardWork">
          
          <div className="overflow-hidden rounded-lg relative">
            <SkeletonImage src={project.image} alt={project.title} width={600} height={400} hover={true} />
          </div>

          <h3 className="text-lg text-secondaryText mt-1">{project.title}</h3>

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
