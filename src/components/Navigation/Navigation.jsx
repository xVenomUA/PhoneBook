import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

import clsx from "clsx";

export const Navigation = () => {
  const isActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const isLoggin = false;
  return (
    <nav>
      <NavLink to="/" className={isActive}>
        Home
      </NavLink>
      {isLoggin && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
