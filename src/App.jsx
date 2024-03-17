import { Route, Routes } from "react-router-dom";
import "./dist/styles.css";

import Home from "./Pages/Home";
import AutoListings from "./Pages/AutoListings";
import Contact from "./Pages/Contact";
import News from "./Pages/News";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auto-listings" element={<AutoListings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
