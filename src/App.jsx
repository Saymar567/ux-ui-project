import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import Products from './Pages/Products'
import Details from './Pages/Details'
import { Routes, Route } from 'react-router-dom'
import data from "./Data/data.json"
function App() {
  const [shoes, setShoes] =useState(data)

  return (
    <>
     <Navbar />
     <Routes>
<Route path="/home" element={<Homepage/>}/>
<Route path="/products" element={<Products shoes={shoes} setShoes={setShoes}/>}/>
<Route path="/details/:q" element={<Details shoes={shoes}/>}/>


     </Routes>
    </>
  )
}

export default App
