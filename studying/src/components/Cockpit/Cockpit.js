import React, { useEffect, useRef } from "react";

import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
  // This work either: const toggleButtonRef = React.createRef();
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect run everytime");
  });

  useEffect(() => {
    console.log("[Cockpit.js] useEffect run once");
    toggleButtonRef.current.click();
  }, []);

  console.log("[Cockpit.js] rendering...");
  let btnClass = "";
  if (props.showPersons) {
    btnClass = styles.Red;
  }

  const paragraphClasses = [];
  if (props.personsLength <= 2) {
    paragraphClasses.push(styles.red);
  }
  if (props.personsLength <= 1) {
    paragraphClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={paragraphClasses.join(" ")}>
        This is my studying React app
      </p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
