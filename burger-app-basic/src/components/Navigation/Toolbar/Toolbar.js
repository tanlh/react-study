import React from "react";
import PropTypes from "prop-types";

import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle/SideDrawerToggle";

const Toolbar = (props) => {
  return (
    <head className={styles.Toolbar}>
      <div>
        <SideDrawerToggle clicked={props.drawerToggleClicked} />
      </div>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </head>
  );
};

Toolbar.propTypes = {};

export default Toolbar;
