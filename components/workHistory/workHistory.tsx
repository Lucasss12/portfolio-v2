import React from "react";

const works = [
  {
    company: "Naxt",
    position: "UI/UX - front-end",
    date: "Nov. 2023 - Oct. 2024",
  },
  {
    company: "SUZUKI",
    position: "Front-end",
    date: "Aou. 2023 - Sep. 2023",
  },
  {
    company: "LessonSharing",
    position: "Formateur React",
    date: "Mai. 2023 - Jui. 2023",
  },
  {
    company: "Truffières Saint Martin",
    position: "Développeur fullstack",
    date: "Nov. 2022 - Déc. 2022",
  },
];

export default function WorkHistory() {
  return (
    <div className="sm:mt-20 mt-12">
      <h3 className="text-xl font-medium mb-4">Expériences</h3>
      <ul className="space-y-2">
        {works.map((work, index) => (
          <li key={index} className={`pb-2 ${index !== works.length - 1 ? "border-b border-dotted": ""}`}>
            <header className="flex justify-between items-center">
              <h4>{work.company}</h4>
              <p className="text-secondaryText text-opacity-65">{work.date}</p>
            </header>
            <p className="text-secondaryText">{work.position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
