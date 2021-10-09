import React from 'react';

const accordionButton = ({ header, content, id }) => {
  return (
    <>
      <div class="accordion-item">
        <h1 class="accordion-header" id={`flush-heading${id}`}>
          <button
            class="accordion-button collapsed code-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${id}`}
            aria-expanded="false"
            aria-controls={`flush-collaspe${id}`}
          >
            {header}
          </button>
        </h1>
        <div
          id={`flush-collaspe${id}`}
          class="accordion-collapse collapse"
          aria-labelledby={`flush-heading${id}`}
          data-bs-parent="#accordion"
        >
          <div class="p-5 mb-4 rounded-3 code" id={header}>
            {content}
          </div>
        </div>
      </div>
    </>
  );
};
