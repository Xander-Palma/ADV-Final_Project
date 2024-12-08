import React from 'react';
import { Link } from 'react-router-dom';
import './rentpage.css';
import ford from '../assets/rentford.png';
import civic from '../assets/rentcivic.png';
import van from '../assets/rentvan.png';

function Rent() {
  return (
    <div className="container2">
      <div className="card1">
        <img alt="Red Ford Raptor" src={ford} />
        <h3>Ford Raptor</h3>
        <Link to="/rentformford">
          <button>Rent</button>
        </Link>
      </div>
      <div className="card1">
        <img alt="Honda Civic" src={civic} />
        <h3>Honda Civic</h3>
        <Link to="/rentformcivic">
          <button>Rent</button>
        </Link>
      </div>
      <div className="card1">
        <img alt="Toyota Van" src={van} />
        <h3>Toyota Van</h3>
        <Link to="/rentformvan">
          <button>Rent</button>
        </Link>
      </div>
    </div>
  );
}

export default Rent;
