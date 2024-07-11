import React, { useState } from 'react';
import LogoImage from '../images/s-logo.png'
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/submitContactForm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Error submitting the form. Please try again later.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error('Server error. Please try again later.');
    }
  };


  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4 text-pink-700">Contact Us</h1>
      <p className="text-xl mb-4">
        Have questions or feedback? We'd love to hear from you! Please fill out
        the form below.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-xl mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-xl mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-xl mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded-lg"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit
            
          </button>
        </div>

      </form>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={LogoImage} style={{ width: '250px', height: '250px' }} alt="Logo" />
      </div>
    </div>
  );
};

export default Contact;