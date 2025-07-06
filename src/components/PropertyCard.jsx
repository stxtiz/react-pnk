import { Link } from "react-router-dom";
import IMAGEN_API from "../utils/obtenerFotos";

const PropertyCard = ({ property }) => {
  // Formatear precios
  const formatPrice = (price) => {
    return "$" + new Intl.NumberFormat("es-CL").format(price);
  };

  const formatUF = (uf) => {
    return "UF " + new Intl.NumberFormat("es-CL").format(uf);
  };

  // Manejar imagen por defecto
  const getImageSrc = () => {
    if (property.foto && property.foto !== "defecto.jpg") {
      return `${IMAGEN_API}${property.foto}`;
    }
    return `${IMAGEN_API}defecto.jpg`;
  };

  return (
    <div className="propiedad">
      <img
        src={getImageSrc()}
        alt={property.titulo}
        onError={(e) => {
          e.target.src = `${IMAGEN_API}defecto.jpg`;
        }}
      />
      <div className="info-propiedad">
        <h3>{property.titulo}</h3>
        <div className="tipo-propiedad">Tipo: {property.tipo_propiedad}</div>
        <div className="precios">
          <span className="uf">{formatUF(property.precio_uf)}</span>
          <span className="clp">{formatPrice(property.precio_pesos)}</span>
        </div>
        <center>
          <Link
            to={`/propiedad/${property.idpropiedades}`}
            className="btn-galeria"
          >
            Ver Detalle
          </Link>
        </center>
      </div>
    </div>
  );
};

export default PropertyCard;
