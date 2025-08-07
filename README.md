# 🛒 E-commerce ReactJS | Coderhouse

![Avanzar Group](https://img.shields.io/badge/Avanzar%20Group-Cursos%20Online-blue)
[![React](https://img.shields.io/badge/React-18.x-61dafb)]()
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff)]()
[![Firebase](https://img.shields.io/badge/Firebase-10.x-ffca28)]()

¡Bienvenido/a! Este proyecto es parte del curso de **ReactJS** en [Coderhouse](https://www.coderhouse.com/). Es un e-commerce especializado en la venta de cursos online de Avanzar Group.

## 🚀 Descripción del Proyecto

Este e-commerce está diseñado para ofrecer una experiencia de usuario fluida en la compra de cursos online. Los usuarios pueden explorar diferentes categorías, ver detalles de los cursos y realizar compras de manera intuitiva.

### 🎯 Categorías de Cursos
- 💼 Negocios
- 📊 Administración
- 💻 Tecnología
- 💰 Finanzas

---

## Entrega Final: Web App de E-commerce

Desarrolla el Front End de una Single Page Application de e-commerce, utilizando React como herramienta base para crear las distintas piezas (componentes) de la interfaz de usuario (UI). Implementa los diferentes patrones y conceptos específicos de React, como el Virtual DOM y los hooks. Para la interacción entre las mismas, incorpora manejo de eventos, navegación entre componentes, y administración de datos globales (por ejemplo: el estado del carrito de compras). Como herramienta de estilado podrás utilizar de forma opcional CSS, SASS, o librerías de estilos (Bootstrap) o de componentes (Material UI). Podrás seleccionar una temática a elección, creando tu propio catálogo de productos, o utilizando herramientas generadoras de datos o "mock data". Implementa la conexión a un servicio en la nube (Firebase) que te provea de una Base de Datos donde almacenar el listado de tus productos, y te permita guardar registros de las compras realizadas por los usuarios del e-commerce.

### 🎓 Objetivos Principales
- 🌐 Desarrollar el front-end de una webapp de tipo e-commerce con React.
- 🔥 Incorporar Firestore como base de datos.

### ⚙️ Requisitos

#### 📦 Listado y Detalle de productos
- 🔄 Generación dinámica del listado de productos y acceso a la vista en detalle de cada uno (`ItemListContainer` y `ItemDetailContainer`)
- 🏗️ Separación en componentes contenedores y de presentación para separar responsabilidad de tareas en los mismos (`ItemListContainer`, `ItemList`)
- 🔢 Implementación de componente `ItemCount` que permita seleccionar cantidad de unidades a agregar al carrito y realice las validaciones necesarias (valor mínimo, límite por stock, etc.)
- 👁️ Ocultar el componente `ItemCount` en `ItemDetail` luego de agregar un producto al carrito.

#### 🧭 Navegación
- 🔗 Navegación entre las secciones de catálogo, categorías, detalle, carrito y checkout, utilizando React Router y mediante enlaces en el componente NavBar.
- ⚡ Navegación respetando el modelo Single Page App (sin que se generen recargas de la página del navegador)
- 📱 Experiencia fluida y responsive

#### 🛍️ Criterios de compras
- 💾 Almacenamiento del estado de carrito de compras mediante Context.
- 🧮 Mostrar el contenido del carrito dentro del componente `Cart` (productos, cantidades, subtotales, totales, etc.)
- 🛒 Mostrar un icono/imágen del carrito en el componente `CartWidget`. Debe mostrar el total de unidades agregadas al context

#### 🔥 Firebase
- 📚 Implementación de Firestore como base de datos.
- 📝 Creación de una colección donde se almacene la información de todos los productos del e-commerce, y realizar las consultas desde React para mostrarlos en la app.
- 📦 Generación de un documento en Firestore al confirmar una compra, registrando los detalles de la misma.

#### 👥 Experiencia de usuario
- ⌛ Utilizar renderizado condicional para mostrar loaders y mensajes condicionales, como "producto sin stock", "carrito vacío", etc.
- ℹ️ Como finalización de la experiencia de usuario, brindarle al usuario el id (o detalles adicionales) de la orden generada en Firestore

#### 🛠️ Buenas prácticas y convenciones
- 📁 Respetar las convenciones y consignas del curso para los nombres de variables funciones, componentes, eventos, y arquitectura de carpetas/archivos.
- 📘 Crear un documento en formato markdown documentando brevemente el proyecto

### 🏗️ Estructura de Componentes
```
App 📱
├── NavBar 🎯
│   └── CartWidget 🛒
├── ItemListContainer 📋
│   ├── ItemList 📜
│   └── Item 📦
├── ItemDetailContainer 🔍
│   ├── ItemDetail ℹ️
│   └── ItemCount 🔢
├── Cart 🛍️
│   └── CartItem 📝
└── CheckoutForm 💳
```

### 💡 Recomendaciones
- ✅ Asegúrate de que tu repositorio no presenta errores y es público. Te aconsejamos clonarlo y realizar una instalación de cero para testear tu app y detectar posibles errores.
- 🚀 Realizar deploy en servicios gratuitos (ej: Vercel, Netlify).
- 🔒 Si utilizaste variables de entorno para ocultar tus credenciales de Firebase, envíalas a tu profesor cuando realices la entrega.
- 📊 No es necesario que envíes el enlace a tu panel de Firestore: el mismo es visible solo para el usuario administrador (es decir, accediendo con tu cuenta de google)

### 📝 Formato de Entrega
- 📁 Link al repositorio de GitHub con el nombre "ProyectoFinal+Apellido", por ejemplo "ProyectoFinal+Fernandez"

### 🎯 Criterios de evaluación
La evaluación se basará en la implementación correcta de todos los requisitos mencionados anteriormente.

## 🛠️ Tecnologías Utilizadas

- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
- ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/martingarcia1/e-commerce-react.git

# Instalar dependencias
cd e-commerce-react
npm install

# Iniciar el proyecto en modo desarrollo
npm run dev
```

## 👤 Autor

**Martín García**
- GitHub: [@martingarcia1](https://github.com/martingarcia1)

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

---

⭐️ ¡Si te gustó este proyecto, no olvides darle una estrella! ⭐️
