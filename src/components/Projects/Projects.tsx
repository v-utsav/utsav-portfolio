import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
  tech: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description: "A responsive personal portfolio site built using React, TypeScript, and Tailwind CSS.",
      link: "#",
      tech: ["React", "TypeScript", "Tailwind"]
    },
    {
      title: "API Backend with Spring Boot",
      description: "A RESTful Java backend service with JWT auth, Dockerized and deployed via CI/CD.",
      link: "#",
      tech: ["Java", "Spring Boot", "Docker"]
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-300 pb-2">Projects</h2>
        <div className="grid gap-6 mt-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded shadow-sm p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-2 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-gray-200 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="text-blue-600 text-sm mt-2 inline-block">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
