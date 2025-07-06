import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyDetail from "../components/PropertyDetail";

const PropertyDetailPage = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="main">
        <PropertyDetail />
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetailPage;
