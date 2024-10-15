// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import GalleryPage from "./page/GalleryPage";
import FriendsGalleryPage from "./page/FriendsGalleryPage";
import Header from "./components/Header"; // Ensure correct import path
import Footer from "./components/Footer"; // Assuming you have a Footer component

const App = () => {
  return (
    <Router>
      <Header />
      <main className="mt-20 p-4">
        {" "}
        {/* Adjust margin-top to account for fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/friends" element={<FriendsGalleryPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
