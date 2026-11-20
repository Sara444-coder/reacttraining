function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Department: {props.department}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default Card;
