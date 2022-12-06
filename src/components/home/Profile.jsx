import React from 'react';

import { TypeAnimation } from 'react-type-animation';
import "./profile.css"

import { VscGithub } from 'react-icons/vsc';
import { IoLogoLinkedin } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';


function Profile() {
  return (
    <div className='profile-container' >
      <div className="profile-parent">
        <div className="profile-details">
          <div className="socials">

            <div className="socials-icons">
              <a href="https://github.com/thalermo">
                <VscGithub />
              </a>
              <a href="https://www.linkedin.com/in/moran-thaler/">
                <IoLogoLinkedin />
              </a>
              <a href="https://www.instagram.com/joy_thesportpug/">
                <AiFillInstagram />
              </a>
            </div>

          </div>

          <div className="profile-details-name">
            <span className='primary-text'>
              {" "} Hello, I'M <span className='highlighted-text'>Moran</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className='primary-text'>
              <span className='primary-text'>
                {" "}
                <h1>
                  {" "}
                  <TypeAnimation
                    sequence={[
                      'Developer',
                      2000, // Waits 2s
                      'My name is Moran', // Deletes  and types
                      2000, // Waits 2s
                      "Front-end Developer",
                      3000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2em' }}
                  />
                </h1>
                <span className="profile-role-tagline">
                  creating application with passion
                </span>
              </span>
            </span>
          </div>

          <div className="profile-options">
            {" "}Hire Me{" "}
            <a href="file.pdf" download="file.pdf">
              <button className="btn primary-btn">
                Get Resume</button>
            </a>
          </div>
          <div className="profile-picture">
            <div className="profile picture-background">

            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Profile;