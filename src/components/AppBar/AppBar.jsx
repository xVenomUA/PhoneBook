import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggin = false;
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggin ? 2 : <AuthNav />}
    </header>
  );
};
