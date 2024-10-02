import React from 'react';
import './MainPage.css'; // Import the new CSS design

const MainPage = ({ onLogin }) => {
    return (
        <div className="main-container">
            <header className="header">
                <div className="header-content">
                    <h1>Indian Restaurant</h1>
                    <p>Discover authentic Indian cuisine</p>
                    <button className="login-button" onClick={onLogin}>Login</button>
                </div>
            </header>
            <main className="main-content">
                <div className="slideshow-container">
                    <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slideshow 1" className="slide"/>
                  </div>
                  <div className="description">
    <h2>Welcome to Our Indian Restaurant</h2>
    <p>
        At our restaurant, we believe that every meal should be an unforgettable experience. 
        We pride ourselves on offering an authentic taste of India, bringing together a fusion of spices and flavors from different regions. 
        Our chefs are experts in traditional Indian cooking techniques, ensuring that every dish is prepared with the utmost care and passion.
    </p>
    <p>
        From rich, creamy curries to freshly baked naan, our menu offers a variety of options for everyone, including vegetarian, vegan, and gluten-free dishes. 
        Each ingredient is sourced locally, ensuring freshness and quality in every bite.
    </p>
    <p>
        Enjoy your meal in a warm, inviting atmosphere that reflects the vibrant culture of India. 
        Whether you're celebrating a special occasion or just looking for a delicious meal, our friendly staff is here to provide exceptional service to make your dining experience memorable.
    </p>
    <p>
        Join us for our special events and promotions throughout the year, where you can savor exquisite flavors and indulge in the rich traditions of Indian cuisine.
    </p>
    <p>
        We look forward to welcoming you to our restaurant soon, where every visit is a new adventure for your taste buds!
    </p>
</div>

            </main>
            <footer className="footer">
    <div className="footer-content">
        <div className="footer-section about">
            <h3>About Us</h3>
            <p>
                Our restaurant offers a true taste of India with a focus on quality, authenticity, and service. 
                From our vibrant atmosphere to our delicious dishes, we aim to create an unforgettable dining experience for every guest.
            </p>
        </div>
        <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><strong>Phone:</strong> 4038727240x</p>
            <p><strong>Email:</strong> barindersinghbatth@gmail.com</p>
        </div>
        <div className="footer-section address">
            <h3>Visit Us</h3>
            <p>108 Bell Street, Red Deer, Alberta, T4R1M8</p>
        </div>
        <div className="footer-section hours">
            <h3>Opening Hours</h3>
            <p><strong>Monday - Friday:</strong> 10:00 AM - 10:00 PM</p>
            <p><strong>Saturday - Sunday:</strong> 10:00 PM - 12:00 PM</p>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 Our Restaurant. All rights reserved.</p>
      
    </div>
</footer>

        </div>
    );
};

export default MainPage;
