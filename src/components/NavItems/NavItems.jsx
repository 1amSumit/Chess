import React from "react";
import NavItem from "../NavItem/NavItem";

const navItems = [
  "Play",
  "Puzzles",
  "Learn",
  "Watch",
  "News",
  "Social",
  "more",
];

const NavItems = (props) => {
  const getClick = (click) => {
    props.sendClick(click);
  };
  return (
    <ul>
      {navItems.map((item, i) => (
        <NavItem key={i} item={item} icon={i} getClick={getClick} />
      ))}
    </ul>
  );
};

export default NavItems;
