import React from "react";
import { Routes, Route } from "react-router-dom";

/* ===== Components ===== */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ===== Pages ===== */
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import FindBlood from "./pages/FindBlood";
import RequestBlood from "./pages/RequestBlood";
import About from "./pages/About";

/* =========================
   APP COMPONENT
========================= */
const App: React.FC = () => {
  return (
    <>
      {/* TOP NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/find-blood" element={<FindBlood />} />
          <Route path="/request-blood" element={<RequestBlood />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default App;
