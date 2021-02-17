import React from "react";
import "../styles/Head.scss";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <div className="Head">
      <ul className="ul-Head">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/pokedex">
          <li>Pokedex</li>
        </Link>
        <Link to="myPokemon">
          <li>My favorite</li>
        </Link>
      </ul>
    </div>
  );
};

export default Head;
