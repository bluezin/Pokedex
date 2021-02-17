import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "../styles/List.scss";
import FavoritePokemon from "./context/Favorite";

const List = ({ pokemon, setElemt }) => {
  const { favorites, usefavorites } = useContext(FavoritePokemon);

  function changeColor(name, sprites) {
    const img = sprites.front_default;
    usefavorites(name, img);
  }

  return (
    <div className="List">
      {pokemon.map(({ name, sprites }, id) => {
        return (
          <div ref={setElemt} key={id}>
            <div className="div-list" id="end">
              <FontAwesomeIcon
                icon={faHeart}
                className={`heart ${
                  favorites.includes(name) ? "red" : "white"
                }`}
                onClick={() => changeColor(name, sprites)}
              />
              <img src={sprites.front_default} className="img-list" />
              <p className="p-list">{name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
