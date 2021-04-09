import React, { useEffect } from "react";

import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect showPersons");
    setTimeout(() => {
      alert("Person changed!");
    }, 1000);
  }, [props.showPersons]);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect run once");
  }, []);

  console.log("[Cockpit.js] rendering...");
  let btnClass = "";
  if (props.showPersons) {
    btnClass = styles.Red;
  }

  const paragraphClasses = [];
  if (props.persons.length <= 2) {
    paragraphClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    paragraphClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={paragraphClasses.join(" ")}>
        This is my studying React app
      </p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
