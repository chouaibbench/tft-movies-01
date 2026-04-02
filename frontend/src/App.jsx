import "./css/App.css";
import { useState } from "react";
import Favorites from "./pages/Favorites";
import Homme from "./pages/Homme";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"; 

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prev) =>
      prev.find((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  return (
    <div>
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homme addToFavorites={addToFavorites} />} />
          <Route path="/Favorites" element={<Favorites favorites={favorites} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
