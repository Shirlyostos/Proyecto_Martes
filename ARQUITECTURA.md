# Arquitectura del Proyecto

## Resumen

Documento de arquitectura que complementa el README. Incluye un diagrama sencillo (C4 Nivel 1) y descripciones de componentes, flujo típico y pipeline de CI.

## Diagrama (Draw.io)

- Recomendación: abrir draw.io (diagrams.net) y crear un diagrama C4 Nivel 1 con los siguientes elementos:
  - Usuario
  - Frontend (Vercel)
  - Backend (Render / API)
  - Base de datos (Railway / Postgres / Mongo)

- Flujo general: Usuario → Frontend → Backend → DB

## Puertos predeterminados

- Frontend (Vite en desarrollo): `5173` → http://localhost:5173
- Backend (Express / server.js): `3001` → http://localhost:3001
- JSON Server (si se usa): `3001` → http://localhost:3001

Puedes exportar el diagrama a `ARQUITECTURA.png` o adjuntar el fichero `.drawio` al repo.

## Descripción de componentes

- Frontend
  - Qué hace: Interfaz de usuario, autenticación, llamadas a la API, renderizado de listas y formularios.
  - Principales pantallas: Login, Dashboard, Lista de Usuarios, Detalle/Edición de Tarea, Búsqueda.

- Backend
  - Capas: Router → Controladores → Servicios → Repositorio (persistencia).
  - Rutas principales: `/tasks`, `/users`, `/auth` (login/register si aplica).

- Base de datos
  - Modelo de datos (ejemplo JSON):
    - users: { id, name, email }
    - tasks: { id, title, description, status, authorId, createdAt, updatedAt }

## Flujo de una operación típica (Crear una tarea)

1. Usuario en el frontend rellena el formulario y pulsa "Crear".
2. Frontend valida el formulario y envía POST `/tasks` con el body de la tarea.
3. Backend recibe la petición, valida/autoriza, crea la entidad en la DB y devuelve 201 con la tarea creada.
4. Frontend recibe la respuesta y actualiza la UI (lista de tareas) y muestra una notificación.

## Pipeline de CI (breve)

- Triggers: push a `main` o PR hacia `main`.
- Pasos típicos:
  1. Instalar dependencias (`npm install`).
  2. Ejecutar linters (`npm run lint`).
  3. Ejecutar tests (si existen) (`npm test`).
  4. Build del frontend (`npm run build`).
  5. Despliegue automático en entornos (Vercel/Render) desde la rama `main` o tags.

Incluye en la pipeline comprobaciones de seguridad y revisión de dependencias si es posible.
