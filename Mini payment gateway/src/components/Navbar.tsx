import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-8 text-white">
        <li><a href="/" className="hover:text-gray-300">Home</a></li>
        <li><a href="/docs" className="hover:text-gray-300">Documentation</a></li>
        <li><a href="/dashboard" className="hover:text-gray-300">Dashboard</a></li>
        <li><a href="/resources" className="hover:text-gray-300">Resources</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
