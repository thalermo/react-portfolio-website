import React from 'react';
import Profile from "./profile/Profile"
import Footer from './footer/Footer';
import "./home.css"

function Home() {
  return (
    <div className='home-container'>
      <Profile />
      <Footer />
    </div>
  );
}

export default Home;