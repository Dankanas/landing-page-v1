import React, { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { ApplicationState } from "../../store/types";
import ServicesContent from "./components/ServicesContent";
import ServicesTab from "./components/ServicesTab";

import { servicesData } from "../../constants/servicesData";
import "./Services.scss";

const Services: FC = () => {
  const className = "services";
  const isSidebarOpen = useSelector((state: ApplicationState) => state.isSidebarOpen);
  const classNameServices = classNames(className, {"sidebar-open" : isSidebarOpen });

  return (
    <div className={classNameServices} id={className}>
        <ServicesContent />
      <div className={`${className}_container`}>
          <ServicesTab data={servicesData.recording}/>
          <ServicesTab data={servicesData.mixing}/>
          <ServicesTab data={servicesData.mastering}/>
      </div>
    </div>
  );
};

export default Services;
