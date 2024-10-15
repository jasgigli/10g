// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import GalleryPage from "./page/GalleryPage";
import FriendsGalleryPage from "./page/FriendsGalleryPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="mt-20 p-4">
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
