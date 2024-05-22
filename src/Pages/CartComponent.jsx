import "./CartComponent.css"
import { useParams } from "react-router-dom"
import { useState } from "react";
function CartComponent({ cart }) {
    console.log(cart);
    // const {q} = useParams()
    // const found = shoes.results.find(element => q === element.id)
    const [count, setCount] = useState(0)
    const handleIncrement =() =>{
        setCount(count +1)
    }
    const handleDecrement =()=>{
        setCount(count -1)
        if(count === 0){
            return 0
        }
    }
    return (
      

        <div className="cart">
            {cart.map((item) => {
                return (
                    <div className="display-cart">
                        <img src={item.image} alt={item.title} />
                        <div>

                        <h3>{item.title}</h3>
                        <p>{item.prize} €</p>
                        {count}
                        <button onClick={handleIncrement}>+</button>
                        <button onClick={handleDecrement}>-</button>
                        </div>
                    
                    </div>
                )
            })}

        </div>
            
    )
}
export default CartComponent