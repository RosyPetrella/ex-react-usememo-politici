export default function PoliticianCard({ name, imgUrl, posizione, bio }) {
  return (
    <>
      <div className="card">
        <h2>Nome: {name} </h2>
        <img src={imgUrl}></img>
        <p>Posizione: {posizione} </p>
        <p>Bio: {bio}</p>
      </div>
    </>
  );
}
