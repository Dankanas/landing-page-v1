import React, { FC } from "react";
import { Link as LinkS } from "react-scroll";
import { useSelector } from "react-redux";
import classNames from "classnames";

import DiscoverContent from "./components/DiscoverContent";
import MusicPlayer from "./components/MusicPlayer";
import Button from "../Button";

import "./Discover.scss";
import { audioData } from "../../constants/musicData";
import { ApplicationState } from "../../store/types";

const Discover: FC = () => {
  const className = "discover";
  const isSidebarOpen = useSelector(
    (state: ApplicationState) => state.isSidebarOpen
  );
  const classNameDiscover = classNames(className, {
    "sidebar-open": isSidebarOpen,
  });

  return (
    <div className={classNameDiscover} id={className}>
      <div className={`${className}_container`}>
        <div className={`${className}_element1`}>
          <MusicPlayer data={audioData} />{" "}
          <div className={`${className}_button`}>
            <LinkS to="services" spy={true} smooth={true} offset={-70}>
              <Button name={"Tell me more!"} />
            </LinkS>
          </div>
        </div>
        <div className={`${className}_element2`}>
          <DiscoverContent />
        </div>
      </div>
    </div>
  );
};

export default Discover;
