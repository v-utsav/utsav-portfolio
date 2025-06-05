import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-300 pb-2">Contact</h2>
        <p className="mb-4">Feel free to reach out via email or connect on LinkedIn.</p>
        <ul>
          <li>Email: <a href="mailto:your.email@example.com" className="text-blue-600">your.email@example.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/your-linkedin" className="text-blue-600">your-linkedin</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
