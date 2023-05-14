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
  return (
    <li className={classes.list__items}>
      {icons.map((Icon, i) => (i === props.icon ? <Icon key={i} /> : ""))}
      <a className={classes.links} href="#">
        {props.item}
      </a>
    </li>
  );
};

export default NavItem;
