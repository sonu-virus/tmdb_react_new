import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./pages/layout/layout";
// import Nav from "./components/nav";

function App() {
  return (
    <Layout>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
