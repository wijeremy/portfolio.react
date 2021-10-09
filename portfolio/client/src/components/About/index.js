import React from 'react';

const About = () => {
  return (
    <div>
      <p className="col-md-8 fs-4">
        Nothing gives me greater joy than helping others and solving problems. I
        searched long and hard for a career. First I got my bachelors in Vocal
        Performance from the University of Michigan in '13. That wasn't for me;
        while I enjoyed the creativity and playfulness of being on stage, I
        found myself more stimulated by the music theory classes I was taking.
        At the same time, I knew academia wasn't for me. So I did what anyone in
        my position would do, I began a long string of odd jobs. Library clerk,
        waiter, ride-share driver, and book seller were all hats I wore at one
        time or another. But everywhere I went I realized I drew the most
        satisfaction from helping others and solving problems. Now, as a
        burgeoning web developer, I hope to find that same joy. I know there
        will be plenty of problems to solve, but I hope to use my skills to help
        my community and those around me.
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
