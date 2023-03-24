import React, { useContext } from "react";
import FavoriteContext from "../contexts/FavoriteContext";

const Favorites = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  return <div> Favoritos {favoritePokemons.length} ❤️</div>;
};

export default Favorites;
