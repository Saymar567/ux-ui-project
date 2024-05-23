import { useNavigate, useParams } from "react-router-dom"
import data from "../Data/data.json"
import "./Details.css"
import { useState } from "react"
import Button from "../Components/Button"
import Ruler from "../assets/images/ruler.svg"
import CartIcon from "../assets/images/cart-icon.svg"
import ShipmentIcon from "../assets/images/ShipmentIcon.svg"
import WhiteHeart from "../assets/images/WhiteHeart.svg"
import CareIcon from "../assets/images/CareIcon.svg"
import DownArrow from "../assets/images/DownArrow.svg"
import { Navigate } from "react-router-dom"
const Details = ({ shoes, cart, addToCart }) => {
    const { q } = useParams()
    const found = shoes.results.find(element => q === element.id);
    const [pressButton, setPressButton] = useState(false);
    const [selected, setSelected] = useState(null)
    const [isOpen,setIsOpen] = useState(false);
    const navigate= useNavigate()
    
    const getSelected = ()=>{
        setSelected(selected)
        }
    const handleAddToCart = () => {
        
        addToCart({...found, selected})

    }

    return (
        <div>
            <div className="details-card">
                <img className="detailsImage" src={found.image} alt={found.title} />
                <div className="detailsPadding">
                    <div className="titleAndCounter">
                        <div>
                            <h3 className="detailsTitle">{found.title}</h3>
                            <p>{found.prize} €</p>
                        </div>
                        <div>
                            {/* AQUI VA EL COUNTER */}
                        </div>
                    </div>
                    <p className={isOpen ? "null " : 'detailDescription'} >{found.description}</p>
                    <button className="readLess"  onClick={()=>setIsOpen(!isOpen)}>{isOpen? 'read less...':'read more...'}</button>
                    <div className="size">
                        <p>Size</p>
                        <p> <img src={Ruler} alt="ruler" /> Sizing Guide</p>
                    </div>

                    <div className="details-button-section">
                        
                   <Button selected={selected} setSelected={setSelected} size={found.sizes[0]} />
                <Button selected={selected} setSelected={setSelected} size={found.sizes[1]} />
                <Button selected={selected} setSelected={setSelected} size={found.sizes[2]} />
                <Button selected={selected} setSelected={setSelected} size={found.sizes[3]} />
                <Button selected={selected} setSelected={setSelected} size={found.sizes[4]} />



                       
                    </div>
                    <div className="btnPosition"> 
                    <button className="cartButton" onClick={handleAddToCart}> <img src={CartIcon} alt="" />ADD TO CART</button>
                    <button onClick={()=> navigate(-1)} >Go back</button>
                    </div>
                    <p className="payOptions">More options of payment</p>

                    <div className="detailsInfo">
                        <p className="littleInfo"> <img src={ShipmentIcon} alt="" /> Shipment & return</p>
                        <p className="littleInfo"> <img src={WhiteHeart} alt="" /> Style and ethic</p>
                        <p className="littleInfo"> <img src={CareIcon} alt="" /> Care guide</p>
                    </div>
                    <div className="sizeGuide">Size Guide <img src={DownArrow} alt="" /></div>
                </div>

            </div>
        </div>
    )
}

export default Details