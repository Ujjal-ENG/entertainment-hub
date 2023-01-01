import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";

import SimpleBottomNavigation from "./components/MainNav";

import { Route, Routes } from "react-router-dom";
import Trending from "./pages/Trending.jsx";
import Movies from "./pages/Movies.jsx";
import Series from "./pages/Series.jsx";
import Search from "./pages/Search.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </>
  );
}

export default App;
