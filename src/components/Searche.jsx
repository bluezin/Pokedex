import React, { useState, useContext, useEffect } from "react";
import FavoritePokemon from "./context/Favorite";
import { getSearche } from "./hooks/api";
import "../styles/Searche.scss";

const Searche = (props) => {
  const [result, setResult] = useState([]);
  const [save, setSave] = useState();
  const { searche, value } = useContext(FavoritePokemon);
  //

  function handleChange(event) {
    setSave(event.target.value);
    value(event.target.value);
  }

  async function handleClick(event) {
    event.preventDefault();
    try {
      if (save) {
        const data = await getSearche(save);
        const f = [data];
        const Searchpokemon = f.filter((pokemon, index) => {
          return (
            pokemon.name.toLowerCase().includes(save.toLowerCase()) ||
            pokemon.id === Number(save)
          );
        });

        setResult(Searchpokemon);
      }
    } catch (error) {
      alert("Ups, no se encontro el pokemon :(");
    }
  }

  useEffect(() => {
    searche(result, save);
  }, [result]);

  return (
    <form onSubmit={handleClick}>
      <h1 className="h1-pokedex">Lista de pokemones</h1>
      <p className="p-first-pokedex">*Limitado a la región de Kanto*</p>
      <p className="p-sec-pokedex">Encuentra el pokemon que estás buscando</p>
      <input
        className="... md:bg-gray-200 md:focus:bg-white  w-4/5 ... color"
        onChange={handleChange}
        placeholder="busca un pokemon..."
      />
      <p className="p-sec-pokedex">Elige tus pokemones favoritos</p>
    </form>
  );
};

export default Searche;
