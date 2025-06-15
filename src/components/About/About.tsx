import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-gray-50 text-gray-800 flex items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hello! I'm <span className="font-semibold">John</span> — currently pursuing my Master's in Computer Science in Germany.
          I specialize in frontend engineering with <span>React</span>, and am expanding into backend development using
          <span> Java (Spring Boot)</span> and DevOps practices like Docker and CI/CD.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
