import React, { Fragment } from "react";
import "./headerStyle.css";
import Menu from "./menu/Menu";
const logopath = require("../../assets/images/logo.png");

const Header = () => (
  <Fragment>
    <div className="headerWrapper pt-30" data-test="header-wrapper">
      <div className="container">
        <img src={logopath} alt="Logo" />
      </div>
    </div>
    <Menu />
  </Fragment>
);

export default Header;
