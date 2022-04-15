import React, { Fragment } from "react";
import "./notfoundStyle.css";

export const NotFound = () => {
  return (
    <Fragment>
      <div className="container m-t-20">
        <div className="notfoundWrapper">
          <h2 className="x-large text-danger">
            <i className="fa fa-exclamation-triangle"></i> Page Not Found
          </h2>
          <p className="large">Sorry, this page does not exist</p>
        </div>
      </div>
    </Fragment>
  );
};
