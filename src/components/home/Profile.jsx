import React from 'react';
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
      </div>
    </div>
  );
}

export default Profile;