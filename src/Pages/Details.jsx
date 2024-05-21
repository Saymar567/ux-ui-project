import { useParams } from "react-router-dom"
import data from "../Data/data.json"
import "./Details.css"
const Details = ({shoes, addToCart})=>{
    const {q} = useParams()  
    const found = shoes.results.find(element => q === element.id);
    const handleAddToCart = ()=>{
        addToCart(found)
    }
    
    

   return(
        <div>
        <div className="details-card">
                <img src={found.image} alt={found.title} />
                <h3>{found.title}</h3>
                <p>{found.prize} €</p>
                <p>{found.description}</p>
               <button onClick={handleAddToCart}>Add to cart</button>
          

        </div>
        </div>
    )
}
export default Details