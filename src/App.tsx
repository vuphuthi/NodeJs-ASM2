import { useEffect, useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import { IProduct } from './interfaces/product'
import { getProduct, addProduct } from './api/product'
import ProductAdd from './pages/productAdd'
import Signin from './pages/signin'
import UserLayout from './components/userLayout'
import ProductDetail from './pages/productdetail'
import HomePage from './pages/hompage'
import ListProduct from './pages/list'
import AdminLayout from './components/adminlayout'
import UpdateProduct from './pages/update'
import Signup from './pages/singnup'



function App() {

  const onHandleAdd = async (product: any) => {
    try {
      const response = await addProduct(product)
      console.log(response)
    } catch (error) {
      console.log(error)

    }


  }

  return (
    <div className="App">
      {/* <ul>
        <li>
          <NavLink to="/" >HOM</NavLink>
          <NavLink to="/add">About</NavLink>
        </li>
      </ul> */}
      <Routes>
        {/* <Route path="/add" element={<ProductAdd onAdd={onHandleAdd} />} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/' element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path='product/:id' element={<ProductDetail />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path='/admin' element={<ListProduct />} />
          <Route path='/admin/add' element={<ProductAdd onAdd={onHandleAdd} />} />
          <Route path='/admin/update' element={<UpdateProduct />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
