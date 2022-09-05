import React, { useState }from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import  './header.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Home() {

    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    const closeMenu = () => {
      setOpen(false);
    };

  return (
    <div className="header-section">
      <Router>
        <div className="nav-section">
          <Link to="/" className="nav-logo">
            logo
          </Link>
          <div onClick={handleClick} className="nav-icon">
            {open ? <FiX /> : <FiMenu />}
          </div>
          <ul className={open ? 'nav-links active' : 'nav-links'}>
            <li className="nav-item">
              <Link to="/Event" className="nav-link" onClick={closeMenu}> Event</Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link" onClick={closeMenu}> About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link" onClick={closeMenu}> Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/Artist" className="nav-link" onClick={closeMenu}> Artist Park</Link>
            </li>
          </ul> 
          <div className='button'>
            Download
          </div>
        </div>
       </Router>
    </div>
  )
}
