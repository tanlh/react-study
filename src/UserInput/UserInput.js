import React from "react";

const UserInput = (props) => {
  return (
    <input
      type="text"
      onChange={props.change}
      value={props.value}
      style={{ padding: "0.5em", border: "1px solid blue", margin: "0 auto" }}
    />
  );
};

export default UserInput;
