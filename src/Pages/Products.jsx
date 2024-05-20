import { useParams } from "react-router-dom"
import "../App.css"
import { Link } from "react-router-dom"


function Products({ shoes }) {


    return (
        <div className="products">
            {shoes.results.map((shoe) => {
                return (
                    <div className="card" key={shoe.id}>
                        <img src={shoe.image} alt={shoe.title} />
                        <h3>{shoe.title}</h3>
                        <p>{shoe.prize} €</p>
                        <Link to={`/details/${shoe.id}`}><button className="details-button">Details</button></Link>
                    </div>
                )
            })}
        </div>
    )
}
export default Products