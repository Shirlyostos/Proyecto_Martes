# Documentación de API

Este documento describe los endpoints principales que ofrece el backend (simulado con JSON Server o una API Express). Ajusta URLs y cuerpos según la implementación real.

## Puertos predeterminados

- Frontend (Vite en desarrollo): `5173` → http://localhost:5173
- Backend (Express / server.js): `3001` → http://localhost:3001
- JSON Server (si se usa): `3001` → http://localhost:3001

## Endpoints principales

### GET /tasks
- Descripción: Obtener la lista de tareas.
- Método: `GET`
- Parámetros query: `?q=` (búsqueda), `?authorId=`
- Respuesta (200):

```json
[ { "id":1, "title":"Tarea A", "description":"...", "status":"pending", "authorId":1 } ]
```

### GET /tasks/:id
- Descripción: Obtener una tarea por id.
- Método: `GET`
- Respuesta (200): tarea, (404) si no existe.

### POST /tasks
- Descripción: Crear una tarea.
- Método: `POST`
- Body (ejemplo):

```json
{
  "title": "Nueva tarea",
  "description": "Descripción",
  "status": "pending",
  "authorId": 1
}
```
- Respuesta (201): tarea creada.

### PUT /tasks/:id
- Descripción: Actualizar una tarea completa.
- Método: `PUT`
- Body: objeto tarea actualizado.
- Respuesta (200): tarea actualizada, (404) si no existe.

### PATCH /tasks/:id
- Descripción: Actualizar campos parciales de una tarea.
- Método: `PATCH`

### DELETE /tasks/:id
- Descripción: Eliminar una tarea.
- Método: `DELETE`
- Respuesta (200/204): confirmación de eliminación.

### Usuarios

- GET /users
- GET /users/:id
- POST /users

## Códigos de estado

- 200 OK: petición correcta y datos devueltos.
- 201 Created: recurso creado.
- 400 Bad Request: datos inválidos.
- 401 Unauthorized: autenticación requerida o fallida.
- 403 Forbidden: sin permisos.
- 404 Not Found: recurso no encontrado.
- 500 Internal Server Error: error en servidor.

## Ejemplos de respuesta de error

```json
{ "error": "Validation failed", "details": { "title": "required" } }
```

---

Si prefieres, puedo generar un archivo OpenAPI/Swagger basado en estos endpoints.
