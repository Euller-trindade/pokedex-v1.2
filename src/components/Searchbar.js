import React, { useState } from "react";
import Loading from "./Loading";

const Searchbar = () => {
  const [search, setsearch] = useState("");
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [notFuond, setNotFuond] = useState(false);

  const SearchPokemon = (pokemon) => {
    setLoading(true);
    setNotFuond(false);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  };
  const onChangeHandler = (e) => {
    setsearch(e.target.value);
    if (e.target.value.length === 0) {
      SearchPokemon(undefined);
    }

  };
  const onButtonClickHandler = () => {
    SearchPokemon(search);
    setLoading(false);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Buscar pokemon"
          onChange={onChangeHandler}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
      {loading ? (
        <Loading />
      ) : pokemon ? (
        <div>
          <div>Nome: {pokemon.name}</div>
          <div>Peso: {pokemon.weight}</div>
          <img
            src={
              pokemon["sprites"]["versions"]["generation-v"]["black-white"][
                "animated"
              ]["front_default"]
            }
            alt=""
          />
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
