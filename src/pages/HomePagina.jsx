import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyGallery from "../components/PropertyGallery";

const HomePage = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="main">
        <PropertyGallery />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
