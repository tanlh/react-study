import React, { useEffect } from "react";

import Person from "./Person/Person";

const Persons = (props) => {
  useEffect(() => {
    console.log("[Persons.js] useEffect");
    return () => {
      console.log("[Persons.js] cleanup useEffect");
    };
  }, [props.persons]);

  console.log("[Persons.js] rendering...");
  return props.persons.map((person, index) => (
    <Person
      key={person.id}
      name={person.name}
      age={person.age}
      click={() => props.clicked(index)}
      changed={(event) => props.changed(event, person.id)}
    />
  ));
};

export default Persons;
