import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <p>
        Created by {}
        <a className="a-footer" href="https://www.instagram.com/yadiracondezo/">
          Yadira Condezo
        </a>
        {} and other {}
        <a
          className="a-footer"
          href="https://github.com/PokeAPI/pokeapi#contributing"
        >
          PokeApi contributors around the world.
        </a>
      </p>
      <p>Pokémon character names are trademarks of Nintendo.</p>
    </footer>
  );
};

export default Footer;
