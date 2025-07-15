import React from "react";
function PoliticianCard({ name, imgUrl, posizione, bio }) {
  console.log(`Rendering card di: ${name}`);
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

export default React.memo(PoliticianCard);
