import React from 'react';
import TypeIt from 'typeit-react';

const Nav = () => {
  const styles = {
    bright: {
      color: '#49fb35',
    },
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark code fixed pt-3">
        <div className="container-fluid code">
          <a className="navbar-brand code-link" href="/" id="me">
            <TypeIt>Jeremy Williams</TypeIt>
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
              <li className="nav-item code" key="About">
                <a
                  className="nav-link code-link"
                  href="#About"
                  style={styles.bright}
                >
                  About
                </a>
              </li>
              <li className="nav-item code-link" key="Code">
                <a className="nav-link code" href="#Code" style={styles.bright}>
                  Code
                </a>
              </li>
              <li className="nav-item code-link" key="Information">
                <a
                  className="nav-link code"
                  href="#Information"
                  style={styles.bright}
                >
                  Information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
