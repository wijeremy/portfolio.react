import React from 'react';
import About from '../About';
import Code from '../Code';
import Information from '../Information';

const AccordionButton = ({ header, id }) => {
  const getContent = () => {
    switch (header) {
      case 'About':
        return <About />;
      case 'Code':
        return <Code />;
      case 'Information':
        return <Information />;
      default:
        return <></>;
    }
  };
  return (
    <>
      <div className="accordion-item">
        <h1 className="accordion-header" id={`flush-heading${id}`}>
          <button
            className="accordion-button collapsed code-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${id}`}
            aria-expanded="false"
            aria-controls={`flush-collapse${id}`}
          >
            {header}
          </button>
        </h1>
        <div
          id={`flush-collapse${id}`}
          className="accordion-collapse collapse"
          aria-labelledby={`flush-heading${id}`}
          data-bs-parent="#accordion"
        >
          <div className="p-5 mb-4 rounded-3 code" id={header}>
            {getContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionButton;
