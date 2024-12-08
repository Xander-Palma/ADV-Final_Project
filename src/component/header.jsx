import './header.css'
import carLogo from '../assets/carlogo.png'   
import phoneIcon from '../assets/phone.png'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.jsx';

function Header() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out");
            navigate('/', { replace: true }); 
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <div className="navbar">
            <div className="logo">
            <span>EXPRESS CAR</span>
                <img 
                    alt="Car logo" 
                    src={carLogo}
                />
            </div>
            <div className="menu">
                <Link to="/home">HOME</Link>
                <Link to="/rent">RENT</Link>
                <Link to="/about">ABOUT US</Link>
                <div className="phone">
                    <img src={phoneIcon} />
                    <span>+1 256 879 8754</span>
                </div>
                <button className="logout-button" onClick={handleLogout}>
                    LOGOUT
                </button>
            </div>
        </div>
    )
  }
  
  export default Header