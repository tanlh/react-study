import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  return (
    <div className="Output">
      <p>{props.username}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default UserOutput;
