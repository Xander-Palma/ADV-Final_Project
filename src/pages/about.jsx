import './aboutpage.css'
import loc from "../assets/loc.png"
import cal from "../assets/cal.png"
import check from "../assets/check.png"
function About() {
 

    return (
        <>
        
        
        <div className="container1">
                <h1 className='headline1'>About Us</h1>
                <h2 className='title1'>Welcome to EXPRESS CAR</h2>
                <p className="intro-text1">
                    At EXPRESS CAR, we believe that every journey is an opportunity for adventure. Whether you're traveling
                    for business, planning a family vacation, or exploring a new city, we are here to provide you with the
                    perfect vehicle to make your experience memorable.
                </p>
                <br />
                <br />
                <h2 className='headline1'>HOW IT WORKS</h2>
                <br />
                <br />
                <h1 className='semititle'>RENT TO GO FOLLOWING 3 WORKING STEPS</h1>
                <br />
                <br />
                <div className="steps">
                    <div className="step">
                        <img
                            alt="Location icon"
                            height="200"
                            src={loc}
                            width="200"
                        />
                        <h3 className='semititle'>1. Choose a location</h3>
                    </div>
                    <div className="step">
                        <img
                            alt="Calendar icon"
                            height="200"
                            src={cal}
                            width="200"
                        />
                        <h3 className='semititle'>2. Pick-up Date</h3>
                    </div>
                    <div className="step">
                        <img
                            alt="Calendar Check icon"
                            height="200"
                            src={check}
                            width="200"
                        />
                        <h3 className='semititle'>3. Book your car</h3>
                    </div>
                </div>
            </div>

            
        </>
    )
  }
  
  export default About