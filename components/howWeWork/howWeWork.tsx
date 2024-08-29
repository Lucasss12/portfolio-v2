import { HoverEffect } from "../ui/card-hover-effect";

export default function howWeWork() {
  return (
    <div className="sm:mt-20 mt-12 mb-44">
      <h3 className="text-xl font-medium mb-4">Comment je travail ?</h3>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Communication",
    description:"Ensemble, nous plongeons au cœur de vos objectifs et vos besoins pour comprendre pleinement votre vision et créer un projet sur mesure qui vous ressemble.",
    icon : "/icons/messages.svg",
  },
  {
    title: "Développement",
    description:"Toutes les informations en main, je commence à travailler sur votre projet et vous fais des comptes rendus réguliers pour vous donner une visibilité clair sur l'avancement du projet. et m'assure que mon travail suit toujours votre vision.",
    icon : "/icons/square-terminal.svg",
  },
  {
    title: "Livraison",
    description:"Nous procédons ensemble à une vérification complète du projet pour s'assurer qu'il répond à toutes vos exigences. J'apporte les ajustements nécessaires pour garantir votre satisfaction totale. Votre projet est finalisé et livré ! Je reste disponible pour toute question ou pour accompagner l'évolution future de votre site web.",
    icon : "/icons/package.svg",
  },
];
