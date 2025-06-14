import { Route, Routes } from "react-router-dom";
import "./dist/styles.css";

import Home from "./Pages/Home";
import AutoListings from "./Pages/AutoListings";
import News from "./Pages/News";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auto-listings" element={<AutoListings />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
