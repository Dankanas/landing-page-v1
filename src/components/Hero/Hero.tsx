import React, { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { Link as LinkS} from "react-scroll";

import Video from "../../assets/Video/video.mp4";
import { ApplicationState } from "../../store/types";
import Icon from "../Icon";
import Button from "../Button";

import "./Hero.scss";

const Hero: FC = () => {
  const className = "hero";
  const isSidebarOpen = useSelector((state: ApplicationState) => state.isSidebarOpen);
  const classNameHero = classNames(className, {"sidebar-open": isSidebarOpen});
  const classNameHeroWrapperOut = classNames(`${className}_wrapper_out`, {"sidebar-open": isSidebarOpen});
  return (
    <div className={classNameHero} id={className}>
      <video
        className={`${className}_video`}
        autoPlay
        muted
        loop
        src={Video}
        typeof="video/mp4"
      />
      <div className={classNameHeroWrapperOut}>
        <div className={`${className}_wrapper_in`}>
          <h1 className={`${className}_h1`}>Professional music production</h1>
          <p className={`${className}_p`}>
            We are big thinkers. We challenge the music establishment. We are
            novel and unique.{" "}
          </p>
          <p className={`${className}_p2`}>We are On The Move Studios.</p>
          <LinkS to="about" spy={true} smooth={true} offset={70}><Button name={"Get Started!"}/></LinkS>
        </div>
      </div>
    </div>
  );
};

export default Hero;
