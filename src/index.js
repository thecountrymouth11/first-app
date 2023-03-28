import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Poke } from "./Poke";

function PokemonList() {
  return (
    <section className="pokelist">
      {Poke.map((Poke) => {
        // console.log(Poke);
        return <Pokemon Poke={Poke} key={Poke.id} />;
      })}
    </section>
  );
}
// functional component
const Pokemon = ({ Poke: { image, name, type } }) => {
  return (
    <article className="pokemon">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h5>{type}</h5>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PokemonList />);
