import React from 'react'
import './Navbar.css'

const Navbar: React.FC = () => {
  return (
    <>
    <div className='Topheader'>
      <p>Summer Sale For All Swim Suits And Free Express Delivery</p>
      <div className='language-selector'>
            <select>
              <option>English</option>
            </select>
      </div>
    </div>
    <header className='header'>
        <div className='header_content'>
          <div className='logo'>Exclusive</div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#signup">Sign Up</a></li>
            </ul>
          </nav>
          <div className='search-button'>
             <input type="text" placeholder='What are you looking for' />
          </div>
        </div> 
    </header>
    </>
  )
}

export default Navbar 
