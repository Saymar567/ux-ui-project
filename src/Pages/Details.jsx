import { useParams } from "react-router-dom"
import data from "../Data/data.json"
import "./Details.css"
import { useState } from "react"
const Details = ({shoes, cart, addToCart})=>{
    const {q} = useParams()  
    const found = shoes.results.find(element => q === element.id);
    const [pressButon, setPressButton] = useState(false)
    const handleAddToCart = ()=>{
        addToCart(found)
    }
    

    const toggleButton = ()=>{
setPressButton(pressButon)
    }


   return(
        <div>
        <div className="details-card">
                <img src={found.image} alt={found.title} />
                <h3>{found.title}</h3>
                <p>{found.prize} €</p>
                <p>{found.description}</p>
                
                <div className="details-button-section">
                <button className={!setPressButton ? "button-liked" : "button"} onClick={toggleButton}>{found.sizes[0]}</button>
                <button className={!setPressButton ? "button-liked" : "button"} onClick={toggleButton}>{found.sizes[1]}</button>
                <button className={!cart ? "button-liked" : "button"} onClick={toggleButton}>{found.sizes[2]}</button>
                <button className={!cart ? "button-liked" : "button"} onClick={toggleButton}>{found.sizes[3]}</button>
                <button className={!cart ? "button-liked" : "button"} onClick={toggleButton}>{found.sizes[4]}</button>
                <button className={!cart ? "button-liked" : "button"} onClick={toggleButton}>{found.sizes[5]}</button>
                </div>

               <button onClick={handleAddToCart}>Add to cart</button>
          

        </div>
        </div>
    )
}
export default Details