import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './rentformpage.css';

function RentFormCivic() {
  const [formData, setFormData] = useState({
    rentDate: '',
    rentLocation: '',
    name: '',
    contactNum: '',
    model: 'HONDA CIVIC', 
    price: '2,500/DAY',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/summary', { state: formData }); 
  };

  return (
    <div className="container3">
      <div className="header">
        <h1>MODEL: HONDA CIVIC</h1>
        <h2>PRICE RENT: 2,500/DAY</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rentDate">Rent Date</label>
          <input
            type="date"
            id="rentDate"
            name="rentDate"
            value={formData.rentDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rentLocation">Rent Location</label>
          <input
            type="text"
            id="rentLocation"
            name="rentLocation"
            value={formData.rentLocation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNum">Contact num:</label>
          <input
            type="text"
            id="contactNum"
            name="contactNum"
            value={formData.contactNum}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" style={{ justifyContent: 'center' }}>
          <input type="submit" value="Confirm" />
        </div>
      </form>
    </div>
  );
}

export default RentFormCivic;
