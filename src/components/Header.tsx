import React from 'react';
import './Header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
    return (
        <header>
            <div className="promo-banner">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#shopNow">ShopNow</a>
            </div>
            <nav>
                <div className="logo">Exclusive</div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#signUp">Sign Up</a></li>
                </ul>
                <div className="search-container">
                    <input type="text" placeholder="What are you looking for?" />
                    <img src="/src/assets/Component 2.png" alt="" />
                    {/* <button className="search-button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button> */}
                </div>
            </nav>
        </header>
    );
}

export default Header;
