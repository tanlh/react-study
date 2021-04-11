import React from "react";
import PropTypes from "prop-types";

import styles from "./SideDrawerToggle.module.css";

const SideDrawerToggle = (props) => {
  return (
    <div className={styles.SideDrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

SideDrawerToggle.propTypes = {};

export default SideDrawerToggle;
