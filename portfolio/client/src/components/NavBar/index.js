import React from 'react';

const Nav = () => {
  const styles = {
    bright: {
      color: '#49fb35',
    },
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark code">
      <div className="container-fluid code">
        <a className="navbar-brand code-link" href="/">
          Jeremy Williams
        </a>
        <button
          className="navbar-toggler code"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse code" id="navbarNav">
          <ul className="navbar-nav code">
            <li className="nav-item code">
              <a
                className="nav-link code-link"
                href="#about"
                style={styles.bright}
              >
                About
              </a>
            </li>
            <li className="nav-item code-link">
              <a className="nav-link code" href="#code" style={styles.bright}>
                Code
              </a>
            </li>
            <li className="nav-item code-link">
              <a
                className="nav-link code"
                href="#information"
                style={styles.bright}
              >
                Information
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
