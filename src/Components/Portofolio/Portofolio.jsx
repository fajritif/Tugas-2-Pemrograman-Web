import React from 'react';
import './App.css';
import './Portofolio.css';


function App() {
  // Daftar proyek dalam portofolio
  const projects = [
    {
      id: 1,
      title: "Graph Simulator",
      technologies: "Java",
    
    },
    {
      id: 2,
      title: "Sertifikat Oracle",
      technologies: "Oracle Academy",
     
    },
  ];

  return (
    <div className="container">
      <div className="portfolio">
        <h1>Portofolio</h1>
        {projects.map(project => (
          <div key={project.id} className="project">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Teknologi yang Digunakan:</strong> {project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
