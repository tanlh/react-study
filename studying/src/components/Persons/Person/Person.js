import React, { Component } from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";

import style from "./Person.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  inputElementRef = React.createRef();
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(
      "[Person.js] context, authenticated=" + this.context.isAuthenticated
    );
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {/* <AuthContext.Consumer>
          {(context) =>
            context.isAuthenticated ? (
              <p>Authenticated!</p>
            ) : (
              <p>Please log in!</p>
            )
          }
        </AuthContext.Consumer> */}
        {this.context.isAuthenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in!</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, style.Person);
