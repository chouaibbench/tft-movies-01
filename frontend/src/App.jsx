import "./css/App.css";
import Favorites from "./pages/Favorites";
import Homme from "./pages/Homme";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"; 

function App() {
  return (
    <div>
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homme />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
