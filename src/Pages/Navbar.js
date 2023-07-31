import React from "react";
import './Navbar.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
    <div className="navbar">
      <div className="nav-details">
        <div class="search-container">

          <form action="/search">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              onkeyup="myFunction()"
            />
            <button type="submit">search</button>
          </form>
        </div>

        <a href="/Home">Home</a>
        <a href="/My-Network">My Network</a>
        <a href="/Message">Message</a>
        <a href="/Notiifcations">Notiifcations</a>
      </div>
      <div className="navbar-profile">
        <h3>
          {" "}
          <img src="/profileimg.png" onClick={handleDropdownClick} />
          {props.username}sdf
        </h3>

        {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              <button>
                <button
                  href="/"
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
              
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
