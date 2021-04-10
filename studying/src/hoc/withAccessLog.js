import React from "react";

const withAccessLog = (WrappedComponent) => {
  console.log(
    `User access ${getDisplayName(WrappedComponent)} at ${new Date()}`
  );
  return (props) => <WrappedComponent {...props} />;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "component";
};

export default withAccessLog;
