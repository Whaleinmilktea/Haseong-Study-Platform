import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, )

  return (
    <div className="App">
      <div>{isLoading ? "Loading..." : "We are ready"}</div>
    </div>
  );
};

export default App;
