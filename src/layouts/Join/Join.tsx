import React, { FC } from "react";

import JoinNow from "../../components/JoinNow";
import Logo from "../../components/Logo";

import "./Join.scss";

const Join: FC = () => {
  const className = "join";
  return (
    <div className={className}>
      <Logo />
      <div className={`${className}_body`}>
        <JoinNow />
      </div>
    </div>
  );
};

export default Join;
