import React from 'react';

const Navbar: React.FC = () => {
  const links = ["about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">John.dev</h1>
        <ul className="flex gap-6 text-gray-800 text-sm font-medium">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link}`} className="hover:text-blue-600 transition-colors duration-300 capitalize">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
