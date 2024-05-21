import "./Sidebar.css"

import backArrow from "../assets/images/Vector-3.png"
import downArrow from "../assets/images/Polygon.png"
import upArrow from "../assets/images/Polygon (1).png"
import { useState } from "react"




function Sidebar({ setShowSidebar }) {

    const [showDropdown, setShowDropdown] = useState(false)

    const [hideSidebar, setHideSidebar]= useState(false)

    function handleHideSidebar (){
        setHideSidebar(true)
        setTimeout(() => {
            setShowSidebar(false)
        }, 480);
        
    }

    return (
        <>
            <div className={hideSidebar ? "sideBar slideout" : "sideBar"}>
                <img className="backBtn" onClick={() => handleHideSidebar()} src={backArrow} alt="" />
                <ul className="sideBarUl">
                    <li>NEW IN</li>
                    <li>BEST SELLER</li>
                    <li onClick={() => setShowDropdown(!showDropdown)} className="colection">VIEW ALL COLLECTION <img className="arrows" src={showDropdown ? upArrow : downArrow} alt="" /></li>
                    {showDropdown && <div className="dropDown">
                        <li>ANKLE BOOTS</li>
                        <li>CASUAL</li>
                        <li>COWBOY</li>
                        <li>FALL WINTER</li>
                    </div>}

                    <li>CONTACT</li>
                    <li>ABOUT US</li>
                </ul>


            </div>
        </>
    )
}
export default Sidebar