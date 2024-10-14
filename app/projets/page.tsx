import Image from "next/image";
import Link from "next/link";

import CardInfo from "@/components/recentWork/ui/cardInfo";
import projets from "@/content/projets.json";

export const metadata = {
  title: "Lucas • Projets",
  description: "Lucas • Projets",
};

export default function Projets() {
  const sortedProjets = projets.sort((a, b) => b.id - a.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mx-auto mx-5 max-w-screen-lg">
      {sortedProjets.map((project) => (
        <Link href={project.link} key={project.id}
          className="p-4 rounded-xl bg-bgCardWork hover:bg-neutral-100 border border-slate-200 border-opacity-70">
          
          <Image
            src={project.image}
            alt={project.title}
            height={500}
            width={500}
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
