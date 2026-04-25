import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay in Touch</h3>
        <div className="flex space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/tory-deutsch-967021200/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
