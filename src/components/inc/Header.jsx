import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Include.css';

const Header = ({ activePage }) => {
  return (
    <header className="site-header">
      <div className="logo-container">
        <div className="logo">
          <Link to="/work">Mark Tasaka</Link>
        </div>
      </div>
      <nav className="nav-container">
        <div className="nav-links">
          <div className="gallery-title">
            <Link to="/work" className={activePage === 'work' ? 'active' : ''}>Work</Link>
          </div>
          <div className="page-title">
            <Link to="/contact" className={activePage === 'contact' ? 'active' : ''}>Contact</Link>
          </div>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/mark-tasaka/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 30 24" className="icon">
                  <path d="M19.6,19v-5.8c0-1.4-0.5-2.4-1.7-2.4c-1,0-1.5,0.7-1.8,1.3C16,12.3,16,12.6,16,13v6h-3.4
                    c0,0,0.1-9.8,0-10.8H16v1.5c0,0,0,0,0,0h0v0C16.4,9,17.2,7.9,19,7.9c2.3,0,4,1.5,4,4.9V19H19.6z M8.9,6.7L8.9,6.7
                    C7.7,6.7,7,5.9,7,4.9C7,3.8,7.8,3,8.9,3s1.9,0.8,1.9,1.9C10.9,5.9,10.1,6.7,8.9,6.7z M10.6,19H7.2V8.2h3.4V19z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/mark-tasaka" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 30 24" className="icon">
                  <path d="M15,4c-4.5,0-8.2,3.7-8.2,8.2c0,3.6,2.4,6.7,5.6,7.8c0.4,0.1,0.6-0.2,0.6-0.4c0-0.2,0-0.8,0-1.5
                    c-2.3,0.5-2.8-1-2.8-1c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.3,0.8,1.3,0.8c0.7,1.3,1.9,0.9,2.4,0.7
                    c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.7-0.9-3.7-4.1c0-0.9,0.3-1.6,0.8-2.2c-0.1-0.2-0.4-1,0.1-2.2c0,0,0.7-0.2,2.3,0.8
                    C13.6,8.1,14.3,8,15,8c0.7,0,1.4,0.1,2.1,0.3c1.6-1.1,2.3-0.8,2.3-0.8c0.4,1.1,0.2,2,0.1,2.2c0.5,0.6,0.8,1.3,0.8,2.2
                    c0,3.2-1.9,3.8-3.7,4c0.3,0.3,0.6,0.8,0.6,1.5c0,1.1,0,2,0,2.3c0,0.2,0.1,0.5,0.6,0.4c3.3-1.1,5.6-4.2,5.6-7.8
                    C23.2,7.7,19.5,4,15,4z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.oldschooladventures.org/" target="_blank" rel="noopener noreferrer">
                <img src="/images/icons/icon2.png" alt="Old School Adventures" className="icon-img" />
              </a>
            </li>
            <li>
              <a href="https://www.tasaka-games.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/icons/icon3.png" alt="Tasaka Games" className="icon-img" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;