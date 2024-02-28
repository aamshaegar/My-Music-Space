const imageUrl = "/src/img/cart.jpg";
import "../css/Cart.css"

function Cart() {
    function selected() {
        console.log("Sono qui");
        document.getElementById("CartView")!.style.display = "block";
        document.getElementById("CartView")!.style.transition = "opacity 1s";
        setTimeout(function() {
            document.getElementById("CartView")!.style.opacity = "1";
        }, 50);
    }
  return (
    <div className={"cartDiv"}>
      <div className={"imgContainer"}>
        <img className="cartImg" src={imageUrl} alt="Immagine" onClick={() => selected()} />
      </div>
    </div>
  );
}
export default Cart;
