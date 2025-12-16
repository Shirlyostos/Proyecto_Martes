# Lista de Tareas - Sistema Colaborativo de Gestión de Tareas

## 1. README principal (este archivo)

a) Descripción del proyecto

- Team To-Do: aplicación web para gestión colaborativa de tareas en equipo. Permite registro/login, creación/edición/eliminación de tareas, asignación por usuario, búsqueda y filtros.

b) Stack tecnológico usado

- Frontend: React, Vite, Tailwind CSS, React Router, Axios.
- Backend: Node.js (simulado con JSON Server o Express), db (JSON o DB remota en Railway).

c) Requisitos previos

- Node.js v18+ y npm o yarn.
- (Opcional) Git para clonar.

d) Cómo ejecutar el frontend en local

1. Desde la raíz del proyecto:

```bash
cd Proyecto_Martes
npm install
npm run dev
```

o si usas yarn:

```bash
yarn
yarn dev
```

El frontend utiliza Vite y se servirá en http://localhost:5173 por defecto.

e) Cómo ejecutar el backend en local

1. Ir a la carpeta `backend` e instalar dependencias:

```bash
cd backend
npm install
npm run dev
```

Si se usa JSON Server (db.json incluido), un script típico sería:

```bash
npx json-server --watch db.json --port 4000
```

f) Cómo configurar variables de entorno (ejemplo de `.env.example`)

Coloca un archivo `.env` en la raíz o en `backend/` según corresponda. Ejemplo mínimo:

```
# FRONTEND
VITE_API_URL=http://localhost:4000

# BACKEND (si aplica)
PORT=4000
DATABASE_URL=
JWT_SECRET=tu_secreto_aqui
```

Guarda una copia como `.env.example` sin claves sensibles para el repo.

g) Links a despliegues (rellenar con URLs del proyecto)

- Frontend (Vercel): https://your-frontend.vercel.app
- Backend (Render): https://your-backend.onrender.com
- Railway (DB / captura): https://railway.app/project/your-project (o captura de pantalla si no está disponible)

---

## 2. Documentos complementarios

- Diagrama y descripción de arquitectura: [ARQUITECTURA.md](ARQUITECTURA.md)
- Documentación de API: [API.md](API.md)

## Contribuir

Si quieres contribuir, crea un fork y abre un pull request. Para cualquier duda contacta al autor.

---
Proyecto generado y mantenido como proyecto final académico.