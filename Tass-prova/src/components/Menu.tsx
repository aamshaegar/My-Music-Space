const imageUrl1 = "/src/img/backgroundBlu.jpg";
const imageUrl2 =
  "https://as1.ftcdn.net/v2/jpg/04/54/29/98/1000_F_454299832_EAOJOc0GKq8S5dsXuv6B79bbIc0GhQmy.jpg";

function Menu() {
  return (
    <div className="Menu">
      <div>
        <div className="MySongsButton">
          <div className="patina"></div>
          <img className="immagini" src={imageUrl1} alt="Immagine" />
        </div>
        <div className="MyShopButton">
          <div className="patina"></div>
          <img className="immagini" src={imageUrl2} alt="Immagine" />
        </div>
      </div>
      <button className="musicButton">Home</button>
      <button className="musicButton">Musica</button>
      <button className="musicButton">Shop</button>
      <button className="musicButton">Chat</button>
    </div>
  );
}
export default Menu;
