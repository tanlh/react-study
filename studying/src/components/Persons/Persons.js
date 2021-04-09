import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[Persons.js] shouldComponentUpdate",
      nextProps.persons !== this.props.persons
    );
    return nextProps.persons !== this.props.persons;
  }

  componentDidUpdate() {
    console.log("[Persons.js] componentDidUpdate");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
      />
    ));
  }
}

export default Persons;
