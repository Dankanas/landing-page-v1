import React, { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { ApplicationState } from "../../store/types";
import GetStartedContent from "./components/GetStartedContent";
import GetStartedVideo from "./components/GetStartedVideo";

import "./GetStarted.scss";

const GetStarted: FC = () => {
  const className = "get-started";
  const isSidebarOpen = useSelector((state: ApplicationState) => state.isSidebarOpen);
  const classNameGetStarted = classNames(className, {"sidebar-open" : isSidebarOpen });
  return (
    <div className={classNameGetStarted} id={className}>
      <div className={`${className}_container`}>
        <GetStartedContent />
        <GetStartedVideo />
      </div>
    </div>
  );
};

export default GetStarted;
