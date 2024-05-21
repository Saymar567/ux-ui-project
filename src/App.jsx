import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import Products from './Pages/Products'
import Details from './Pages/Details'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar'

function App() {
  const [shoes, setShoes] =useState([])

  const[showSidebar, setShowSidebar] = useState(false)

  return (
    <>
     <Navbar setShowSidebar={setShowSidebar}/>
    {showSidebar && <Sidebar setShowSidebar={setShowSidebar}/>}
     <Routes>
<Route path="/home" element={<Homepage/>}/>
<Route path="/products" element={<Products shoes={shoes} setShoes={setShoes}/>}/>
<Route path="/details/:id" element={<Details/>}/>


     </Routes>
    </>
  )
}

export default App
