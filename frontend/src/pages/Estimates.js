import React, { useState } from 'react';
import './Estimates.css';

function Estimates() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      let formatted = '';

      if (cleaned.length <= 3) {
        formatted = cleaned;
      } else if (cleaned.length <= 6) {
        formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
      } else {
        formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
      }

      setFormData(prev => ({ ...prev, phone: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/estimates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          address: formData.address
          // image not sent yet
        })
      });

      if (response.ok) {
        alert('✅ Estimate submitted successfully!');
        setFormData({ name: '', phone: '', address: '', image: null });
      } else {
        alert('❌ Failed to submit estimate. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('❌ Server error. Try again later.');
    }
  };

  return (
    <div className="estimate-container">
      <form onSubmit={handleSubmit} className="estimate-box">
        <h2>Request an Estimate</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Service Address / Area</label>
          <input
            type="text"
            name="address"
            id="address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image (optional)</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="cta-button">Submit</button>
      </form>
    </div>
  );
}

export default Estimates;
