import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "../components/Persons/Person/Person";

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
    let btnClass = "";
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePerson(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          ))}
        </div>
      );
      btnClass = classes.Red;
    }

    const paragraphClasses = [];
    if (this.state.persons.length <= 2) {
      console.log(classes.red);
      paragraphClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      paragraphClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm Le Huu Tan</h1>
        <p className={paragraphClasses.join(" ")}>
          This is my studying React app
        </p>
        <button className={btnClass} onClick={this.toggleShowPersons}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;