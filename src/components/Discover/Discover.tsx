import React, { FC } from "react";
import AboutImage from "../About/components/AboutImage";
import DiscoverContent from "./components/DiscoverContent";
import MusicPlayer from "./components/MusicPlayer";
import Button from "../Button";

import "./Discover.scss";
import { audioData } from "../../constants/musicData";

const Discover: FC = () => {
  const className = "discover";

  return (
    <div className={className} id={className}>
      <div className={`${className}_container`}>
        <div className={`${className}_element1`}>
          <MusicPlayer data={audioData} />{" "}
          <div className={`${className}_button`}>
            <Button name={"Tell me more!"} />
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
