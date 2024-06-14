import React, { useState, useEffect, useRef } from 'react';
import '../App.css'; 
import logo from '../images/logo.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [currentSection, setCurrentSection] = useState('home');
  const sections = ['home', 'themedNights', 'whatToBring', 'howToJoin', 'contact'];

  const sectionRefs = useRef(sections.map(() => React.createRef())); 

  const handleClick = (section) => {
    const target = sectionRefs.current.find((ref) => ref.current && ref.current.id === section);
    if (target) {
      const targetTop = target.current.offsetTop;
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
      setCurrentSection(section);
    }
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
          × 
        </button>
        
        <ul>
          <div className='logo'><img src={logo} alt="Vertical Camp 2024 Logo"/></div>
          {sections.map((section, index) => (
            <li key={index}>
              <a 
                href={`#${section}`}
                onClick={() => { handleClick(section); toggleSidebar(); }}
                className={currentSection === section ? 'active' : ''}
              >
                {section.replace(/([A-Z])/g, ' $1').trim()} 
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;