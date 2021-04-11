import React from "react";
import PropTypes from "prop-types";

import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => {
  return (
    <head className={styles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </head>
  );
};

Toolbar.propTypes = {};

export default Toolbar;
