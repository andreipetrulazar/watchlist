import React from "react";

import { Link } from "react-router-dom";  // allow to move around the nav links

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Movie 🎥 List</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">My Movie List</Link>
            </li>

            <li>
              <Link to="/watched">Watched Movies</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </header>
  );
};
