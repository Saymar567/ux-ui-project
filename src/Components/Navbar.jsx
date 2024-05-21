import "../App.css"
import pasos from "../assets/images/b5adb323006f35f804937799be07efb8.png"
import burger from "../assets/images/rightButton-hamburger.png"
import search from "../assets/images/Vector.png"
import profile from "../assets/images/profile.png"
import shop from "../assets/images/Vector-2.png"
import "./Navbar.css"


function Navbar({setShowSidebar}){
    return (
        <nav className="navbar">
            <img onClick={()=>setShowSidebar(true)} className="burger" src={burger} alt="" />
            <img className="logo" src={pasos} alt="" />
            <img className="search" src={search} alt="" />
            <img className="profile" src={profile} alt="" />
            <img className="shop" src={shop} alt="" />

        </nav>
    )
}
export default Navbar