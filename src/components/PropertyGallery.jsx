import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { getProperties } from "../services/api";

const PropertyGallery = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  const loadProperties = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);

      const response = await getProperties(page);

      if (response.success) {
        setProperties(response.data);
        setCurrentPage(response.pagination.current_page);
        setTotalPages(response.pagination.total_pages);
      } else {
        setError("Error al cargar las propiedades");
      }
    } catch (err) {
      console.error("Error loading properties:", err);
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProperties(1);
  }, []);

  const handlePageChange = (page) => {
    loadProperties(page);
    // Scroll suave hacia arriba
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando propiedades...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="no-properties">
        <p>{error}</p>
        <button onClick={() => loadProperties(currentPage)}>Reintentar</button>
      </div>
    );
  }

  return (
    <>
      <div className="propiedades-grid">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.idpropiedades} property={property} />
          ))
        ) : (
          <div className="no-properties">
            <p>No se encontraron propiedades.</p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="paginacion">
          {currentPage > 1 && (
            <button
              className="btn-pagina"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              « Anterior
            </button>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`btn-pagina ${page === currentPage ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          {currentPage < totalPages && (
            <button
              className="btn-pagina"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Siguiente »
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default PropertyGallery;
