import React, { FC } from "react";
import ServicesContent from "./components/ServicesContent";
import ServicesTab from "./components/ServicesTab";

import "./Services.scss";
import { servicesData } from "../../constants/servicesData";

const Services: FC = () => {
  const className = "services";
  return (
    <div className={className} id={className}>
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
