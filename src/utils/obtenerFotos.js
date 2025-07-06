// src/utils/imgBaseUrl.js
// Utilidad para obtener la URL base de imágenes desde variable de entorno o valor por defecto

const IMAGEN_API = import.meta.env.VITE_IMG_URL || "/pnk/propiedades/";
export default IMAGEN_API;
