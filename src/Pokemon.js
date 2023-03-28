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
export default Pokemon;
