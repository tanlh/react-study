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
    // console.log('Was clicked!');
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

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => (
            <Person name={person.name} age={person.age} />
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
