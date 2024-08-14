import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Popular from "./pages/popular";
import NowPlaying from "./pages/nowPlaying";
import UpComing from "./pages/upComing";
import TopRated from "./pages/topRated";
import Nav from "../src/components/nav.jsx";
import Footer from "./components/footer.jsx";
import MovieDetails from "./pages/movieDetails.jsx";

function App() {
  return (
    <>
      <Nav />
      <div className="min-h-[100vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/nowPlaying" element={<NowPlaying />} />
          <Route path="/upComing" element={<UpComing />} />
          <Route path="/topRated" element={<TopRated />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
