import React, { FC, useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import classNames from "classnames";

import Icon from "../Icon";
import Logo from "../Logo";
import { ToggleSidebar } from "../../store/action";

import routes from "../../constants/routes";
import "./Header.scss";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store/types";

const Header: FC<HeaderProps> = ({ transparent }: HeaderProps) => {
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
  const isSidebarOpen = useSelector((state : ApplicationState) => state.isSidebarOpen);
  useEffect(() => {
    window.onscroll = () => handleScroll();
    return function cleanup() {
      return null;
    };
  });
  const classNameHeader = classNames(className, {
    scroll: isScrolled,
    transparent: !transparent,
    sidebaropen: isSidebarOpen
  });
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
        <LinkR className={`${className}_menu_button`} to={routes.join}>
          Join Now!
        </LinkR>
      </div>
    </div>
  );
};

export default Header;

interface HeaderProps {
  transparent: boolean;
}
