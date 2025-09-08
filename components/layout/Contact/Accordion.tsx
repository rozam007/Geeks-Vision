import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { AccordionProps } from "@/types"; 

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItemId, setOpenItemId] = useState<number | null>(1);
  const[prevOpen, setPrevOpen] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setPrevOpen(openItemId);
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={openItemId === item.id}
          prevOpen={prevOpen}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
