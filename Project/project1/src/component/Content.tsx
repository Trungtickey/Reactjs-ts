import React from 'react'
import './Content.css'

const Content: React.FC = () => {
  return (
    <div>
      <div className="login-container">
            <div className="image-container">
                <img src="/src/assets/Side Image.png" alt="" />
            </div>
            <div className="login-form">
                <h2>Log in to Exclusive</h2>
                <form>
                    <input type="text" placeholder="Email or Phone Number" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Log In</button>
                    <a href="#forgotPassword">Forgot Password?</a>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Content
