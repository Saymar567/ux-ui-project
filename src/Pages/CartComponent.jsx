import "./CartComponent.css"
import { useParams } from "react-router-dom"
import { useState } from "react";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
function CartComponent({ cart, setCart }) {
    /* console.log(cart) */;
    // const {q} = useParams()
    // const found = shoes.results.find(element => q === element.id)
    const [count, setCount] = useState(1)
    const handleIncrement = () => {
        setCount(count + 1);

    }
    const handleDecrement = () => {
        setCount(count - 1)

    }

    const handleDelete = (id) => {
        const itemDeleted = cart.filter(item => item.id !== id)
        return setCart(itemDeleted)
    }
    console.log(cart)

    return (


        <div className="cart">
            {cart.map((item) => {
                return (
                    <>
                        <div className="display-cart">
                            <img src={item.image} alt={item.title} />
                            <div>

                                <h3>{item.title} </h3>
                                <p>€{item.prize.toFixed(2)} </p>
                                <p>Size {item.selected}</p>

                            </div>
                            <div className="add-items">

                                <button onClick={count > 0 ? handleDecrement : handleDelete(item.id)}>-</button>
                                {count}
                                <button className="cart-increment-button" onClick={handleIncrement}>+</button>
                            </div>

                        </div>
                        <div className="cart-discount-section">
                            <p>Promo Code <button>APPLY</button> </p>
                        </div>
                        <div className="cart-prize">
                            <div className="order-amount">
                                <p>Order Amount</p> <p>€{(item.prize * count).toFixed(2)}</p>

                            </div>
                            <div className="tax">
                                <p>Tax </p><p> €{((item.prize * count) / 10).toFixed(2)}</p>
                            </div>
                            <div className="total-payment">
                                <p>Total Payment </p> <p> €{((item.prize * count) + ((item.prize * count) / 10)).toFixed(2)}</p>
                            </div>

                        </div>
                        <div className="check-out-buttons">

                        <button className="cart-proceed-button">PROCEED TO CHECKOUT</button>
                       <Link to="/products"> <button className="cart-continue-shopping">CONTINUE SHOPPING</button></Link>
                        </div>

                    </>
                )
            })}

        </div>

    )
}
export default CartComponent