const imageUrl = "/src/img/cart.jpg";
import "../css/CartView.css"

interface Props{
    productname: string;
    type:string;
    price:string;
    vendor: string;
    date:string;
}
function CartView({productname, type, price, vendor, date}:Props) {
    return (
        <div className="CartView" id ="CartView">
            <div className={"imgContainer"}>
                <img className="cartImg" src={imageUrl} alt="Immagine" />
            </div>
            <div className="CartInfo">
                <p> Ecco il tuo carrello:</p>
                <img className="ProductImg" src={"/src/img/"+productname+".jpg"}></img>
                <p> Nome: {productname}</p>
                <p> Tipologia: {type}</p>
                <p> Prezzo: {price}</p>
                <p> Venditore: {vendor}</p>
                <p> Data: {date}</p>
                <div className="BuyButton"><button>Acquista</button></div>
            </div>
        </div>
    );
}
export default CartView;