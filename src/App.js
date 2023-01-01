import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { Route, Routes } from "react-router-dom";
import Trending from './pages/Trending'
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Search from "./pages/Search";


function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" component={<Trending />} />
            <Route path="/movies" component={<Movies />} />
            <Route path="/series" component={<Series />} />
            <Route path="/search" component={<Search />} />
          </Routes>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </>
  );
}

export default App;
