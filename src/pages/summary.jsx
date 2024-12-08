import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './summarypage.css';

function Summary() {
  const location = useLocation();
  const { rentDate, rentLocation, name, contactNum, model,
    price, } = location.state || {};

  return (
    <div className="summary-container">
      <h1>Confirmation<br/></h1>
      <div className="details">
      <h2>MODEL: <span className="output">{model}</span></h2>
      <h2>PRICE RENT: <span className="output">{price}</span></h2>
    
        <p><strong>Rent Date:</strong> <span className="output">{rentDate}</span></p>
        <p><strong>Rent Location:</strong> <span className="output">{rentLocation}</span></p>
        <p><strong>Name:</strong> <span className="output">{name}</span></p>
        <p><strong>Contact Number:</strong> <span className="output">{contactNum}</span></p>
      </div>
      <p>Please take a screenshot/print of said confirmation to show on payment.
      <br/><br/>Thank you for choosing Express Car</p>
      <Link to="/home">
          <button>RETURN</button>
      </Link>
    </div>
  );
}

export default Summary;
