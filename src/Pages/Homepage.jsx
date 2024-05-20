function Homepage({shoes}){
    return(
        <>
{shoes.map((shoe)=>{
<img src={shoe.img} alt="" />
})}
        </>
    )
}
export default Homepage