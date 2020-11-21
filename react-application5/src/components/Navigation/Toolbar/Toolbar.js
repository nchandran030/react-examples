import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItem from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
    <div className={classes.Logo}>
      <Logo></Logo>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItem />
    </nav>
  </header>
);

export default toolbar;