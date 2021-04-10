import React from "react";

const withClass = (WrappedComponent, className) => (props) => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
);

export default withClass;
