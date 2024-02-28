import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBar.module.css";
import { filterNumber } from "../../redux/contact/filter";
import {  selectFilter } from "../../redux/contact/selector";
export const SearchBar = () => {
  const id = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const onSearch = (evt) => {
    dispatch(filterNumber(evt.target.value));
  }
  // console.log(filtData());

  return (
    <div className={css.search}>
      <label htmlFor={id}>Find contact by name</label>
      <input
        type="text"
        id={id}
        className={css.input}
        onChange={onSearch}
        placeholder="Search"
        name="search"
        value={value}
      />
    </div>
  );
};
