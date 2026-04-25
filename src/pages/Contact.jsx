import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSuccess('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="max-w-xl mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Contact Me</h1>
      
      <div className="bg-white p-8 rounded-2xl border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              rows="4" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-600 mb-4">Or connect with me on:</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/tory-deutsch-967021200/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600 font-medium">GitHub</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
