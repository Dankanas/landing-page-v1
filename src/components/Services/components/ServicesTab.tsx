import React, { FC } from "react";
import classNames from "classnames";

import "./ServicesTab.scss";

const ServicesTab: FC<ServiceTabProps> = ({ data }: ServiceTabProps) => {
  const className = "servicestab";
  const classNameServicesTab = classNames(className, {
    reversed: data.reversed,
    smallP: "small" === data.padding,
    bigP: "big" === data.padding
  });
  return (
    <div className={classNameServicesTab}>
      <img className={`${className}_img`} src={data.src} />
      <div className={`${className}_wrapper`}>
        <div className={`${className}_title`}>{data.title}</div>
        <div className={`${className}_p`}>{data.p}</div>
      </div>
    </div>
  );
};

export default ServicesTab;

export interface ServiceTabProps {
  data: TabProps;
}

type paddingType = "none" | "small" | "big";

export interface TabProps {
  title: string;
  p: string;
  src: any;
  reversed: boolean;
  padding: paddingType;
}
