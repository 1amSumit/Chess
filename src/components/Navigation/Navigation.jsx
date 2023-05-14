import { useState } from "react";

import classes from "./Navigation.module.css";
import logo from "../../assets/logo.png";
import NavItems from "../NavItems/NavItems";
import InputForm from "../Form/InputForm";
import Button from "../../UI/Button";

const Navigation = () => {
  const [clicked, setisClicked] = useState(false);
  const getClick = (click) => {
    setisClicked((preClick) => (preClick ? false : true));
  };
  return (
    <nav className={classes.nav__section}>
      <div className={classes.logo__container}>
        <img className={classes.logo__img} src={logo} alt="chess-logo" />
      </div>
      <div>
        <NavItems sendClick={getClick} />
      </div>
      <div className={classes.input}>
        <InputForm />
      </div>
      <div className={classes.btns}>
        <Button name="sign Up" style={{ backgroundColor: "#777" }} />
        <Button name="log In" style={{ backgroundColor: "green" }} />
      </div>
      {clicked && (
        <div className={classes.sideBar}>
          <NavItems />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
