import React, { FC, useState } from "react";

import "./JoinNow.scss";
import Button from "../Button";
import { PushForm } from "../../store/action";

const JoinNow: FC = () => {
  const className = "join-now";
  const [emailAdress, setEmailAdress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = () => {
    PushForm({
      emailAdress: emailAdress,
      firstName: firstName,
      lastName: lastName,
    });
  };
  return (
    <div className={className}>
      <div className={`${className}_wrapper`}>
        <h1 className={`${className}_title`}>Fill our application form!</h1>
        <div className={`${className}_wrapper_form`}>
          <div className={`${className}_form`}>
            <p className={`${className}_form_name`}>E-mail adress</p>
            <input
              className={`${className}_form_input`}
              type="text"
              value={emailAdress}
              onChange={(e) => setEmailAdress(e.target.value)}
            ></input>
          </div>
          <div className={`${className}_form`}>
            <p className={`${className}_form_name`}>First Name</p>
            <input
              className={`${className}_form_input`}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className={`${className}_form`}>
            <p className={`${className}_form_name`}>Last Name</p>
            <input
              className={`${className}_form_input`}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
        </div>
        <div onClick={handleSubmit}>
          <Button name="Submit!" />
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
