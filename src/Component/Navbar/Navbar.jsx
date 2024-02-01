import React from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.svg"
function Navbar() {
  return (
    <div className='navbar-wrapper'>
        <div className='navbar-upper-header'>
           <div className='logo-div'>
            <img src={logo}/>
           </div>
           <div className='navebar-name-wrapper'>
                 <div className='nav-router-names'>Home</div>
                 <div className='nav-router-names'>About Us</div>
                 <div className='nav-router-names'>Service</div>
                 <div className='nav-router-names'>Contact Us</div>
                 <div className='nav-router-names'>Portfolio</div>
                 <div className='nav-router-names'>Blog</div>
           </div>
           <div className='navbar-button-div'>
                  <div className='get-quote'>
                    <button type='submit' className='button-last-nav'>Get Quote</button>
                  </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar