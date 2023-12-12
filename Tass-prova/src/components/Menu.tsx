const imageUrl1 = "/src/img/backgroundBlu.jpg";
const imageUrl2 =
  "https://as1.ftcdn.net/v2/jpg/04/54/29/98/1000_F_454299832_EAOJOc0GKq8S5dsXuv6B79bbIc0GhQmy.jpg";

function Menu() {
  function selected(id: string) {
    const elements = Array.from(
      document.getElementsByClassName(
        "menuButton"
      ) as HTMLCollectionOf<HTMLElement>
    );
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#232425";
    }
    document.getElementById(id)!.style.backgroundColor = "#3E99CF";
  }

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
      <button
        className="menuButton"
        id="homeButton"
        onClick={() => selected("homeButton")}
      >
        Home
      </button>
      <button
        className="menuButton"
        id="menuButton"
        onClick={() => selected("menuButton")}
      >
        Musica
      </button>
      <button
        className="menuButton"
        id="shopButton"
        onClick={() => selected("shopButton")}
      >
        Shop
      </button>
      <button
        className="menuButton"
        id="chatButton"
        onClick={() => selected("chatButton")}
      >
        Chat
      </button>
    </div>
  );
}
export default Menu;
