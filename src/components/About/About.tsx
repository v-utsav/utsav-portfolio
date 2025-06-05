import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-300 pb-2">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hello! I'm <strong>John</strong>, a master's student in Computer Science in Germany, originally from Indonesia.
          I’m passionate about building modern, clean, and responsive UIs with <strong>React</strong>, and I'm growing my
          skills in backend development using <strong>Java Spring Boot</strong>. My long-term goal is to become a full-stack
          engineer with strong DevOps knowledge.
        </p>
      </div>
    </section>
  );
};

export default About;
