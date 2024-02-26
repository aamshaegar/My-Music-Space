import React, { useEffect } from 'react';

const imageUrl1 = "/src/img/backgroundBlu.jpg";
const imageUrlInsta="/src/img/Instagram_logo_2022.svg.png"
//const imageUrl2 = "https://as1.ftcdn.net/v2/jpg/04/54/29/98/1000_F_454299832_EAOJOc0GKq8S5dsXuv6B79bbIc0GhQmy.jpg";

function Menu() {

  // per eseguire istruzioni all'atto del caricamento del componente
  // non è possibile interagire direttamente col DOM qui dentro, quindi
  // bisogna dichiarare una funzione ad hoc per ogni azione sul DOM
  useEffect(() => {
    sign_button_selected("musicButton");
  }, []);

  function sign_button_selected(id: string){
    document.getElementById("musicButton")!.style.backgroundColor = "#232425";
    document.getElementById("shopButton")!.style.backgroundColor = "#232425";
    document.getElementById("chatButton")!.style.backgroundColor = "#232425";
    document.getElementById(id)!.style.backgroundColor = "#3E99CF";
  }


  function selected(id: string) {

      // GESTION BRUTTISSIMA... Per Ora OK... Meglio usare un array di booleani DOPO
      if(document.getElementById(id)!.style.backgroundColor === "rgb(62, 153, 207)"){
        return;
      }

      sign_button_selected(id);
      document.getElementById(id)!.style.backgroundColor = "#3E99CF";
      document.getElementById("MusicView")!.style.opacity = "0";
      document.getElementById("MusicView")!.style.display = "none";
      document.getElementById("ShopView")!.style.opacity = "0";
      document.getElementById("ShopView")!.style.display = "none";
      document.getElementById("ChatView")!.style.opacity = "0";
      document.getElementById("ChatView")!.style.display = "none";
      
      // GESTIONE BRUTTA, PER IL MOMENTO OK;
      $("#ChatMessage").hide(0);

      if (id == "musicButton") {
          $(".search").show(0);
          document.getElementById("MusicView")!.style.display = "block";
          document.getElementById("MusicView")!.style.transition = "opacity 1s";
          setTimeout(function() {
              document.getElementById("MusicView")!.style.opacity = "1";
          }, 50);
      }
      if (id == "shopButton") {
          $(".search").show(0);
          document.getElementById("ShopView")!.style.display = "block";
          document.getElementById("ShopView")!.style.transition = "opacity 1s";
          setTimeout(function() {
              document.getElementById("ShopView")!.style.opacity = "1";
          }, 50);
      }
      if (id == "chatButton") {
          $(".search").show(0);
          document.getElementById("ChatView")!.style.display = "block";
          document.getElementById("ChatView")!.style.transition = "opacity 1s";
          document.getElementById("Chats")!.style.display = "grid";
          //document.getElementById("ChatMessage")!.style.display = "none";
          setTimeout(function() {
              document.getElementById("ChatView")!.style.opacity = "1";
          }, 50);
          setTimeout(function() {
              document.getElementById("Chats")!.style.opacity = "1";
          }, 50);
      }
    }


  return (
    <div className="Menu">
        <div className="MySongsButton">
          <img className="immagini" src={imageUrl1} alt="Immagine" />
          <div className="patina"></div>
        </div>
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
          <img className="immagini" src={imageUrlInsta} alt="Immagine" />
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
