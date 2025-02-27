'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type FAQ = {
  question: string;
  answer: string;
};

const faqsData: FAQ[] = [
  {
    question: "Quel type de site web puis-je créer ?",
    answer:
      "Je peux créer tout type de sites web : des sites vitrines, des blogs, des sites e-commerce, des landing pages, des portfolios, et bien plus encore.",
  },  
  {
    question: "Quel type de maquette Figma puis-je créer ?",
    answer:
      "Je peux designer des maquettes Figma pour différents types de projets : sites vitrines, blogs, e-commerce, landing pages, portfolios, et bien plus encore.",
  },  
  {
    question: "Comment je calcule mes tarifs ?",
    answer:
      "Je calcule mes tarifs en fonction de deux critères principaux : la complexité du projet et le temps nécessaire à sa réalisation.",
  },
  {
    question: "Puis-je avoir des facilités de paiement ?",
    answer:
      "Absolument, selon le projet, je propose des solutions de paiement adaptées, comme des paiements échelonnés pour faciliter la gestion de votre budget.",
  },
  {
    question: "Quelle est la durée moyenne d'un projet ?",
    answer:
      "La durée d'un projet varie énormément d'un projet à l'autre. En moyenne, mes projets sont réalisés en 15 à 60 jours.",
  },
];


export default function FAQs() {
  return (
    <div className="sm:mt-20 mt-12">
      <h3 className="text-xl font-medium mb-4 text-black">Mon dernier projet</h3>
      {faqsData.map((faq: FAQ, index: number) => (
        <AccordionItem key={index} faq={faq} isLast={index === faqsData.length - 1} />
      ))}
    </div>
  );
}

type AccordionItemProps = {
  faq: FAQ;
  isLast: boolean;
};

function AccordionItem({ faq, isLast }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className={`${isLast ? '' : 'border-b border-neutral-200'}`}>
      <button className="flex justify-between w-full py-5" onClick={() => setIsOpen(!isOpen)}>
        {faq.question}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}>
          <Image width={16} height={16} src="icons/cross.svg" alt="Croix" />
        </motion.span>
      </button>
      
      <motion.div
        layout
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden max-h-40">
        <p className="pb-4 text-secondaryText">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

