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
    <nav>
      <div className="linkedin-img">
        <img className="img-Linkedin" src="/LinkedIn.png" />
      </div>
      <ul>
        <div className='Links'>
          <li>
            <a href="#profile-home" className="homepage" >
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="About" >
              About
            </a>
          </li>
          <div className='dropedown1'>
          <li>
            <a href="#" className="links" onClick={toggleDropdown}>
              Update
            </a>
            <ul className="dropdown-content">
              <li>
                <Link className="Education-update" to="/education">
                  Education
                </Link>
              </li>
              <li>
                <Link className="experence-update" to="/experence">
                  Experience
                </Link>
              </li>
              <li>
                <Link className="Skills-update" to="/skills">
                  Skills
                </Link>
              </li>
            </ul>
          </li>
</div>
          <li>
            <Link className="contact-details" to="/contact">
              Contact
            </Link>
          </li>
        
     
      
      </div>
      </ul>
      <div className="navbar-profile">
        <div className='adsads'>
          {" "}
          <img src="/profileimg.png"  placeholder= "Profile1" onClick={handleDropdownClick} />
          
        

        {isDropdownOpen && (
          <div className="dropdown">
            <li>
              <button>
                <button
                  href="/home"
                  onClick={handleLogoutClick}
                  style={{ color: "black" }}
                >
                  Logout
                </button>
              </button>
              <button>
                <button  onClick={handledashboardClick}>Dashboard</button>
              </button>
              <button>
                <button  onClick={handleMainClick}>Main</button>
              </button>
              
            </li>
          </div>
        )}
         </div>
      </div>
    </nav>
  );
}
