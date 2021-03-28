import React, { useState } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

const App = (props) => {
  const [usernameState, setUsernameState] = useState("typingusername");

  const changeNameHandler = (event) => {
    setUsernameState(event.target.value);
  };

  return (
    <div className="App">
      <h1>Welcome to my React assignment. I'm tan.lehuu</h1>
      <UserInput change={changeNameHandler} value={usernameState} />
      <div className="OutputContainer">
        <UserOutput
          username={usernameState}
          description="Description of typing user"
        />
        <UserOutput
          username="tan.lehuu"
          description="A nice boy, eager to learn, proactive"
        />
        <UserOutput
          username="trang.phamthi"
          description="A beautiful girl, hardworking and careful"
        />
        <UserOutput
          username="anotheruser"
          description="Unknow user, there is no information about this user"
        />
      </div>
    </div>
  );
};

export default App;
