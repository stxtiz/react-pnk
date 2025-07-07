# Aplicación de Listado de Propiedades - React + Vite

## Descripción del Proyecto

Esta es una aplicación frontend desarrollada con React y Vite que permite visualizar listados de propiedades inmobiliarias. La aplicación consume datos de un backend PHP mediante una API para mostrar propiedades con imágenes, detalles y precios en moneda local (CLP) y en UF (Unidad de Fomento, usada en Chile).

## Tecnologías Utilizadas

- React
- Vite
- React Router DOM para navegación
- Axios para llamadas HTTP
- Bootstrap para estilos y diseño responsivo
- FontAwesome para iconos
- PHP (backend API, no incluido en este repositorio)

## Instrucciones de Instalación y Configuración

1. Clonar este repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Asegurarse de tener el backend PHP corriendo y accesible.
4. Configurar el proxy en `vite.config.js` si es necesario para redirigir las llamadas API.
5. Ejecutar `npm run dev` para iniciar el servidor de desarrollo.

## Estructura del Proyecto

- `src/` - Código fuente de React
  - `components/` - Componentes reutilizables (PropertyCard, PropertyGallery, Header, Footer)
  - `pages/` - Páginas principales (HomePagina, VerMas)
  - `services/` - Servicios para llamadas a la API
  - `styles/` - Archivos CSS globales y de componentes
  - `utils/` - Utilidades varias (e.g., manejo de imágenes)
- `public/` - Archivos estáticos y recursos (imágenes, favicon, manifest)
- `vite.config.js` - Configuración de Vite y proxy para API

## Funcionalidades

- Visualización de listado de propiedades con paginación.
- Cada propiedad muestra imagen, título, tipo y precios en UF y CLP.
- Navegación a página de detalle de propiedad con información ampliada.
- Manejo de estados de carga y errores en la carga de datos.
- Diseño responsivo y uso de iconos para mejor experiencia de usuario.

## Uso de la API

La aplicación consume las siguientes rutas del backend PHP:

- `/api_propiedades.php?page=`: Obtiene listado paginado de propiedades.
- `/vermas.php?id=`: Obtiene detalles de una propiedad específica.
- `/galeria_propiedad.php?id=`: Obtiene imágenes asociadas a una propiedad.

## Estilos y Dependencias

- Bootstrap para estilos base y componentes responsivos.
- FontAwesome para iconos visuales.
- CSS modularizado en archivos globales y específicos de componentes.

## Cómo Ejecutar el Proyecto

1. Instalar dependencias con `npm install`.
2. Iniciar el servidor de desarrollo con `npm run dev`.
3. Abrir en el navegador `http://localhost:3000/react` para acceder a la aplicación.

## Autor y Contacto

Proyecto desarrollado para gestión y visualización de propiedades inmobiliarias. Para consultas o soporte, contactar al desarrollador.
