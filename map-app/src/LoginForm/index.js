import React, { useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";
import {useNavigate} from 'react-router-dom';
import "./index.css"

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const [isError , setIsError] = useState(false); 
    const [errorMsg , setErrorMsg] = useState("");
    const navigate = useNavigate();

    const typeUserName = (event) =>{
        setUsername(event.target.value)
    }
    const typePassword = (event) =>{
        setPassword(event.target.value)
    }
    const submitFailure = (errorMsg) => {
        setIsError(true) 
        setErrorMsg(errorMsg)
    }
    const submitSuccess = (jwtToken)=>{ 
        Cookies.set("jwt_token" , jwtToken , {expires : 30}) 
        navigate("/dashboard")
    }
    
    const submitForm = async (event) => { 
        event.preventDefault()
        try{
            const response = await axios.post('http://localhost:5000/api/login', { username, password }); 
            const updatedData = response.data;  // Get the response data

            if (updatedData.token) {
                console.log(updatedData);
                submitSuccess(updatedData.token);
            } else {
                submitFailure(updatedData.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            alert('Login failed',error);
            submitFailure('An error occurred during login. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={submitForm} className="login-form"> 
                <h1 className="main-heading">Login Page</h1>
                <div className="input-group"> 
                    <label htmlFor="username" className="label">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={typeUserName}
                        placeholder="Username" 
                        id="username" 
                        className="input"
                    /> 
                </div>
                <div className="input-group"> 
                    <label htmlFor="password" className="label">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={typePassword}
                        placeholder="Placeholder" 
                        id="password" 
                        className="input"
                    /> 
                </div>
                <button type="submit" className='login-btn'>Login</button> 
                {isError && <p className='err-msg'>*{errorMsg}</p>}
            </form>
        </div>
    );
};

export default LoginForm;
