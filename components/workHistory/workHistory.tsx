import React from "react";

const works = [
  {
    company: "Naxt",
    position: "UI/UX - front-end",
    date: "2023 - 2024",
  },
  {
    company: "SUZUKI",
    position: "Front-end",
    date: "2023 - 2023",
  },
  {
    company: "LessonSharing",
    position: "Formateur React",
    date: "2023 - 2023",
  },
  {
    company: "Truffières Saint Martin",
    position: "Développeur fullstack",
    date: "2022 - 2022",
  },
];

export default function WorkHistory() {
  return (
    <div className="sm:mt-20 mt-12 mb-44">
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
