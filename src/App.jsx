import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Details from './Pages/Homepage'
import Products from './Pages/Products'
import Details from './Pages/Details'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [shoes, setShoes] =useState([])

  return (
    <>
     <Navbar />
     <Routes>
<Route path="/home" element={<Homepage/>}/>
<Route path="/products" element={<Products shoes={shoes} setShoes={setShoes}/>}/>
<Route path="/details/:id" element={<Details/>}/>


     </Routes>
    </>
  )
}

export default App
