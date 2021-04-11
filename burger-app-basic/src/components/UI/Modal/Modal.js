import React from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return <div className={styles.Modal}>{props.children}</div>;
};

Modal.propTypes = {};

export default Modal;
