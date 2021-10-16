import React from 'react';
import Card from '../Card';
const projects = require('./projectData.json');

const Code = () => {
  return (
    <>
      <div className="accordion-item">
        <div className="album px-1 py-1 code">
          <div className="container">
            <div className="row justify-content-center g-3" id="card-holder">
              {projects.map((project) => {
                const { id, name, img, github, action, desc } = project;
                return (
                  <Card
                    id={id}
                    name={name}
                    img={img}
                    github={github}
                    action={action}
                    desc={desc}
                    key={id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Code;
