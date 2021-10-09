import React from 'react';

const Footer = () => {
  const styles = {
    bright: {
      color: '#49fb35',
    },
  };
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center pb-3 mb-3">
        <li className="nav-link code-link">
          <a href="/" className="nav-link px-2 code-link" style={styles.bright}>
            Home
          </a>
        </li>
        <li className="nav-link code-link">
          <a
            href="https://github.com/wijeremy"
            className="nav-link px-2 code-link"
            style={styles.bright}
          >
            GitHub
          </a>
        </li>
        <li className="nav-link code-link">
          <a
            href="https://www.linkedin.com/in/jeremy-williams-5a04a385/"
            className="nav-link px-2 code-link"
            style={styles.bright}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
