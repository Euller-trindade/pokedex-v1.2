import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import logoImg from '../assets/pokemonLogo.png'


import './navbar.css'

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <nav className="navbar">
      <div>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
      </div>
      <div className="favorites">{favoritePokemons.length} ❤️ Favoritos</div>
    </nav>
  );
};

export default Navbar;
