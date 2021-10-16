import React from 'react';

const About = () => {
  return (
    <div className="p-4">
      <p className="col-md-8 mb-5 fs-8">
        As a burgeoning full stack developer, I am eager to test my new skills
        in the workplace. I had a fantastic time completing SMU's web developer
        bootcamp. I've learned everything from HTML, CSS, and JavaScript to
        fully implementing PWA's, using MySQL, GraphQL, and MongoDB. I even have
        a few React and MERN apps under my belt. I hope to use my new skills to
        help my community. All throughout my adult life, every time I've held a
        job I've found the greatest satisfaction in helping others. I also take
        great pleasure in solving problems and thinking outside the box. No
        matter where I go or what I do, I know I'll keep these traits in my
        personal life, but if I could integrate them into my work life it would
        be a dream come true.
      </p>
      <a
        className="code-card-btn btn-lg m-1"
        type="button"
        href="https://github.com/wijeremy"
      >
        View my GitHub
      </a>
      <a
        className="code-card-btn btn-lg m-1"
        type="button"
        href="https://www.linkedin.com/in/jeremy-williams-5a04a385/"
      >
        See my LinkedIn
      </a>
    </div>
  );
};

export default About;
