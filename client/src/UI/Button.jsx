import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.btn} style={props.style}>
      {props.name}
    </button>
  );
};

export default Button;
