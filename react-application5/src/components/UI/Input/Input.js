import React from "react";
import classes from "./Input.css";

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          {...props.value}
          onChange={props.changed}
        ></input>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          {...props.value}
          onChange={props.changed}
        ></textarea>
      );
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          {...props.value}
          onChange={props.changed}
        ></input>
      );
  }
  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;