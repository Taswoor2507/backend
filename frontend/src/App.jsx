import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/jokes");
        const data = await res.json();
        setJokes(data);
      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
    }
    fetchData();
  }, []); // Adding an empty dependency array to run the effect only once

  return (
    <div>
      <h1>Total jokes: {jokes.length}</h1>
      {jokes.map((joke) => (
        <div key={joke.id}>{joke.title}</div>
      ))}
    </div>
  );
}

export default App;
