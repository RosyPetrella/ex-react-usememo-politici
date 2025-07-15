import { useState, useEffect } from "react";

import "./App.css";
import PoliticianCard from "./components/PoliticianCard";
import Filtro from "./components/Filtro";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3333/politicians")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Filtro data={data} />
      {/* {data &&
        data.map((d, index) => (
          <PoliticianCard
            key={index}
            name={d.name}
            imgUrl={d.image}
            posizione={d.position}
            bio={d.biography}
          />
        ))} */}
    </>
  );
}

export default App;
