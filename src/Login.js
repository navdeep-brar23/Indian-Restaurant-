import React, { useState } from 'react';
import './Login.css'; // Importing CSS 

const Login = ({ onSwitchToRegister, onSwitchToForgotPassword, onBack }) => {
    const [username, setUsername] = useState(''); // State for username input
    const [password, setPassword] = useState(''); // State for password input
    const [message, setMessage] = useState('');   // State for feedback message

    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        // initial fake username and pass
        const fakeUsername = 'Barinder';
        const fakePassword = 'Barinder123';

        // login authentication 
        if (username === fakeUsername && password === fakePassword) {
            setMessage('Login successful!'); // Display success message
        } else {
            setMessage('Invalid username or password.'); // Display error message
        }
    };

    return (
        <div className="login-container"> {/* Main container */}
    <div className="login-image"> {/* Container for the image  */}
        <img src="https://img.freepik.com/free-photo/top-view-fresh-delicious-chinese-food-dark-background_24972-2170.jpg?w=996&t=st=1727752454~exp=1727753054~hmac=2804ba8019ce58d1d59a1e62d114ea83f47eb198c215b42932636f3c2bb553bc" alt="Login" /> {/* Image displayed next to the form */}
    </div>
    <div className="form-container"> {/* Container for the form elements */}
        <h1>Login</h1> {/* Heading  */}
        
        <form onSubmit={handleSubmit}> {/* submission triggers handleSubmit */}
            <div className="input-group">
                <label htmlFor="username">Username or Email</label> {/* Label for the username input field */}
                <input
                    type="text"
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} // Updates username state on input change
                    required 
                    placeholder="Enter your username or email" // Placeholder text for username field
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label> {/* Label for the password input field */}
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Updates password state on input change
                    required 
                    placeholder="Enter your password" // Placeholder text for password field
                />
            </div>
            <button type="submit" className="button-margin">Login</button> {/* Button to submit login form */}
            <button type="button" onClick={onBack} className="button-margin">Back</button> {/* Button to go back to the main page */}
            {message && <div className="message">{message}</div>} {/* Displays login success or error message */}
        </form>
        <p><a href="#" onClick={onSwitchToForgotPassword}>Forgot Password?</a></p> {/* Link for forgot password page */}
        <p>Don't have an account? <a href="#" onClick={onSwitchToRegister}>Register here</a></p> {/* Link for registration page */}
    </div>
</div>

    );
};

export default Login;
