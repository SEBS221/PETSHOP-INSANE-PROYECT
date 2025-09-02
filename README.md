# PETSHOP-INSANE-PROYECT
# 🐾 PetShop - Plataforma de Gestión de Productos y Gatos

## 📌 Descripción
**PetShop** es una aplicación fullstack desarrollada con **Vue 3 (Vite)** en el frontend y **Node.js + Express + MongoDB Atlas** en el backend.  
El objetivo del proyecto es permitir la gestión de productos y gatos en una tienda de mascotas digital, incluyendo un **panel de administración (AdminPanel)** para manejar la base de datos de forma sencilla.

---

## 🚀 Características principales
- 📦 **Gestión de productos** (crear, listar, editar y eliminar).
- 🐱 **Gestión de gatos** (crear, listar, editar y eliminar).
- 🖥️ **Admin Panel** intuitivo para administración vía frontend.
- 🌐 Backend conectado a **MongoDB Atlas**.
- 🔗 **API REST** para comunicación entre frontend y backend.
- ⚡ Proyecto construido con **Vite** para mayor velocidad en el desarrollo.

---

## 🛠️ Tecnologías utilizadas
- **Frontend:**
  - Vue 3
  - Vite
  - Axios
  - TailwindCSS (opcional para estilos)
- **Backend:**
  - Node.js
  - Express
  - MongoDB Atlas + Mongoose
  - CORS

---

## 📂 Estructura del proyecto
PetShop/
│── backend/
│ ├── routes/
│ │ ├── cats.js
│ │ └── products.js
│ ├── models/
│ │ ├── Cat.js
│ │ └── Product.js
│ ├── server.js
│── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── AdminPanel.vue
│ │ └── App.vue
│ ├── vite.config.js
│── README.md


---

## ⚙️ Instalación y uso

### 🔹 Backend
bash
cd backend
npm install
npm run start
cd frontend
npm install
npm run dev

🔗 Endpoints disponibles
🐱 Gatos

GET /api/cats → Lista todos los gatos

POST /api/cats → Crea un gato

PUT /api/cats/:id → Edita un gato

DELETE /api/cats/:id → Elimina un gato

📦 Productos

GET /api/products → Lista todos los productos

POST /api/products → Crea un producto

PUT /api/products/:id → Edita un producto

DELETE /api/products/:id → Elimina un prod
<img width="1185" height="867" alt="image" src="https://github.com/user-attachments/assets/b7032a3b-31ab-4de7-ab28-4bc743dc6c18" />
