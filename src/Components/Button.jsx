import { useState } from "react"
function Button ({size}){
    const [pressButton, setPressButton] =useState(false)
    const toggleButton = ()=>{
setPressButton(!pressButton)
    }
    return(
        <>
<button className={pressButton ? "button-liked" : "button"} onClick={toggleButton}>{size}</button>
        </>
    )
}
export default Button