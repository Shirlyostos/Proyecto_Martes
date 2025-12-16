const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const DB_PATH = './db.json';

const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
const writeDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

// GET /tasks
app.get('/tasks', (req, res) => {
  const data = readDB();
  res.json(data.tasks || []);
});

// POST /tasks
app.post('/tasks', (req, res) => {
  const data = readDB();
  const taskData = req.body;

  if (!data.tasks) data.tasks = [];

  // Validar que la tarea tenga texto y autor
  if (!taskData.text || !taskData.author) {
    return res.status(400).json({ error: 'La tarea debe tener texto y autor.' });
  }

  const newId = data.tasks.length > 0 ? Math.max(...data.tasks.map(t => t.id)) + 1 : 1;
  const newTask = { ...taskData, id: newId };
  data.tasks.unshift(newTask);

  writeDB(data);
  res.json(newTask);
});

// PUT /tasks/:id
app.put('/tasks/:id', (req, res) => {
  const data = readDB();
  const id = parseInt(req.params.id);
  const updatedTask = req.body;
  
  const index = data.tasks.findIndex(t => t.id === id);
  
  if (index !== -1) {
    data.tasks[index] = updatedTask;
    writeDB(data);
    res.json(updatedTask);
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
});

// DELETE /tasks/:id
app.delete('/tasks/:id', (req, res) => {
  const data = readDB();
  const id = parseInt(req.params.id);
  
  data.tasks = data.tasks.filter(t => t.id !== id);
  
  writeDB(data);
  res.json({ ok: true });
});

// POST /login
app.post('/login', (req, res) => {
  const data = readDB();
  const { username, password: bodyPassword } = req.body;
  
  const user = data.users?.find(u => u.username === username && u.password === bodyPassword);
  
  if (user) {
    // No enviar la contraseña al cliente
    const { password, ...userToReturn } = user;
    res.json([userToReturn]); // Devolver un array con el usuario, como espera el frontend
  } else {
    res.json([]); // Devolver un array vacío si no se encuentra, como espera el frontend
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});