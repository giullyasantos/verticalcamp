

import React, { useState } from 'react';
import '../App.css'; // Import the CSS
import logo from '../images/logo.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav>
      <div className='topbar'>
        <button onClick={toggleSidebar} className="sidebar-toggle">
          <svg width="2.5em" height="2.5em" viewBox="0 0 20 20" fill="none">
            <path fill="#fbdd00" fill-rule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-8 4a1 1 0 100-2H2a1 1 0 100 2h8zm9 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-9 5a1 1 0 100-2H2a1 1 0 100 2h8z"/>
          </svg>
        </button>
        <div className='logo'><img src={logo} alt="Vertical Camp 2024 Logo"/></div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button onClick={toggleSidebar} className="close-sidebar-button">
          × {/* Close icon */}
        </button>
        <ul>
          <div className='logo'><img src={logo} alt="Vertical Camp 2024 Logo"/></div>
          <li><a href="/">Home</a></li>
    	  <li><a href="/">Themed Nights</a></li>
    	  <li><a href="/">What To Bring</a></li>
    	  <li><a href="/">How To Join</a></li>
    	  <li><a href="/">Contact</a></li>
    	</ul>
      </div>

      {/* Rest of your navbar content */}
    </nav>
  );
};

export default Navbar;