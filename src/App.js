import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Popular from "./pages/popular";
import NowPlaying from "./pages/nowPlaying";
import UpComing from "./pages/upComing";
import TopRated from "./pages/topRated";
import Nav from "../src/components/nav.jsx";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/nowPlaying" element={<NowPlaying />} />
        <Route path="/nowPlaying" element={<UpComing />} />
        <Route path="/nowPlaying" element={<TopRated />} />
      </Routes>
    </>
  );
}

export default App;
