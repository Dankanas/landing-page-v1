import React, { FC } from "react";
import {Link as LinkS} from "react-scroll"
import Icon from "../Icon";
import MenuIcon from "../Icon/components/Menu.icon";
import Logo from "../Logo"

import { ToggleSidebar } from "../../store/action";


import "./Header.scss";

const Header: FC = () => {
  const className = "header";

  return (
    <div className={className}>
      <div className={`${className}_container`}>
        <Logo />
        <div className={`${className}_menu-mobile`} onClick={ToggleSidebar}>
          <Icon name="menu" />
        </div>
        <ul className={`${className}_menu`}>
        <LinkS to="about" spy={true} smooth={true}><li className={`${className}_menu_item`}>About</li></LinkS>
        <LinkS to="discover" spy={true} smooth={true}><li className={`${className}_menu_item`}>Discover</li></LinkS>
        <LinkS to="services" spy={true} smooth={true}><li className={`${className}_menu_item`}>Services</li></LinkS>
        <LinkS to="get-started" spy={true} smooth={true}><li className={`${className}_menu_item`}>Get Started</li></LinkS>
        </ul>
        <button className={`${className}_menu_button`}>Join Now!</button>
      </div>
    </div>
  );
};

export default Header;
