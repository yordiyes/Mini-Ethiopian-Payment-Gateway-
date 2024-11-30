import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2024 Ethiopian Payment Gateway. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-blue-400 hover:text-blue-600">Facebook</a>
          <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
          <a href="#" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
