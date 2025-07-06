import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPropertyDetail, getPropertyImages } from "../services/api";
import { Carousel } from "react-bootstrap";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPropertyDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        const [propertyResponse, imagesResponse] = await Promise.all([
          getPropertyDetail(id),
          getPropertyImages(id),
        ]);

        if (propertyResponse.success) {
          setProperty(propertyResponse.data);
        }

        if (imagesResponse.success) {
          setImages(imagesResponse.data);
        }
      } catch (err) {
        console.error("Error loading property detail:", err);
        setError("Error al cargar los detalles de la propiedad");
      } finally {
        setLoading(false);
      }
    };

    loadPropertyDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando detalles...</p>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="no-properties">
        <p>{error || "Propiedad no encontrada"}</p>
        <Link to="/" className="btn-galeria">
          Volver al inicio
        </Link>
      </div>
    );
  }

  // Determinar tipo de propiedad para mostrar características
  const tipoPropiedad = property.tipo_propiedad?.toLowerCase() || "";
  const esTerreno = tipoPropiedad.includes("terreno");
  const esDepartamento = tipoPropiedad.includes("departamento");

  const formatPrice = (price) => {
    return "$" + new Intl.NumberFormat("es-CL").format(price);
  };

  const formatUF = (uf) => {
    return "UF " + new Intl.NumberFormat("es-CL").format(uf);
  };

  return (
    <div className="detalle-propiedad">
      <div className="detalle-titulo">{property.titulopropiedad}</div>
      <div className="detalle-descripcion">
        {property.descripcion &&
          property.descripcion.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < property.descripcion.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
      </div>
      <div className="detalle-precio">
        CLP {formatPrice(property.precio_pesos)}
      </div>

      <div className="detalle-iconos">
        {/* Información básica */}
        <div className="detalle-icono">
          <i className="fa-solid fa-home"></i>
          {property.tipo_propiedad}
        </div>
        <div className="detalle-icono">
          <i className="fa-solid fa-expand-arrows-alt"></i>
          {new Intl.NumberFormat("es-CL").format(property.area_total || 0)} m²
          totales
        </div>

        {/* Características de construcción */}
        <div className="detalle-icono">
          <i className="fa-solid fa-ruler-combined"></i>
          {new Intl.NumberFormat("es-CL").format(
            property.area_construida || 0
          )}{" "}
          m² construidos
        </div>

        <div className="detalle-icono">
          <i className="fa-solid fa-bed"></i>
          {esTerreno ? (
            <>
              <i className="fa-solid fa-ban text-danger"></i> No cuenta
            </>
          ) : (
            `${property.cant_domitorios || 0} dormitorios`
          )}
        </div>

        <div className="detalle-icono">
          <i className="fa-solid fa-bath"></i>
          {esTerreno ? (
            <>
              <i className="fa-solid fa-ban text-danger"></i> No cuenta
            </>
          ) : (
            `${property.cant_banos || 0} baños`
          )}
        </div>

        {/* Características adicionales */}
        <div className="detalle-icono">
          <i className="fa-solid fa-car"></i> Estacionamiento:
          {esTerreno ? (
            <>
              <i className="fa-solid fa-ban text-danger"></i> No cuenta
            </>
          ) : property.estacionamiento ? (
            " Sí"
          ) : (
            " No"
          )}
        </div>

        <div className="detalle-icono">
          <i className="fa-solid fa-warehouse"></i> Bodega:
          {esTerreno ? (
            <>
              <i className="fa-solid fa-ban text-danger"></i> No cuenta
            </>
          ) : property.bodega ? (
            " Sí"
          ) : (
            " No"
          )}
        </div>

        <div className="detalle-icono">
          <i className="fa-solid fa-door-open"></i> Logia:
          {esTerreno ? (
            <>
              <i className="fa-solid fa-ban text-danger"></i> No cuenta
            </>
          ) : property.logia ? (
            " Sí"
          ) : (
            " No"
          )}
        </div>

        <div className="detalle-icono">
          <i className="fa-solid fa-utensils"></i> Cocina Amoblada:
          {esTerreno ? (
            <>
              <i className="fa-solid fa-ban text-danger"></i> No cuenta
            </>
          ) : property.cocinaamoblada ? (
            " Sí"
          ) : (
            " No"
          )}
        </div>

        <div className="detalle-icono">
          <i className="fa-solid fa-person-swimming"></i> Piscina:
          {esTerreno ? (
            <>
              <i className="fa-solid fa-ban text-danger"></i> No cuenta
            </>
          ) : property.piscina ? (
            " Sí"
          ) : (
            " No"
          )}
        </div>

        {/* Características de exterior */}
        <div className="detalle-icono">
          <i className="fa-solid fa-seedling"></i> Antejardín:
          {esTerreno || esDepartamento ? (
            <>
              <i className="fa-solid fa-ban text-danger"></i> No cuenta
            </>
          ) : property.antejardin ? (
            " Sí"
          ) : (
            " No"
          )}
        </div>

        <div className="detalle-icono">
          <i className="fa-solid fa-tree"></i> Patio Trasero:
          {esTerreno || esDepartamento ? (
            <>
              <i className="fa-solid fa-ban text-danger"></i> No cuenta
            </>
          ) : property.patiotrasero ? (
            " Sí"
          ) : (
            " No"
          )}
        </div>

        {/* Precio en UF */}
        <div className="detalle-icono">
          <i className="fa-solid fa-coins"></i>
          {formatUF(property.precio_uf || 0)}
        </div>
      </div>

      {/* Galería de imágenes */}
      {images.length > 0 && (
        <div id="carruzel">
          <Carousel id="demo">
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={`/propiedades/${image.foto}`}
                  alt={`Imagen ${index + 1} de ${property.titulopropiedad}`}
                  onError={(e) => {
                    e.target.src = "/propiedades/defecto.jpg";
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
