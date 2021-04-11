import React from "react";
import PropTypes from "prop-types";

import styles from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
  return (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

DrawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default DrawerToggle;
