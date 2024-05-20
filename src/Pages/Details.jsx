import { useParams } from "react-router-dom"
const Details = ({shoes})=>{
    const {q} = useParams()
    const found = shoes.results.find(element => q === element.id)
    
    console.log(found.image)
   return(
        <div className="details-card">
                <img src={found.image} alt={found.title} />
                <h3>{found.title}</h3>
                <p>{found.prize} €</p>
                <p>{found.description}</p>
               
          

        </div>
    )
}
export default Details