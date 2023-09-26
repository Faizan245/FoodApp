import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaBeer } from 'react-icons/fa';

export default function Footer() {
  return (
    <div><div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        </a>
        <span className="text-muted">© 2023 <i>MealPrep</i>, Inc</span>
      </div>
  
    
    <ul className="footer-icon">
                
                <li className="footer-item">
                    <a href="https://github.com/Faizan245" target="_blank" rel="noreferrer">
                    <FaBeer />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://www.linkedin.com/in/faizan-hussain-7943151b0/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://www.instagram.com/__vr_groot__/" target="_blank" rel="noreferrer">
                        <FaInstagramSquare />
                    </a>
                </li>
            </ul>
    </footer>
  </div>
  </div>
  )
}
