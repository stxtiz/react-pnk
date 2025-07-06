import axios from "axios";

// URL base de tu API PHP (ajustar según tu servidor)
const API_BASE_URL = "/api/pnk";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API para obtener propiedades
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
    const response = await api.get(`/vermas.php?id=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching property detail:", error);
    throw error;
  }
};

// API para obtener imágenes de una propiedad
export const getPropertyImages = async (id) => {
  try {
    const response = await api.get(`/galeria_propiedad.php?id=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching property images:", error);
    throw error;
  }
};

export default api;
