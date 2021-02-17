import React, { useEffect, useState, useRef, useReducer } from "react";
import "../styles/Pokedex.scss";
import List from "./List";
import {
  getLocalStorage,
  getPokemon,
  getUrl,
  getClickFavorite,
} from "./hooks/api";
import { FavoriteProvider } from "./context/Favorite";
import Searche from "./Searche";
import { reducer } from "./hooks/reducer";
import Loader from "./Loader/Loader";

const Pokedex = () => {
  // referencia de intersetion-observer
  const [elemnt, setElemt] = useState(null);
  const [value, setValue] = useState("");
  const [favorite, setFavorite] = useState(["bulbasaur"]);
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, {
    pokemon: [],
    load: true,
    page: 0,
    searche: [],
  });
  // obteniendo valores del estado
  const { pokemon, load, page, searche } = state;
  // intersetion
  const Observer = useRef(new IntersectionObserver(calback, { threshold: 1 }));
  // const refsolv = useRef(handleclic);
  function calback(entries) {
    if (entries[0].isIntersecting) {
      dispatch({
        type: "PAGE",
        load: "Loading...",
      });
    }
  }

  function clickFavorite(name, img) {
    getClickFavorite(name, img, favorite, data, setData, setFavorite);
    console.log("");
  }

  async function getFetchPokemon() {
    try {
      const data = await getPokemon(page);
      const promise = data.results.map(async ({ url }) => await getUrl(url));
      const result = await Promise.all(promise);
      dispatch({
        type: "DATA",
        pokemon: [...pokemon, ...result],
      });
    } catch (error) {
      dispatch({
        type: "LOAD",
      });
      console.log(error);
    }
  }

  function fetchSearche(result) {
    dispatch({
      type: "SEARCHE",
      searche: result,
    });
  }

  function saveValue(valor) {
    setValue(valor);
  }

  useEffect(() => {
    getLocalStorage(setFavorite, setData);
    getFetchPokemon();

    if (value === "") {
      dispatch({
        type: "CHANGE",
      });
    }
  }, [page, value]);

  useEffect(() => {
    if (elemnt) {
      Observer.current.observe(elemnt);
    }

    return () => {
      if (elemnt) Observer.current.unobserve(elemnt);
    };
  }, [elemnt, value]);

  return (
    <FavoriteProvider
      value={{
        favorites: favorite,
        usefavorites: clickFavorite,
        searche: fetchSearche,
        value: saveValue,
      }}
    >
      <div className="Pokedex">
        <Searche pokemon={pokemon} />
        <div>
          {load && <Loader />}

          {searche.length <= 0 ? (
            <List pokemon={state.pokemon} setElemt={setElemt} load={load} />
          ) : (
            <List pokemon={searche} setElemt={setElemt} />
          )}
        </div>
      </div>
    </FavoriteProvider>
  );
};

export default Pokedex;
