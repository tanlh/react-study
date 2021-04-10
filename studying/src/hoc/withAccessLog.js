import React from "react";

const withAccessLog = (WrappedComponent, componentName = "component") => {
  console.log(`User access ${componentName} at ${new Date()}`);
  return (props) => <WrappedComponent {...props} />;
};

export default withAccessLog;
