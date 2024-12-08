import { useState } from 'react';
import './landingpage.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase.jsx';
import { signInWithEmailAndPassword } from 'firebase/auth';  
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Landing() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Log In Successfully");
            toast.success("Log In Successfully!", { position: "top-center" });
            setTimeout(() => {
                navigate("/home");  
            }, 3000);
        } catch (error) {
            console.log(error);
            toast.error(error.message, { position: "bottom-center" });
        }
    };

    return (
        <>
            <div className="abstract-design"></div>

            <div className="login-container">
                <h1>WELCOME TO <br /> EXPRESS CAR</h1>
                <form onSubmit={handleLogin}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)}  
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">LOG IN</button>
                </form>
                <Link to="/register">Don't have an account?</Link>
            </div>
            <ToastContainer />  
        </>
    );
}

export default Landing;
