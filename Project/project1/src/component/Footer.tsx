import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
            <div className="footer-container">
                <div className="subscribe">
                    <h3>Exclusive</h3>
                    <p>Get 10% off your first order</p>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
                <div className="support">
                    <h4>Support</h4>
                    <address>
                        111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.<br />
                        <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a><br />
                        +88015-88888-9999
                    </address>
                </div>
                <div className="account">
                    <h4>Account</h4>
                    <ul>
                        <li><a href="#myAccount">My Account</a></li>
                        <li><a href="#loginRegister">Login / Register</a></li>
                        <li><a href="#cart">Cart</a></li>
                        <li><a href="#wishlist">Wishlist</a></li>
                        <li><a href="#shop">Shop</a></li>
                    </ul>
                </div>
                <div className="quick-link">
                    <h4>Quick Link</h4>
                    <ul>
                        <li><a href="#privacyPolicy">Privacy Policy</a></li>
                        <li><a href="#termsOfUse">Terms Of Use</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="download-app">
                    <h4>Download App</h4>
                    <img src="/src/assets/Qrcode 1.png" alt="QR Code" />
                    <div className="app-links">
                        <a href="#googlePlay"><img src="/src/assets/GooglePlay.png" alt="Google Play" /></a>
                        <a href="#appStore"><img src="/src/assets/AppStore.png" alt="App Store" /></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
