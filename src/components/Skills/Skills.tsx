import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "Tailwind CSS", "Java", "Spring Boot",
    "Git", "Docker", "PostgreSQL", "Testing Library"
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-300 pb-2">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {skills.map(skill => (
            <li key={skill} className="bg-white shadow rounded p-3 text-center font-medium border">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
