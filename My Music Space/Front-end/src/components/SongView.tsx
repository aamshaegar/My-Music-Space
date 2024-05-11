/*import { useEffect, useState } from "react";
import "../css/SongView.css";

function SongView({ handleClick, object }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
      $("#SongView").show(0);
      document.getElementById("SongView")!.style.display = "block";
      document.getElementById("SongView")!.style.transition = "opacity 1s";
    }, []);

    return(
        <div className = "SongView">
                <div id="prova"></div>
            </div>
    )
}
export default SongView;*/

import { useEffect, useState } from "react";
import "../css/ArtistView.css";
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

function SongView({ handleClick, object }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    $("#SongView").show(0);
    document.getElementById("SongView")!.style.display = "block";
    document.getElementById("SongView")!.style.transition = "opacity 1s";
  }, []);

  function GianClaudio() {
    document.getElementById("SongView")!.style.opacity = "0";
    document.getElementById("SongView")!.style.display = "none";
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
    /*<div id = "SongView">
            <div id="prova"></div>
        </div>*/

    <div id="SongView">
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
        <h1>Artista</h1>
        <h2>Marracash</h2>
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
            ))}*/
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
export default SongView;
