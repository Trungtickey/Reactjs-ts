// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import List from '../component/List'
import Add from '../component/Add'
import ProductDetails from '../component/ProductDetails'
import Edit from '../component/Edit'
import NotFound from '../pages/NotFound'

const Router = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}>
             {/* Khai báo các đường dẫn con */}
        <Route index element={<List/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='details' element={<ProductDetails/>}/>
        <Route path='edit' element={<Edit/>}/>
        </Route>
        {/* Tham số trên đường dẫn : đường dẫn động  */}
        <Route path='/product-details/:id/:name' element={<ProductDetails/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<NotFound/>}/> 
    </Routes>
  )
}

export default Router
