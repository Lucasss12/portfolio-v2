import React from "react";

export default function services() {

   const servicesOffered = [
      "+ Création de sites web",
      "+ Refonte de sites web",
      "+ Conception de maquette figma",
      "+ Amélioration de maquette figma",
      "+ UI/UX Design",
      "+ Optimisation des performances web"
   ];

  return (
    <div className="sm:mt-20 mt-12">
      <div>
        <h3 className="text-xl font-medium mb-4 text-black">
          Mes services
        </h3>

         <ul className="text-secondaryText grid sm:grid-cols-2 grid-cols-1 gap-4">
           {servicesOffered.map((service, index) => (
             <li key={index} className="flex items-center">
               <span>{service}</span>
               </li>
             ))}
         </ul>
      </div>
    </div>
  );
}
