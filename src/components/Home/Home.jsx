import React from "react";
import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";
import classes from "./Home.module.css";
import Room from "../Room/Room";

const Home = () => {
  return (
    <section className={classes.home__section}>
      <Navigation />
      <Hero />
      <Room />
    </section>
  );
};

export default Home;
