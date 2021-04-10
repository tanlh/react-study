import React, { Component } from "react";
import hoistNonReactStatic from "hoist-non-react-statics";

const withAccessLog = (WrappedComponent) => {
  class WithAccessLog extends Component {
    componentDidMount() {
      console.log(
        `User access ${getDisplayName(WrappedComponent)} at ${new Date()}`
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithAccessLog.displayName = `WithAccessLog(${getDisplayName(
    WrappedComponent
  )})`;

  hoistNonReactStatic(WithAccessLog, WrappedComponent);

  return WithAccessLog;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "component";
};

export default withAccessLog;
