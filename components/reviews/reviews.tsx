import React from "react";
import ReviewCard from "./ui/reviewCard";

interface Review {
  text: string;
  name: string;
  title: string;
  imageSrc?: string;
}

const reviewsData: Review[] = [
  {
    text: "Ayant travaillé en équipe avec Lucas sur ce projet, je témoigne de son sérieux et de ses compétences professionnelles. Je recommande.",
    name: "Yann G.",
    title: "Développeur Front-end",
    imageSrc: "/images/yannG-pfp.webp",
  },
  {
    text: "Superbe communication et travail correspondant parfaitement aux attentes.",
    name: "Jaccomo D.",
    title: "Développeur Full-stack",
    imageSrc: "/images/jaccomoD-pfp.webp",
  },
  {
    text: "Lucas est un développeur compétent et fiable. Ayant eu l'opportunité de travailler avec lui, je le recommande sans hésitation pour son expertise technique et son engagement envers la réussite des projets.",
    name: "Lucas O.",
    title: "Développeur Full-stack",
    imageSrc: "/images/lucasO-pfp.webp",
  },
  {
    text: "Je recommande Lucas qui dispose à la fois de grandes qualités techniques et humaines. Lucas a mené la partie frontend de notre MVP avec succès et efficacité. Lucas est très fiable dans le travail et dans le suivi.",
    name: "Benoît R.",
    title: "Capeo",
  },
];

const Reviews: React.FC = () => {
  return (
    <div className="sm:mt-20 mt-12">
      <h3 className="text-xl font-medium mb-4 text-black">Témoignages</h3>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
        {reviewsData.map((review, index) => (
          <ReviewCard
            key={index}
            text={review.text}
            name={review.name}
            title={review.title}
            imageSrc={review.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
