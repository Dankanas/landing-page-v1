import React, { FC } from "react";

import Icon from "../Icon";

import "./Button.scss";

const Button: FC<ButtonProps> = ({ name }: ButtonProps) => {
  const className = "button";

  return (
    <div className={`${className}`}>
      <div className={`${className}_p`}>{name}</div>
      <div className={`${className}_icon`}>
        <Icon name="arrow" />
      </div>
    </div>
  );
};

export default Button;

interface ButtonProps {
  name: string;
}
