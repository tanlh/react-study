import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
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
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePerson(index)}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm Le Huu Tan</h1>
        <p>This is my studying React app</p>
        <button
          style={{
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
          }}
          onClick={this.toggleShowPersons}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
