import React from "react";
import styles from "./SearchBox.module.css";
import { useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice.js";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter);

  const handleSearchChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <p className={styles.label}>Find contacts by name</p>
        <input
          className={styles.input}
          type="text"
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
