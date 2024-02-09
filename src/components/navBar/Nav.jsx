import React from 'react'
import "./nav.scss";

const Nav = () => {
  return (
    
        <div className="nav-container">
            <div className="left-nav">
                <img className="logo" alt="a lemon figure with little lemon text"src="../assets/logo.svg" />
            </div>
            <div className="right-nav">
                <ul className="navLists">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservation</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>

 
  )
}

export default Nav;