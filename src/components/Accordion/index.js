import React from 'react';

import AccordionButton from '../AccordionButton';

const Accordion = () => {
  return (
    <div className="accordion accordion-flush code" id="accordion">
      <AccordionButton header="Konami" id="0" />
      <AccordionButton header="About" id="1" />
      <AccordionButton header="Code" id="2" />
      <AccordionButton header="Information" id="3" />
    </div>
  );
};

export default Accordion;
