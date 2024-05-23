import { useState } from "react"
function Button({ size, selected, setSelected }) {
    const [pressButton, setPressButton] = useState(false)
    const toggleButton = () => {
        setSelected(size)
    }
    return (
        <>
         <button className={selected == size ? "button-liked" : "button"} onClick={toggleButton}>{size}</button> 
        </>
    )
}
export default Button