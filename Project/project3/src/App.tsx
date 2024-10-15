import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import{ Router } from './router'
import './App.css'

const App = () => {
  // lấy ra biến môi trường 
  console.log(import.meta.env.VITE_API_HOST);
  return (
    <div>
      {/* Nhúng thẻ router vào  */}
      <LoginPage/>
      <RegisterPage/>
      <Router/>
    </div>
  )
}

export default App

