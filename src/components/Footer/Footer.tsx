import React, { FC } from "react";
import { Link as LinkS } from "react-scroll";
import { useSelector } from "react-redux";
import classNames from "classnames";

import Icon from "../Icon";

import { ApplicationState } from "../../store/types";
import "./Footer.scss";

const Footer: FC = () => {
  const className = "footer";
  const isSidebarOpen = useSelector(
    (state: ApplicationState) => state.isSidebarOpen
  );
  const classNameFooter = classNames(className, {
    "sidebar-open": isSidebarOpen,
  });
  return (
    <div className={classNameFooter}>
      <LinkS
        to="hero"
        spy={true}
        smooth={true}
        offset={-70}
        className={`${className}_logo`}
      >
        <span className={`${className}_logo_style`}>OTM</span>
      </LinkS>
      <div className={`${className}_footerwrap`}>
        <div>
          <div className={`${className}_title`}>Explore</div>
          <ul className={`${className}_menu`}>
            <LinkS to="about" spy={true} smooth={true}>
              <li className={`${className}_menu_item`}>About</li>
            </LinkS>
            <LinkS to="discover" spy={true} smooth={true}>
              <li className={`${className}_menu_item`}>Discover</li>
            </LinkS>
            <LinkS to="services" spy={true} smooth={true}>
              <li className={`${className}_menu_item`}>Services</li>
            </LinkS>
            <LinkS to="get-started" spy={true} smooth={true}>
              <li className={`${className}_menu_item`}>Get Started</li>
            </LinkS>
          </ul>
        </div>
        <div className={`${className}_contacts`}>
          <div className={`${className}_wrapper`}>
            <div className={`${className}_title`}>Visit</div>
            <div className={`${className}_p`}>Vilnius, Lithuania</div>
            <div className={`${className}_p`}>A. Vienuolio g. 8</div>
            <div className={`${className}_p`}>Postcode: LT-69420</div>
          </div>

          <div className={`${className}_wrapper`}>
            <div className={`${className}_title`}>Contacts</div>
            <div className={`${className}_p`}>+37064628938</div>
            <div className={`${className}_p`}>Algirdas Strelciunas</div>
            <div className={`${className}_p`}>Front-end Developer</div>
          </div>

          <div className={`${className}_wrapper`}>
            <div className={`${className}_title`}>Legal</div>
            <a
              className={`${className}_link`}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <div className={`${className}_p`}>Terms and conditions</div>
            </a>
            <a
              className={`${className}_link`}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <div className={`${className}_p`}>Privacy</div>
            </a>
          </div>
          <div className={`${className}_wrapper_social`}>
            <div className={`${className}_icon`}>
              <a href="http://www.facebook.com/dankanas1/">
                <Icon name="facebook" />
              </a>
            </div>
            <div className={`${className}_icon`}>
              <a href="https://www.instagram.com/dankanas.maklaudas/">
                <Icon name="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${className}_note`}>OTM 2022 &#169;</div>
    </div>
  );
};

export default Footer;
