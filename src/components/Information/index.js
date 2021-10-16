import React from 'react';

const Information = () => {
  return (
    <div className="accordion-item">
      <div className="album code">
        <div className="container">
          <div className="row" id="card-holder">
            <a
              role="button"
              className="btn-sm code-card-btn m-1"
              href="https://github.com/wijeremy"
            >
              View My Github
            </a>
            <a
              role="button"
              className="btn-sm code-card-btn m-1"
              href="https://www.linkedin.com/in/jeremy-williams-5a04a385/"
            >
              View My LinkedIn
            </a>
            <a
              role="button"
              className="btn-sm code-card-btn m-1"
              href="./Jeremy-Williams-resume-tech.pdf"
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
