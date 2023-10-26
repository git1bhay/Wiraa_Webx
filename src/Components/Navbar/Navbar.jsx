
import React from 'react';
import './Navbar.css'; 

import img1 from '../Images/download.png';

function Navbar() {
  return (
    <nav xs="12" className="navbar navbar-expand-lg navbar-light" style={{ color: 'rgb(255, 255, 255)', padding: '20px' }}>
      <div className="left-side">
        <a href="/">
          <img src={img1} alt="Logo" className="top-img" />
        </a>
      </div>
      <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="justify-content-end navbar-collapse collapse" id="basic-navbar-nav">
        <div className="me-auto navbar-nav" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginLeft: '98%' }}>
          <a className="learn" href="/#">
            <button style={{ border: 'none', backgroundColor: 'transparent' }}>
              <b> Learn </b>
            </button>
          </a>
          <a className="startup" href="https://www.wiraa.com/Wiraastartup">
            <button style={{ border: 'none', backgroundColor: 'transparent' }}>
              <b>Startup</b>
            </button>
          </a>
          <a href="https://www.wiraa.com/Account/login">
            <button className="navbar-button login headerloginbutton">
              <b>Login</b>
            </button>
          </a>
          <a href='https://www.wiraa.com/Account/singup' style={{textDecoration:'none'}}>
            <button className="navbar-button join headersignupbutton d-none d-sm-block" style={{ marginRight: '60px' }}>
              <b>Signup</b>
            </button>
          </a>
          

        </div>
      </div>
    </nav>

  );
}

export default Navbar;
