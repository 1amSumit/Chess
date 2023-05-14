import React from "react";
import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.home__section}>
      <Navigation />
      <Hero />
    </section>
  );
};

export default Home;
