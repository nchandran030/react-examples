import React from "react";
import classes from "./BuildControl.css";

const buildControl = (prop) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{prop.label}</div>
    <button
      className={classes.Less}
      onClick={prop.removed}
      disabled={prop.disabledValue}
    >
      Less
    </button>
    <button className={classes.More} onClick={prop.added}>
      More
    </button>
  </div>
);

export default buildControl;
