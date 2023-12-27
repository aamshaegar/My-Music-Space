const imageUrl = "/src/img/cart.jpg";

interface Props {
  name: string;
}

function Cart({ name }: Props) {
  return (
    <div className={"cartDiv"}>
      <div className={"imgContainer"}>
        <img className="cartImg" src={imageUrl} alt="Immagine" />
      </div>
      <p>Benvenuto, {name}</p>
    </div>
  );
}
export default Cart;
