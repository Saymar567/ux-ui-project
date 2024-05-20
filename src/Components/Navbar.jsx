import "../App.css"
import { Link } from "react-router-dom"
function Navbar(){
    return (
        <nav className="navbar">
<Link to="/home"><h2>Home</h2></Link>
<Link to="/products"><h2>Products</h2></Link>


        </nav>
    )
}
export default Navbar