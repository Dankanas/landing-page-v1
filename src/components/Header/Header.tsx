import React, { FC, useState } from "react";
import { Link as LinkS } from "react-scroll";
import classNames from "classnames";
import Icon from "../Icon";
import MenuIcon from "../Icon/components/Menu.icon";
import Logo from "../Logo";

import { ToggleSidebar } from "../../store/action";

import "./Header.scss";

const Header: FC = () => {
  const className = "header";
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  window.onscroll = () => handleScroll();
  const classNameHeader = classNames(className, {"scroll": isScrolled});
  return (
    <div className={classNameHeader}>
      <div className={`${className}_container`}>
        <Logo />
        <div className={`${className}_menu-mobile`} onClick={ToggleSidebar}>
          <Icon name="menu" />
        </div>
        <ul className={`${className}_menu`}>
          <LinkS
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            className={`${className}_menu_item`}
          >
            About
          </LinkS>
          <LinkS
            to="discover"
            spy={true}
            smooth={true}
            offset={-70}
            className={`${className}_menu_item`}
          >
            Discover
          </LinkS>
          <LinkS
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            className={`${className}_menu_item`}
          >
            Services
          </LinkS>
          <LinkS
            to="get-started"
            spy={true}
            smooth={true}
            offset={-70}
            className={`${className}_menu_item`}
          >
            Get Started
          </LinkS>
        </ul>
        <button className={`${className}_menu_button`}>Join Now!</button>
      </div>
    </div>
  );
};

export default Header;
