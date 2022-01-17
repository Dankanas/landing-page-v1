import React, { FC } from "react";
import { Link as LinkS } from "react-scroll";

import Logo from "../Logo";
import Icon from "../Icon";

import "./Footer.scss";

const Footer: FC = () => {
  const className = "footer";
  const dataVisit =
    "Vilnius, Lithuania\n A. Vienuolio g. 8 \n Postcode: LT-69420";
   const redirector = (page:string) => {
       location.replace(page)
   }
  return (
    <div className={className}>
      <div className={`${className}_logo`}>
        <Logo />
      </div>
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
          <div className={`${className}_p`}>Terms</div>
          <div className={`${className}_p`}>Privacy</div>
          <div className={`${className}_p`}>Front-end Developer</div>
        </div>
        <div className={`${className}_wrapper`}>
          <div className={`${className}_icon`} >
            <a href="www.facebook.com"><Icon name="facebook" /></a>
          </div>
          <div className={`${className}_icon`}>
            <Icon name="instagram" />
          </div>
        </div>
      </div>
      <div className={`${className}_note`}>OTM 2022 &#169;</div>
    </div>
  );
};

export default Footer;
