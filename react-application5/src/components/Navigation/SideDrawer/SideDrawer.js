import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxilary from "../../../hoc/Auxilary/Auxilary";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Auxilary>
      <Backdrop shows={props.open} clicked={props.closed}></Backdrop>
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo></Logo>
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Auxilary>
  );
};
export default sideDrawer;
