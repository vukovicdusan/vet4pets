import { useState } from "react";

const useAccordion = () => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  const accordionHandler = (accordionRef) => {
    !accordionIsOpen ? setAccordionIsOpen(true) : setAccordionIsOpen(false);

    if (accordionRef.current.style.maxHeight) {
      accordionRef.current.style.maxHeight = null;
    } else {
      accordionRef.current.style.maxHeight =
        accordionRef.current.scrollHeight + "px";
    }
  };

  return [accordionIsOpen, accordionHandler];
};

export default useAccordion;
