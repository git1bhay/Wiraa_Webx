import React from 'react';
import './Footer.css'
import "bootstrap/dist/css/bootstrap.min.css";
import wiraaimg from '../Images/wiraaimg1.png'

import { FaFacebook,FaInstagram,FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <section className="bg-dark mt-5 Footer_content">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-12">
            <img src={wiraaimg} alt="" className="footerimage" />
            <p className="text-light footertext mb-5">Connect With Experts</p>
          </div>
          <div className="col-sm-2 col-6">
            <ul className="footerul1">
              <li className="text-light">
                <p>Join</p>
              </li>
              <li className="text-light no-underlines">
                <a href="/About Us">
                  <p >About Us</p>
                </a>
              </li>
              <li className="text-light">
                <p>FAQ</p>
              </li>
              <li className="text-light">
                <p>Blog</p>
              </li>
              <li className="text-light no-underlines">
                <a href="/">
                  <p>Professional Agreement</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-6">
            <ul className="footerul1">
              <li className="text-light no-underlines">
                <a href="/Career">
                  <p>Career</p>
                </a>
              </li>
              <li className="text-light no-underlines">
                <a href="/ContactComponent">
                  <p>Contact</p>
                </a>
              </li>
              <li className="text-light no-underlines">
                <a href="/">
                  <p>Privacy Policy</p>
                </a>
              </li>
              <li className="text-light">
                <p>Terms &amp; Conditions</p>
              </li>
              <li className="text-light no-underlines">
                <a href="/">
                  <p>Client Agreement</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 col-12">
            <h5 className="text-light">Follow Us</h5>
            <ul className="footerul footerul1 mt-4">
              <li className="text-light">
                <FaFacebook/>
                
              </li>
              <li className="text-light">
                <FaInstagram/>
              </li>
              <li className="text-light">
                <FaLinkedin/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
