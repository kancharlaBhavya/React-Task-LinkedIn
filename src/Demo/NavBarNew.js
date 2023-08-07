import React, { useState, useEffect } from 'react';
import './NavBarNew.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavBarNew() {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggleNav, setToogleNav] = useState(true);  

  useEffect(() => {
   
    window.addEventListener("resize", handleResize);
    if (window.innerWidth <= 507) setToogleNav(false);
    else setToogleNav(true);
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    event.currentTarget.nextSibling.classList.toggle('show');
  };


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
const navigate   =useNavigate();
  const handleLogoutClick = () => {
    navigate("/");
  };
const handledashboardClick=()=>{
  navigate('/dashboard');
}
const handleMainClick=()=>{
  navigate("/main");
}
  return (
    <div className='nav-bar1234'>
      <div className="linkedin-img">
        <img className="img-Linkedin" src="/LinkedIn.png" />
      </div>
      <div className='links1234'>
        <Link to='#home'>Home</Link>
        <Link to='#about'>About</Link>
        <Link to="#" >Update</Link>
        <Link to="/contact" > Contact</Link>
      </div>
      <div className='dropdown1234'>
      <img src="/profileimg.png" onClick={handleDropdownClick} />
      {isDropdownOpen && (
          <div className="dropdown000">
            <ul>
              <button>
                <a
                  href="/"
                  onClick={handleLogoutClick}
                  style={{ color: "black" }}
                >
                  Logout
                </a>
              </button>
              <button>
                <a href="/dashboard">Dashboard</a>
              </button>
            </ul>
          </div>
        )}
      
      </div>

      
     
    </div>
  );
}
