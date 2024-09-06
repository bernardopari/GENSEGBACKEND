// backend/src/index.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(cors()); // Para permitir las solicitudes del frontend
app.use(express.json());

// Ruta para obtener todos los proyectos
app.get('/projects', async (req, res) => {
  const projects = await prisma.project.findMany();
  res.json(projects);
});

// Ruta para crear un nuevo proyecto
app.post('/projects', async (req, res) => {
  const { name, status } = req.body;
  const newProject = await prisma.project.create({
    data: { name, status },
  });
  res.json(newProject);
});

const port = 4000;
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
