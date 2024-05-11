import { useEffect, useState } from "react";
import "../css/AlbumView.css";
const imagePath = "/src/img/Viva la vida.jpg";

function SongSelected({ object }) {
  return (
    <div className="SongSelected">
      <img src={imagePath}></img>
      <h1>Persona</h1>
      <h2>2019</h2>
    </div>
  );
}

function AlbumView({ handleClick, object }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    $("#AlbumView").show(0);
    document.getElementById("AlbumView")!.style.display = "block";
    document.getElementById("AlbumView")!.style.transition = "opacity 1s";
  }, []);

  function GianClaudio() {
    document.getElementById("AlbumView")!.style.opacity = "0";
    document.getElementById("AlbumView")!.style.display = "none";
    document.getElementById("MusicView")!.style.display = "block";
    document.getElementById("MusicView")!.style.transition = "opacity 1s";
    setTimeout(function () {
      document.getElementById("MusicView")!.style.opacity = "1";
    }, 50);
    $(".search").show(0);
    handleClick(false);
  }

  function changeContainer(Clicked) {
    document.getElementById("DescriptionC")!.style.opacity = "0";
    document.getElementById("DescriptionC")!.style.display = "none";
    document.getElementById("ReviewsC")!.style.opacity = "0";
    document.getElementById("ReviewsC")!.style.display = "none";
    document.getElementById("BuyC")!.style.opacity = "0";
    document.getElementById("BuyC")!.style.display = "none";
    if (Clicked == "Descrizione") {
      document.getElementById("DescriptionC")!.style.opacity = "1";
      document.getElementById("DescriptionC")!.style.display = "block";
    }
    if (Clicked == "Recensioni") {
      document.getElementById("ReviewsC")!.style.opacity = "1";
      document.getElementById("ReviewsC")!.style.display = "block";
    }
    if (Clicked == "Acquista") {
      document.getElementById("BuyC")!.style.opacity = "1";
      document.getElementById("BuyC")!.style.display = "block";
    }
  }

  return (
    /*<div id = "AlbumView">
            <div id="prova"></div>
        </div>*/

    <div id="AlbumView">
      <div className="backButton">
        <button
          id="backButton"
          onClick={() => {
            GianClaudio();
          }}
        >
          {" "}
          &#8592;
        </button>
      </div>
      <div id="BackgroundS">
        <h1>Pinguini Tattici Nucleari</h1>
        <h2>Fake News</h2>
        <img src={"/src/img/marracash.png"}></img>
      </div>
      <div id="OperationS">
        <button
          onClick={() => {
            changeContainer("Descrizione");
          }}
        >
          Brani
        </button>
        <button
          onClick={() => {
            changeContainer("Recensioni");
          }}
        >
          Album
        </button>
        <button
          onClick={() => {
            changeContainer("Acquista");
          }}
        >
          Bio
        </button>

        <div id="ArtistContainer">
          <div id="DescriptionC">
            {items.map((obj, index) => (
              <SongSelected key={index} object={obj} />
            ))}
          </div>
          <div id="ReviewsC">
            <SongSelected object={null} />
          </div>
          <div id="BuyC">
            <p>Prezzo: {object["price"]},00 €</p>
            <img src={imagePath}></img>
            <br></br>
            <button id="AddtoCart">Aggiungi al carrello</button>
            <button id="AddtoCart">Acquista ora</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AlbumView;
