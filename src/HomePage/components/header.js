import React from 'react'
import '../styles/header.css';
import Sidebar from './sidebar';

const Header = () => {
    return (
      <header>
            <div className="headerContainer">
                  <Sidebar />
              <div className="navbar">
            <div className="navbarTitle">
                <h1>Class Manager</h1>
            </div>             
              <div className="headerContent">
                  <h2>Class Manager</h2>
                  <h1>A Student-Teacher Portal</h1>  
              </div>
              </div>
            </div>
          </header> 
  )
}

export default Header;