import React from "react";
import logo from "../images/logo.png";
import pokedex from "../images/poke.png";
import "../styles/Body.scss";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="div-sub-body">
      <img src={logo} alt="logo" className="img-logo-pokemon" />

      <div className="div-body">
        <div>
          <h1 className="h1-body">LA MEJOR FORMA DE ORGANIZAR TUS POKEMONS</h1>
          <p className="p-body">
            Con la pokedex, podrás encontrar todos los pokemons de la región de
            Kanto. Anímate y vuélvete el mejor, mejor que nadie más.
          </p>
          <Link to="/pokedex">
            <button className="btn btn-blue btn-blue:hover">
              !Empieza ya!
            </button>
          </Link>
        </div>
        <img src={pokedex} alt="poke" className="img-pokemon" />
      </div>
    </div>
  );
};

export default Body;
