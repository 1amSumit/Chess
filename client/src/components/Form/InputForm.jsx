import React from "react";
import classes from "./InputForm.module.css";

const InputForm = () => {
  return (
    <form className={classes.form} action="#">
      <input className={classes.input} type="search" placeholder="search" />
    </form>
  );
};

export default InputForm;
