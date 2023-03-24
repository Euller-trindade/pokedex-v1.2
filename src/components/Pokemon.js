import React, { useContext } from "react";
import FavoriteContext from "../contexts/FavoriteContext";

const Pokemon = ({ name, image, id, types }) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const onHeartClick = () => {
    updateFavoritePokemons(name);
  };
  let heart = favoritePokemons.includes(name) ? "❤️" : "🤍";
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img src={image} alt="pokemon" className="pokemon-image" />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{name}</h3>
          <div className="pokemon-id">{id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">{types}</div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
