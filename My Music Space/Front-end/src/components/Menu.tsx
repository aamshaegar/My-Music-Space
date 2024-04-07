import React, { useEffect } from 'react';

import "../css/Menu.css"
const imagelogo = "/src/img/My Music Space Logo dark.png";
const musicLogo = "/src/img/fixedElements/discWhite.png";
const shopLogo = "/src/img/fixedElements/bagWhite.png";
const chatLogo = "/src/img/fixedElements/chatWhite.png";
const likedLogoW = "/src/img/fixedElements/likeWhite.png";
const cartLogo = "/src/img/fixedElements/cartWhite.png";

function Menu({onClick}) {

  // per eseguire istruzioni all'atto del caricamento del componente
  // non è possibile interagire direttamente col DOM qui dentro, quindi
  // bisogna dichiarare una funzione ad hoc per ogni azione sul DOM
  useEffect(() => {
    sign_button_selected("musicButton");
  }, []);

  function sign_button_selected(id: string){
    document.getElementById(id)!.style.backgroundColor = "#3E99CF";
  }



  function selected(id: string) {
      document.getElementById("musicButton")!.style.backgroundColor = "#232425";
      document.getElementById("shopButton")!.style.backgroundColor = "#232425";
      document.getElementById("chatButton")!.style.backgroundColor = "#232425";
      let imgElement;
      if(id=="likeButton"){
          imgElement = document.getElementById(id);
          if (imgElement) {
              imgElement.src = "/src/img/fixedElements/likeBlu.png";
              document.getElementById("cartButton").src = cartLogo;
          } else {
              console.error("Impossibile trovare l'elemento immagine con l'ID specificato.");
          }
          return;
      }

      if(id=="cartButton"){
          imgElement = document.getElementById(id);
          if (imgElement) {
              imgElement.src = "/src/img/fixedElements/cartBlu.png";
              document.getElementById("likeButton").src = likedLogoW;
          } else {
              console.error("Impossibile trovare l'elemento immagine con l'ID specificato.");
          }
          return;
      }

      // GESTION BRUTTISSIMA... Per Ora OK... Meglio usare un array di booleani DOPO
      if(document.getElementById(id)!.style.backgroundColor === "rgb(62, 153, 207)") {
          return;
      }

      sign_button_selected(id);
      document.getElementById("likeButton").src = likedLogoW;
      document.getElementById("cartButton").src = cartLogo;
      if(id!= "cartButton" && id!= "likeButton") document.getElementById(id)!.style.backgroundColor = "#3E99CF";
      document.getElementById("MyLikeView")!.style.opacity = "0";
      document.getElementById("MyLikeView")!.style.display = "none";
      document.getElementById("MusicView")!.style.opacity = "0";
      document.getElementById("MusicView")!.style.display = "none";
      document.getElementById("ShopView")!.style.opacity = "0";
      document.getElementById("ShopView")!.style.display = "none";
      document.getElementById("ChatView")!.style.opacity = "0";
      document.getElementById("ChatView")!.style.display = "none";
      document.getElementById("ShopViewContainer")!.style.opacity = "0";
      document.getElementById("ShopViewContainer")!.style.display = "none";
      //document.getElementById("ShopProductView")!.style.opacity = "0";
      //document.getElementById("ShopProductView")!.style.display = "none";
      
      // GESTIONE BRUTTA, PER IL MOMENTO OK;
      $("#ChatMessage").hide(0);
      $("#chats").show(0);


      if (id == "musicButton") {
          $(".search").show(0);
          document.getElementById("MusicView")!.style.display = "block";
          document.getElementById("MusicView")!.style.transition = "opacity 1s";
          setTimeout(function() {
              document.getElementById("MusicView")!.style.opacity = "1";
          }, 50);

          onClick("musicButton")
      }
      if (id == "shopButton") {
          $(".search").show(0);
          document.getElementById("ShopViewContainer")!.style.display = "block";
          document.getElementById("ShopViewContainer")!.style.transition = "opacity 1s";
          document.getElementById("ShopView")!.style.display = "block";
          document.getElementById("ShopView")!.style.transition = "opacity 1s";
          setTimeout(function() {
              document.getElementById("ShopViewContainer")!.style.opacity = "1";
              document.getElementById("ShopView")!.style.opacity = "1";
          }, 50);

          onClick("shopButton")
      }
      if (id == "chatButton") {
          $(".search").show(0);
          document.getElementById("ChatView")!.style.display = "block";
          document.getElementById("ChatView")!.style.transition = "opacity 1s";
          document.getElementById("Chats")!.style.display = "grid";
          setTimeout(function() {
              document.getElementById("ChatView")!.style.opacity = "1";
          }, 50);
          setTimeout(function() {
              document.getElementById("Chats")!.style.opacity = "1";
          }, 50);

          onClick("chatButton")

      }

      if (id == "MyLikeButton") {
          $(".search").show(0);
          //document.getElementById("patinaMyLike")!.style.display = "none";
          document.getElementById("MyLikeView")!.style.display = "block";
          document.getElementById("MyLikeView")!.style.transition = "opacity 1s";
          setTimeout(function () {
              document.getElementById("MyLikeView")!.style.opacity = "1";
          }, 50);
          onClick("MyLikeButton")
      }
    }


  return (
    <div className="Menu" id="Menu">
        <div className="LogoMenu">
            <img className="LogoMenuImg" src={imagelogo}></img>
        </div>
      <button
        className="menuButton"
        id="musicButton"
        onClick={() => selected("musicButton")}>
          <img className="icons" src={musicLogo}></img>
      </button>
      <button
        className="menuButton"
        id="shopButton"
        onClick={() => selected("shopButton")}>
          <img className="icons" src={shopLogo}></img>
      </button>
      <button
        className="menuButton"
        id="chatButton"
        onClick={() => selected("chatButton")}>
          <img className="icons" src={chatLogo}></img>
      </button>


        {/*<div className="MySongsButton" id="MyLikeButton" onClick={() => selected("MyLikeButton")}>*/}
            <button
                className="likedAndCart"
                onClick={() => selected("likeButton")}>
                <img id="likeButton" className="icons" src={likedLogoW}></img>
            </button>
            {/*<div className="patina" id="patinaMyLike"></div>*/}
        {/*</div>*/}


        {/*<div className="MySongsButton" id="MyChatButton">*/}
            {/*<Cart />*/}
            <button
                className="likedAndCart"
                onClick={() => selected("cartButton")}>
                <img id="cartButton" className="icons" src={cartLogo}></img>
            </button>
            {/*<div className="patina" id="patinaSong"></div>*/}
        {/*</div>*/}
    </div>
  );
}
export default Menu;
