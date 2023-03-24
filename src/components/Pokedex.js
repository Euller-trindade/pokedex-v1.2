import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "../Api";
import { FavoriteProvider } from "../contexts/FavoriteContext";
import Favorites from "./Favorites";
import Loading from "./Loading";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const favoritesKey = "f";
const Pokedex = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 25;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);
  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        <div className="pokedex-header">
          <img
            src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="pokedex"
            className="pokedex-logo"
          />
          <Favorites />
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
          />
        </div>

        <div>
          {loading ? (
            <Loading/>
          ) : (
            <div className="pokedex-grid">
              {pokemons &&
                pokemons.map((pokemon, index) => (
                  <Pokemon
                    key={index}
                    id={pokemon.id}
                    name={pokemon.name.toUpperCase()}
                    image={
                      pokemon["sprites"]["versions"]["generation-v"][
                        "black-white"
                      ]["animated"]["front_default"]
                    }
                    types={pokemon.types.map((types, index) => {
                      return (
                        <div key={index} className="pokemon-type-text">
                          {" "}
                          {types.type.name.toUpperCase()}
                        </div>
                      );
                    })}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </FavoriteProvider>
  );
};

export default Pokedex;
