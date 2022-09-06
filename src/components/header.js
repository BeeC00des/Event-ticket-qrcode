import React, { useState }from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import  './header.css'
import {Link } from 'react-router-dom';

export default function Home() {

    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    const closeMenu = () => {
      setOpen(false);
    };

  return (
    <div>
        <div className="nav-section">
          <Link to="/" className="nav-logo">
            logo
          </Link>
          <div onClick={handleClick} className="nav-icon">
            {open ? <FiX /> : <FiMenu />}
          </div>
          <ul className={open ? 'nav-links active' : 'nav-links'}>
            <li className="nav-item">
              <Link to="Event" className="nav-link" onClick={closeMenu}> Live Event</Link>
            </li>
            <li className="nav-item">
              <Link to="About" className="nav-link" onClick={closeMenu}> About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeMenu}> Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}> Artist Park</Link>
            </li>
          </ul> 
          <div className='button' onClick={dropModal}>
            Book Ticket
          </div>
        </div>
    </div>
  )
}
