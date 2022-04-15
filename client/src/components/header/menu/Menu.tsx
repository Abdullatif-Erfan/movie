import React from "react";
import "./menuStyle.css";
import { Link } from "react-router-dom";

const Menu = () => (
  <div className="menuWrapper">
    <div className="container">
      <div className="navigation">
        <ul>
          <li className="menu">
            <Link to="/">
              <span className="icon">
                <i className="fa fa-film"></i>
              </span>
              <span className="title">Movie</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Menu;
