import "./InfoPage.css"
import Phone from "../assets/images/Phone.svg"
import Mail from "../assets/images/Mail.svg"
import MyOrder from "../assets/images/MyOrder.svg"
import MyHeart from "../assets/images/MyHeart.svg"
import Wallet from "../assets/images/Wallet.svg"
import Tag from "../assets/images/Tag.svg"
import Settings from "../assets/images/Settings.svg"
import LogOut from "../assets/images/LogOut.svg"


function InfoPage() {
    return (
        <>
            <div className="profileDiv">
                <h1 className="profileTitle">User Name</h1>
                <div className="allExceptTitle">
                    <div className="phoneMail">
                        <p> <img src={Phone} alt="" />+34 658 65 89 98</p>
                        <p><img src={Mail} alt="" />Email@gmail.com</p>
                    </div>
                    <div className="smallDetails">
                        <p><img src={MyOrder} alt="" />My Order</p>
                        <p><img src={MyHeart} alt="" />My Favorites</p>
                        <p><img src={Wallet} alt="" />Payments</p>
                        <p><img src={Tag} alt="" />Promotions</p>
                        <p className="settings"><img src={Settings} alt="" />Settings</p>
                    </div>
                    <div className="logout">
                        <p><img src={LogOut} alt="" />Log Out</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default InfoPage