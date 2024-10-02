// src/App.js

import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import MainPage from './MainPage';

function App() {
    const [currentView, setCurrentView] = useState('main'); // Set initial view to main

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
            {currentView === 'main' && <MainPage onLogin={handleLoginClick} />}
            {currentView === 'login' && <Login onSwitchToRegister={handleSwitchToRegister} onSwitchToForgotPassword={handleSwitchToForgotPassword} onBack={() => setCurrentView('main')} />}
            {currentView === 'register' && <Register onSwitchToLogin={handleSwitchToLogin} />}
            {currentView === 'forgotPassword' && <ForgotPassword onSwitchToLogin={handleSwitchToLogin} />}
        </div>
    );
}

export default App;
