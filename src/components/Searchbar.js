import React, { useState } from "react";

import "./searchbar.css";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search.toLowerCase());
    console.log(search);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder={"🔍  Buscar Pokémon..."}
          onChange={onChangeHandler}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
