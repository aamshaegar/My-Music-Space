const imageUrl1 = "/src/img/backgroundBlu.jpg";
const imageUrl2 =
  "https://as1.ftcdn.net/v2/jpg/04/54/29/98/1000_F_454299832_EAOJOc0GKq8S5dsXuv6B79bbIc0GhQmy.jpg";

function Menu() {
  function selected(id: string) {
      console.log("Sono qui");
      const elements = Array.from(
          document.getElementsByClassName(
              "menuButton"
          ) as HTMLCollectionOf<HTMLElement>
      );
      for (let i = 0; i < elements.length; i++) {
          elements[i].style.backgroundColor = "#232425";
      }
      document.getElementById(id)!.style.backgroundColor = "#3E99CF";
      document.getElementById("HomeView")!.style.display = "none";
      document.getElementById("ShopView")!.style.display = "none";
      document.getElementById("ChatView")!.style.display = "none";
      document.getElementById("MusicView")!.style.display = "none";
      if (id == "homeButton") {
          document.getElementById("HomeView")!.style.display = "block";
      }
      if (id == "musicButton") {
          document.getElementById("MusicView")!.style.display = "block";
      }
      if (id == "shopButton") {
          document.getElementById("ShopView")!.style.display = "block";
      }
      if (id == "chatButton") {
          document.getElementById("ChatView")!.style.display = "block";
      }
    }


  return (
    <div className="Menu">
      <div>
        <div className="MySongsButton">
          <img className="immagini" src={imageUrl1} alt="Immagine" />
          <div className="patina"></div>
        </div>
        <div className="MySongsButton">
          <img className="immagini" src={imageUrl2} alt="Immagine" />
          <div className="patina"></div>
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
        id="musicButton"
        onClick={() => selected("musicButton")}
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
      <div className="Social">
        <div className="SocialButton">
          <img className="immagini" src={imageUrl1} alt="Immagine" />
          <div className="patina"></div>
        </div>
        <div className="SocialButton">
          <img className="immagini" src={imageUrl1} alt="Immagine" />
          <div className="patina"></div>
        </div>
        <div className="SocialButton">
          <img className="immagini" src={imageUrl1} alt="Immagine" />
          <div className="patina"></div>
        </div>
        <div className="SocialButton">
          <img className="immagini" src={imageUrl1} alt="Immagine" />
          <div className="patina"></div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
