//importing all js files
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import MainPage from './MainPage';

function App() {
    const [currentView, setCurrentView] = useState('main'); // Set main page 

    const handleSwitchToRegister = () => {
        setCurrentView('register');
    };

    const handleSwitchToLogin = () => {
        setCurrentView('login');
    };

    const handleSwitchToForgotPassword = () => {
        setCurrentView('forgotPassword');
    };

    const handleLoginClick = () => {
        setCurrentView('login');
    };

    return (
        <div className="App">
            
            {currentView === 'main' && <MainPage onLogin={handleLoginClick} />} {/* Show main page */}
            {currentView === 'login' && <Login onSwitchToRegister={handleSwitchToRegister} onSwitchToForgotPassword={handleSwitchToForgotPassword} onBack={() => setCurrentView('main')} />} {/* Show login page */}
            {currentView === 'register' && <Register onSwitchToLogin={handleSwitchToLogin} />} {/* Show register page */}
            {currentView === 'forgotPassword' && <ForgotPassword onSwitchToLogin={handleSwitchToLogin} />} {/* Show forgot password page */}
        </div>
    );
    
}

export default App;
