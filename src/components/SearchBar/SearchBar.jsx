import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [name, setName] = useState("");
  const [selectOrder, setSelectOrder] = useState("");

  const handlerInput = (event) => {
    setName(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (name !== "") {
      console.log(name);
      setName("");
    }
  };

  const handlerOrder = (event) => {
    setSelectOrder(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.search}>
        <input
          type="text"
          placeholder="Search"
          className={style.input}
          value={name}
          onChange={handlerInput}
        />
        <button type="submit" onClick={handlerSubmit} className={style.submit}>
          Search
        </button>
      </div>
      <div>
        <select
          value={selectOrder}
          onChange={handlerOrder}
          className={style.select}
        >
          <option value="">Continents</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
