import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${(props) => (props.$alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 0.5em;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

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
    }

    const paragraphClasses = [];
    if (this.state.persons.length <= 2) {
      paragraphClasses.push("red");
    }
    if (this.state.persons.length <= 1) {
      paragraphClasses.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm Le Huu Tan</h1>
        <p className={paragraphClasses.join(" ")}>
          This is my studying React app
        </p>
        <StyledButton
          $alt={this.state.showPersons}
          onClick={this.toggleShowPersons}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
