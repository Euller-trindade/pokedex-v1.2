import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import notAvailable from "../assets/notAvailable.jpg";

import "./pokemon.css";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🤍";
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={
            pokemon["sprites"]["versions"]["generation-v"]["black-white"][
              "animated"
            ]["front_default"] ||
            pokemon.sprites.front_default ||
            notAvailable
          }
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h4> {pokemon.name.toUpperCase()}</h4>
          <div className="pokemon-id">{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  {type.type.name.toUpperCase()}
                </div>
              );
            })}
          </div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
