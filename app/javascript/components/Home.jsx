import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <img
          src="https://camo.githubusercontent.com/ef0e74c973c2ef9f5045c359a1a4f3ec1b3b4d71/687474703a2f2f77657465616d73746576652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f30362f7371756164736e61705f736d616c6c65722e706e67"
          alt={`squadsnap logo`}
          className="img-rounded center-block"
        />
      <div className="container secondary-color">
        <br />
        <p className="lead" align="center">
          The #2 sports team management app that makes communication and organization a breeze.
        </p>
        <hr className="my-4" />
        <Link
          to="/squads"
          className="btn btn-lg custom-button center-block"
          role="button"
        >
          View Squads
        </Link>
      </div>
    </div>
  </div>
);
