import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Link as LinkS} from "react-scroll"
import { ApplicationState } from "../../store/types";
import classNames from "classnames";

import Icon from "../Icon";
import { ToggleSidebar } from "../../store/action";

import "./Sidebar.scss";

const Sidebar: FC = () => {
const isSidebarOpen = useSelector((state : ApplicationState) => state.isSidebarOpen);
console.log(isSidebarOpen);
const className = "sidebar";
const classNameSidebar = classNames(className, {"isOpen": isSidebarOpen})
  return (
    <div className={classNameSidebar} onClick={ToggleSidebar}>
      <div className={`${className}_icon`}>
        <Icon name="close" />
      </div>
      <ul className={`${className}_menu`}>
      <LinkS to="about" spy={true} smooth={true}><li className={`${className}_menu_item`} onClick={ToggleSidebar}>About</li></LinkS>
        <LinkS to="discover" spy={true} smooth={true}><li className={`${className}_menu_item`} onClick={ToggleSidebar}>Discover</li></LinkS>
        <LinkS to="services" spy={true} smooth={true}><li className={`${className}_menu_item`} onClick={ToggleSidebar}>Services</li></LinkS>
        <LinkS to="get-started" spy={true} smooth={true}><li className={`${className}_menu_item`} onClick={ToggleSidebar}>Get Started</li></LinkS>
      </ul>
      <button className={`${className}_menu_button`} onClick={() => console.log("Pasispaude")}>Join Now!</button>
    </div>
  );
};

export default Sidebar;
