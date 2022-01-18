import React, { FC } from "react";
import { Link } from "react-router-dom";

import routes from "../../constants/routes";

import "./Logo.scss";

const Logo = () => {
  const className = "logo";
  return (
    <Link to={routes.home} className={className}>
      <span className={`${className}_style`}>OTM</span>
    </Link>
  );
};

export default Logo;
