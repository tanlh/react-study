import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    inputText: "",
    inputChars: [],
  };

  textChangeHandler = (event) => {
    this.setState({ inputText: event.target.value });
  };

  charClickHandler = (charIndex) => {
    const characters = this.state.inputText.split("");
    characters[charIndex] = "";

    this.setState({ inputText: characters.join("") });
  };

  render() {
    let characters = null;
    if (this.state.inputText.length > 0) {
      characters = this.state.inputText
        .split("")
        .map((char, index) => (
          <CharComponent
            char={char}
            click={() => this.charClickHandler(index)}
            key={`${char}${index}`}
          />
        ));
    }

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.textChangeHandler}
          value={this.state.inputText}
        />
        <p>Text length is: {this.state.inputText.length}</p>
        <ValidationComponent textLength={this.state.inputText.length} />
        {characters}
      </div>
    );
  }
}

export default App;
