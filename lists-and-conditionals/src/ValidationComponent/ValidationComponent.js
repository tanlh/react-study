import React from "react";

const ValidationComponent = (props) => {
  let outputText = "Text too short";
  if (props.textLength > 5) {
    outputText = "Text too long";
  }

  return <p>{outputText}</p>;
};

export default ValidationComponent;
