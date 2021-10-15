/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';

const Card = ({ id, img, name, desc, github, action }) => {
  return (
    <div className="col" key={id}>
      <div className="card code2 shadow-sm" id={id}>
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={name}
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          src={img}
        ></img>

        <div className="card-body">
          <h2 className="card-text">{name}</h2>
          <p className="card-text">{desc}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                role="button"
                className="btn-sm code-card-btn m-1"
                href={github}
              >
                See it in GitHub
              </a>
              <a
                role="button"
                className="btn-sm code-card-btn m-1"
                href={action}
              >
                See it in action!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
