import React, { useEffect, useState } from "react";
import "./App.css";
import Section from "./components/Section";

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1643648266/react-new-exercices/netflix2022/movies_rnexgr.json"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <img
          src="/src/assets/netflix.png"
          alt="Netflix Logo"
          className="netflix-logo"
        />
      </header>
      {categories.length > 0 ? (
        categories.map((item, index) => (
          <Section key={index} category={item.category} images={item.images} />
        ))
      ) : (
        <p className="loading">Chargement des films...</p>
      )}
    </div>
  );
};

export default App;
