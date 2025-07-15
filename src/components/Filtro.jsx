import { useState } from "react";
import PoliticianCard from "./PoliticianCard";

export default function Filtro({ data }) {
  const [ricerca, setRicerca] = useState("");
  const filteredPolitician = data
    ? data.filter((politician) =>
        politician.name.toLowerCase().includes(ricerca.toLowerCase())
      )
    : [];

  return (
    <>
      <input
        type="text"
        placeholder="Ricerca politico"
        value={ricerca}
        onChange={(e) => setRicerca(e.target.value)}
      />

      {filteredPolitician.map((p, index) => (
        <PoliticianCard
          key={index}
          name={p.name}
          imgUrl={p.image}
          posizione={p.position}
          bio={p.biography}
        />
      ))}
    </>
  );
}
