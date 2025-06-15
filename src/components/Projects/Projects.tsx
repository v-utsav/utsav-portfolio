import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gray-50 text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        {/* Sample Project */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-6 text-left transition hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-2">Task Manager App</h3>
          <p className="text-sm mb-2 text-gray-600">
            A responsive task management app built using React, TypeScript, Firebase. It allows users to create and manage tasks with real-time sync and auth.
          </p>
          <div className="text-sm text-blue-700 flex gap-4 mt-2">
            <a href="https://github.com/john/task-manager" target="_blank" rel="noreferrer" className="underline">
              GitHub
            </a>
            <a href="https://task-manager.vercel.app" target="_blank" rel="noreferrer" className="underline">
              Live Demo
            </a>
          </div>
        </div>

        {/* Add more projects below */}
      </div>
    </motion.section>
  );
};

export default Projects;
