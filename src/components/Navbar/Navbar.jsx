import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
function Navbar() {
  return (
     <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">JP REDDY</div>
        </div>
        <div className="n-right"></div>
        <div className="n-list">
            <ul>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>   
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
            </ul>
        </div>
        <button class="button n-button">Contact</button>
     </div>
  )
}

export default Navbar