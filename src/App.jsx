import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css'
import NavHeader from './components/NavHeader'
import Home from './routes/Home'
import Product from './routes/Product'

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
