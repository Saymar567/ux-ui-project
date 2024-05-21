import { useParams } from "react-router-dom"
import "../App.css"
import "./Products.css"
import { Link } from "react-router-dom"


function Products({ shoes }) {


    return (
        <div className="products">
            {shoes.results.map((shoe) => {
                return (
                    <>
                    <Link to={`/details/${shoe.id}`}> <div className="card" key={shoe.id}>
                        <img src={shoe.image} alt={shoe.title} />
                        <h3>{shoe.title}</h3>
                        <p>{shoe.prize} €</p>
                    </div>
                        </Link>
                    </>
                )
            })}
        </div>
    )
}
export default Products