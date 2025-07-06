import axios from "axios";

// URL base de tu API PHP (ajustar según tu servidor)
const API_BASE_URL = "http://localhost/pnk"; // Cambiar por tu URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API para obtener propiedades con paginación
export const getProperties = async (page = 1) => {
  try {
    const response = await api.get(`/api_propiedades.php?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

// API para obtener detalle de una propiedad
export const getPropertyDetail = async (id) => {
  try {
    // Por ahora usamos datos mock, luego conectarás con vermas.php
    const mockProperty = {
      idpropiedades: id,
      titulopropiedad: "Casa Moderna en La Serena",
      descripcion:
        "Hermosa casa ubicada en sector residencial de La Serena. Cuenta con amplios espacios, jardín y excelente ubicación cerca de servicios y transporte público.",
      precio_pesos: 95000000,
      precio_uf: 2500,
      tipo_propiedad: "Casa",
      area_total: 200,
      area_construida: 150,
      cant_domitorios: 3,
      cant_banos: 2,
      estacionamiento: 1,
      bodega: 1,
      logia: 0,
      cocinaamoblada: 1,
      piscina: 0,
      antejardin: 1,
      patiotrasero: 1,
    };

    return {
      success: true,
      data: mockProperty,
    };
  } catch (error) {
    console.error("Error fetching property detail:", error);
    throw error;
  }
};

// API para obtener imágenes de una propiedad
export const getPropertyImages = async (id) => {
  try {
    // Mock de imágenes
    const mockImages = [
      { foto: "casa.jpg", principal: 1 },
      { foto: "casa2.jpg", principal: 0 },
    ];

    return {
      success: true,
      data: mockImages,
    };
  } catch (error) {
    console.error("Error fetching property images:", error);
    throw error;
  }
};

export default api;
