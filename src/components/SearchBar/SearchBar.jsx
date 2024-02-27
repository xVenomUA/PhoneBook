import { useId } from "react";
import { useDispatch } from "react-redux";

import css from "./SearchBar.module.css";
export const SearchBar = () => {
  const id = useId();
  const dispatch = useDispatch();

  return (
    <div className={css.search}>
      <label htmlFor={id}>Find contact by name</label>
      <input
        type="text"
        id={id}
        className={css.input}
        // onChange={}
        placeholder="Search"
        name="search"
        // value={value}
      />
    </div>
  );
};
