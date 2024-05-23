import "../App.css"
import "./Homepage.css"
import { Link } from "react-router-dom"
function Homepage(){
    return(
        <div className="homepage">
            <p>DISCOVER NEW STYLES</p>
            <Link to="/products"><button className="homepage-button">NEW IN</button></Link>
            {/*pop up*/}
        </div>
    )
}
export default Homepage