import './homepage.css'
import { useState } from 'react';
import show from '../assets/show.png'
import civic from '../assets/civic.png'
import bgcivic from '../assets/bgc.png'
import ford from '../assets/ford1.png'
import bgford from '../assets/fgc.png'
import van from '../assets/test.png'
import toyo from '../assets/van.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Home() {
   
    return (
        <div className="container1">
        <div className="main-content">
            <div className="text">
                <p className="intro-text">EXPRESS CAR</p>
                <h1 className="headline">Looking to save more on your rental car?</h1>
                <p className="intro-text">
                    Discover Car Rental options in your city. Select from a range of car options.
                </p>
               <Link to={'/rent'}><button >BOOK NOW!</button></Link>
            </div>
            <div className="image">
                <img
                    alt="Ford Truck"
                   
                    src={show}
                   
                />
            </div>
        </div>
        <div className="cars-section">
            <h2>Check out our Cars!</h2>
        
        
    <div className="cards-container">
        <div className="card">
            <div className="wrapper">
                <img src={civic} className="cover-image" alt="Civic Car" />
                <img src={bgcivic} className="character" alt="Civic Logo" />
            </div>
        </div>

        <div className="card">
            <div className="wrapper">
                <img src={ford} className="cover-image" alt="Ford Car" />
                <img src={bgford} className="character" alt="Ford Logo" />
            </div>
        </div>

        <div className="card">
            <div className="wrapper">
                <img src={van} className="cover-image" alt="Toyota Van" />
                <img src={toyo} className="character" alt="Toyota Logo" />
            </div>
        </div>
    </div>    
  
    </div>

  


    </div>
    
    )
  }
  
  export default Home