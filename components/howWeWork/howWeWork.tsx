import { HoverEffect } from "../ui/card-hover-effect";

export default function howWeWork() {
  return (
    <div className="sm:mt-20 mt-12">
      <h3 className="text-xl font-medium mb-4">Comment je travail ?</h3>
      <HoverEffect items={projets} />
    </div>
  );
}
export const projets = [
  {
    title: "Communication",
    description:"Ensemble, nous plongeons au cœur de vos objectifs et de vos besoins pour comprendre pleinement votre vision et créer un projet sur mesure qui vous ressemble.",
    icon : "/icons/messages.svg",
  },
  {
    title: "Développement",
    description:"Je commence à travailler sur votre projet en collaboration directe avec vous pour m'assurer que mon travail reste aligné avec votre vision.",
    icon : "/icons/square-terminal.svg",
  },
  {
    title: "Livraison",
    description:"Nous vérifions ensemble que le projet correspond à vos attentes et effectuons les dernières modifications si nécessaire.",
    icon : "/icons/package.svg",
  },
];
