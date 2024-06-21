import React from 'react'
import Navbar from './component/Navbar'
import Content from './component/Content'
import Footer from './component/Footer'
const App: React.FC = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
