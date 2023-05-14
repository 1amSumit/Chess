import React from "react";
import classes from "./Hero.module.css";
import chessHero from "../../assets/chesshero.jpg";
import { GiChessPawn as Play } from "react-icons/gi";

const Hero = () => {
  return (
    <main className={classes.hero}>
      <figure className={classes.img__part}>
        <img className={classes.img} src={chessHero} alt="chess-board" />
      </figure>
      <div className={classes.content__part}>
        <h1 className={classes.main__heading}>
          <span>Play Chess</span>
          <span>Online</span>
          <span>on the #1 Site!</span>
        </h1>
        <div className={classes.btn}>
          <button className={`${classes.btn__primary} ${classes.green_bg}`}>
            <span>
              {" "}
              <Play /> Play Online
            </span>
            <p>play with someone at your level</p>
          </button>
          <button className={`${classes.btn__primary} ${classes.gray_bg}`}>
            <span>
              {" "}
              <Play /> Play Computer
            </span>
            <p>play vs coustamizable training bots</p>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
