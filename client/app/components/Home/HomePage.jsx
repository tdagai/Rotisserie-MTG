import React from 'react';
import NavBar from './NavBar/NavBar.jsx'
import Footer from './Footer/Footer.jsx'
import './HomePage.css';

const HomePage = () => {
  return (
    <div id='homepage-container' >
      <NavBar />
      <div id='homepage-content' >
        content
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;