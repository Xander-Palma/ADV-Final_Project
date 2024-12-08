import { useState } from 'react';
import './regispage.css';
import { auth } from '../firebase.jsx';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Account Created");
            toast.success("Account Created!", { position: "top-center" });
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

            <div className="container">
                <h1>REGISTER</h1>
                <form onSubmit={handleRegister}>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />

                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />

                    <button type="submit">REGISTER</button>
                </form>
            </div>

           
            <ToastContainer />
        </>
    );
}

export default Register;
