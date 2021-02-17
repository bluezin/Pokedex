import React from "react";
import "../styles/MyFavorite.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function MyFavorites() {
  const localStorege =
    JSON.parse(window.localStorage.getItem("favorite")) || [];

  return (
    <div className="MyFavorite">
      <h1 className="h1-my-favorite">Pokedex</h1>
      <p className="p-my-favorite">
        Mis pokemones favoritos: {localStorege.length}
      </p>
      {localStorege.length <= 0 ? (
        <div>
          <h1 className="Loader-h1">
            Ups!!, Agrega un pokemon a tus favoritos 🙂
          </h1>
        </div>
      ) : (
        <div className="div-first-my-favorite">
          {localStorege.map((data, id) => (
            <div key={id} className="div-myFavorite">
              <FontAwesomeIcon icon={faHeart} className="heart-favorite" />
              <img src={data.img} />
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyFavorites;
