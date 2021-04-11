import React from "react";
import PropTypes from "prop-types";

import burgerLogo from "../../assets/images/burger-logo.png";
import styles from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={styles.Logo}>
      <img src={burgerLogo} alt="burger-logo" />
    </div>
  );
};

Logo.propTypes = {};

export default Logo;
