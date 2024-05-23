import { useNavigate, useParams } from "react-router-dom"
import data from "../Data/data.json"
import "./Details.css"
import { useState } from "react"
import Button from "../Components/Button"
import { Navigate } from "react-router-dom"
const Details = ({shoes, cart, addToCart})=>{
    const {q} = useParams()  
    const found = shoes.results.find(element => q === element.id);
    const [pressButton, setPressButton] = useState(false);
    const [selected, setSelected] = useState(null);
    const navigate= useNavigate()

    const getSelected = ()=>{
        setSelected(selected)
        }
    
    const handleAddToCart = ()=>{
        addToCart({...found, selected})
    }
    



   return(
        <div>
        <div className="details-card">
                <img src={found.image} alt={found.title} />
                <h3>{found.title}</h3>
                <p>{found.prize} €</p>
                <p>{found.description}</p>
                
                <div className="details-button-section">
               {/*  <button className={pressButton ? "button-liked" : "button"} onClick={toggleButton}>{found.sizes[0]}</button>
                <button className={pressButton ? "button-liked" : "button"} onClick={toggleButton}>{found.sizes[1]}</button>
                <button className={pressButton ? "button-liked" : "button"} onClick={toggleButton}>{found.sizes[2]}</button>
                <button className={pressButton ? "button-liked" : "button"} onClick={toggleButton}>{found.sizes[3]}</button>
                <button className={pressButton ? "button-liked" : "button"} onClick={toggleButton}>{found.sizes[4]}</button>
                <button className={pressButton ? "button-liked" : "button"} onClick={toggleButton}>{found.sizes[5]}</button> */}
                
  
                   <Button selected={selected} setSelected={setSelected} size={found.sizes[0]} />
                <Button selected={selected} setSelected={setSelected} size={found.sizes[1]} />
                <Button selected={selected} setSelected={setSelected} size={found.sizes[2]} />
                <Button selected={selected} setSelected={setSelected} size={found.sizes[3]} />
                <Button selected={selected} setSelected={setSelected} size={found.sizes[4]} />

                </div>

               <button onClick={handleAddToCart}>Add to cart</button>
               <br></br>
               <button onClick={()=> navigate(-1)} >Go back</button>
          

        </div>
        </div>
    )
}
export default Details