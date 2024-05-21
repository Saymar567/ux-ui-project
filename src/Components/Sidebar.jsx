import "./Sidebar.css"

import backArrow from "../assets/images/Vector-3.png"
import downArrow from "../assets/images/Polygon.png"
import upArrow from "../assets/images/Polygon (1).png"
import { useState } from "react"




function Sidebar({setShowSidebar}) {

    const [showDropdown, setShowDropdown] = useState(false)




    return (
        <>
            <div className="sideBar">
                <img className="backBtn" onClick={()=>setShowSidebar(false)} src={backArrow} alt="" />
                <ul className="sideBarUl">
                    <li>NEW IN</li>
                    <li>BEST SELLER</li>
                    <li onClick={() => setShowDropdown(!showDropdown)} className="colection">VIEW ALL COLLECTION <img className="arrows" src= {showDropdown ? upArrow : downArrow } alt="" /></li>
                    {showDropdown && <>
                        <li>ANKLE BOOTS</li>
                        <li>CASUAL</li>
                        <li>COWBOY</li>
                        <li>FALL WINTER</li>
                    </>}

                    <li>CONTACT</li>
                    <li>ABOUT US</li>
                </ul>


            </div>
        </>
    )
}
export default Sidebar