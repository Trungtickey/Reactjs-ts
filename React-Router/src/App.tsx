import React from 'react'
import "./index.css";
import { BrowserRouter, Link } from "react-router-dom";
import Router from './router/Router';

const App = () => {
  return (
    <div>
      <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/products'}>Products</Link>
      <Link to={'/profile'}>Profile</Link>
     <Router/>
    </div>
  )
}

export default App
