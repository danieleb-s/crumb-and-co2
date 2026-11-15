// This component receives data from its parent using props
function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p className="price">Price: ${props.price}</p>
    </div>
  );
}

export default ProductCard;
