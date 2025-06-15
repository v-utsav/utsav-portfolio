import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaGitAlt, FaDocker, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSpringboot, SiJest, SiGithubactions } from 'react-icons/si';
import type { IconType } from 'react-icons';

/*
const skills = [
  { icon: <FaReact size={30} />, name: "React" },
  { icon: <SiTypescript size={30} />, name: "TypeScript" },
  { icon: <SiTailwindcss size={30} />, name: "Tailwind CSS" },
  { icon: <FaJava size={30} />, name: "Java" },
  { icon: <SiSpringboot size={30} />, name: "Spring Boot" },
  { icon: <FaDocker size={30} />, name: "Docker" },
  { icon: <FaGitAlt size={30} />, name: "Git" },
  { icon: <SiJest size={30} />, name: "Jest / React Testing Library" },
  { icon: <SiGithubactions size={30} />, name: "GitHub Actions" },
];
*/

type Skill = {
  icon: IconType;
  name: string;
};


// 1. Store component references instead of JSX
const skills: Skill[] = [
  { icon: FaReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaJava, name: "Java" },
  { icon: SiSpringboot, name: "Spring Boot" },
  { icon: FaDocker, name: "Docker" },
  { icon: FaGitAlt, name: "Git" },
  { icon: SiJest, name: "Jest / React Testing Library" },
  { icon: SiGithubactions, name: "GitHub Actions" },
];


const Skills: React.FC = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen px-6 py-20 bg-white text-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, idx) => {
            const Icon = skill.icon as React.FC<{ size?: number }>;
            return (
              <div key={idx} className="flex flex-col items-center gap-2 text-blue-800">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Icon size={30} />
                </div>
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            );
          })}

        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
