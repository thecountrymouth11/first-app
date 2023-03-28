import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Poke } from "./Poke";
import Pokemon from "./Pokemon";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PokemonList />);
