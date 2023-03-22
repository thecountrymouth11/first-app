import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Poke = [
  {
    name: "Squirtle",
    type: "Water",
    image: "./images/pokemon1.jpg",
    id: 1,
  },
  {
    name: "Bulbasaur",
    type: "Grass/Poison",
    image: "./images/pokemon2.jpg",
    id: 2,
  },
  {
    name: "Snorlax",
    type: "Normal",
    image: "./images/pokemon3.jpg",
    id: 3,
  },
  {
    name: "Pickachu",
    type: "Electric",
    image: "./images/pokemon4.jpeg",
    id: 4,
  },
  {
    name: "Evee",
    type: "Normal",
    image: "./images/pokemon5.jpg",
    id: 5,
  },
  {
    name: "Blastoise",
    type: "Water",
    image: "./images/pokemon6.jpg",
    id: 6,
  },
  {
    name: "Charmendar",
    type: "Fire",
    image: "./images/pokemon7.jpg",
    id: 7,
  },
  {
    name: "Gangar",
    type: "Ghost",
    image: "./images/pokemon8.jpg",
    id: 8,
  },
  {
    name: "ButterFree",
    type: "Bug",
    image: "./images/pokemon9.jpg",
    id: 9,
  },
  {
    name: "Pidgey",
    type: "Flying",
    image: "./images/pokemon10.jpg",
    id: 10,
  },
  {
    name: "Jigglypuff",
    type: "Fairy",
    image: "./images/pokemon11.jpeg",
    id: 11,
  },
  {
    name: "Geodude",
    type: "Rock",
    image: "./images/pokemon12.jpeg",
    id: 12,
  },
];

function PokemonList() {
  return (
    <section className="pokelist">
      {Poke.map((Poke) => {
        console.log(Poke);
        return <Pokemon Poke={Poke} key={Poke.id} />;
      })}
    </section>
  );
}
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
