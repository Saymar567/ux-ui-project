import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import Products from './Pages/Products'
import Details from './Pages/Details'
import CartComponent from './Pages/CartComponent'
import { Routes, Route } from 'react-router-dom'
import data from "./Data/data.json"
import Sidebar from './Components/Sidebar'

function App() {
  const [shoes, setShoes] =useState(data)
  const [cart, setCart] = useState([])
  const addToCart =(item)=>{
    setCart([...cart, item])
  }

  const[showSidebar, setShowSidebar] = useState(false)

  return (
    <>
     <Navbar setShowSidebar={setShowSidebar}/>
    {showSidebar && <Sidebar setShowSidebar={setShowSidebar}/>}
     <Routes>
<Route path="/" element={<Homepage/>}/>
<Route path="/products" element={<Products shoes={shoes} setShoes={setShoes}/>}/>
<Route path="/details/:q" element={<Details shoes={shoes} addToCart={addToCart}/>}/>
<Route path="/cart" element={<CartComponent cart={cart} />}/>


     </Routes>
    </>
  )
}

export default App
