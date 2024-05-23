import "./CartComponent.css"
import { useParams } from "react-router-dom"
import { useState } from "react";
import Button from "../Components/Button";
function CartComponent({ cart, setCart}) {
    /* console.log(cart) */;
    // const {q} = useParams()
    // const found = shoes.results.find(element => q === element.id)
    const [count, setCount] = useState(1)
    const handleIncrement =() =>{
        setCount(count +1);
        
    }
    const handleDecrement =()=>{
        setCount(count -1)
        
    }

   const handleDelete= (id)=>{
    const itemDeleted = cart.filter(item => item.id !== id)
    return setCart(itemDeleted)
    }
    console.log(cart)
   
    return (
      

        <div className="cart">
            {cart.map((item) => {
                return (
                    <div className="display-cart">
                        <img src={item.image} alt={item.title} />
                        <div>

                        <h3>{item.title} </h3>
                        <p>{(item.prize * count)} €</p>
                        <p>Size {item.selected}</p>
                        <div className="add-items">

                        <button onClick={count > 0 ? handleDecrement : undefined}>-</button>
                        {count}
                        <button onClick={handleIncrement}>+</button>
                        </div>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                        </div>
                    
                    </div>
                )
            })}

        </div>
            
    )
}
export default CartComponent