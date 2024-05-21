import "./CartComponent.css"
function CartComponent({shoes}) {
    return(
        <div>
       {shoes.results.map((shoe)=>{
        return(
            <>
            <h3>{shoe.title}</h3>
</>
    )
        })}
    
        </div>
    )
}
export default CartComponent