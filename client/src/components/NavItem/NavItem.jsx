import { React, useState } from "react";

import classes from "./NavItem.module.css";

import { GiChessPawn as Play } from "react-icons/gi";
import { HiPuzzle as Puzzles } from "react-icons/hi";
import { SiFuturelearn as Learn } from "react-icons/si";
import { FcBinoculars as Watch } from "react-icons/fc";
import { BiNews as News } from "react-icons/bi";
import { IoMdPeople as Social } from "react-icons/io";
import { FiMoreHorizontal as more } from "react-icons/fi";

const icons = [Play, Puzzles, Learn, Watch, News, Social, more];

const NavItem = (props) => {
  const [clicked, setIsClicked] = useState(false);
  const onClickhandler = (e) => {
    e.preventDefault();
    setIsClicked(true);
    props.getClick(clicked);
  };

  return (
    <li className={classes.list__items}>
      {icons.map((Icon, i) => (i === props.icon ? <Icon key={i} /> : ""))}
      <a onClick={onClickhandler} className={classes.links} href="#">
        {props.item}
      </a>
    </li>
  );
};

export default NavItem;
