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

const NavItems = () => {
  return (
    <ul>
      {navItems.map((item, i) => (
        <NavItem key={i} item={item} icon={i} />
      ))}
    </ul>
  );
};

export default NavItems;
