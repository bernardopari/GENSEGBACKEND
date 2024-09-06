// frontend/pages/index.js
"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [projects, setProjects] = useState([]);

  // Obtener proyectos desde el backend
  useEffect(() => {
    fetch('http://localhost:4000/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name} - {project.status}</li>
        ))}
      </ul>
    </div>
  );
}
