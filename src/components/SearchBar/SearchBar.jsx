import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBar.module.css";
import { filterNumbers } from "../../redux/filterSlice";
import { getFilter } from "../../redux/selector";

export const SearchBar = () => {
  const id = useId();
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(filterNumbers(e.target.value.trim()));

  const value = useSelector(getFilter);
  return (
    <div className={css.search}>
      <label htmlFor={id}>Find contact by name</label>
      <input
        type="text"
        id={id}
        className={css.input}
        onChange={onChange}
        placeholder="Search"
        name="search"
        value={value}
      />
    </div>
  );
};
