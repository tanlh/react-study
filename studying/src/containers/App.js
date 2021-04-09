import React, { Component } from "react";

import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "asdfasdf", name: "Max", age: 28 },
      { id: "fhsdrt", name: "Manu", age: 29 },
      { id: "3gfnfg", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const toUpdatePerson = {
      ...this.state.persons[personIndex],
    };
    toUpdatePerson.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = toUpdatePerson;

    this.setState({ persons: persons });
  };

  toggleShowPersons = () => {
    const doesShowPerson = this.state.showPersons;
    this.setState({ showPersons: !doesShowPerson });
  };

  deletePerson = (personIndex) => {
    //DON'T DO THIS, Object reference: const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePerson}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.toggleShowPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
