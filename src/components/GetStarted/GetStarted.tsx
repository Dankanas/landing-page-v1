import React, { FC } from "react";
import GetStartedContent from "./components/GetStartedContent";
import GetStartedVideo from "./components/GetStartedVideo";

import "./GetStarted.scss";

const GetStarted: FC = () => {
  const className = "get-started";
  return (
    <div className={className} id={className}>
      <div className={`${className}_container`}>
        <GetStartedContent />
        <GetStartedVideo />
      </div>
    </div>
  );
};

export default GetStarted;
