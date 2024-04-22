import { useState } from "react";
import { useEffect } from "react";
const ImgPlaylist = "/src/img/texas-road-trip-playlist.jpg";
const ImgRadio = "/src/img/music-note.png";
const imgArtist = "/src/img/harryStyles.webp";
import "../css/MusicView.css";

function Album({ object }) {
  return (
    <div className="albumDiv">
      <div className="externDiv">
        <img id="albumImg" src={object["imgURL"]}></img>
      </div>
      <div className="description">{object["title"]}</div>
    </div>
  );
}

function Artist({ object }) {
  return (
    <div className="artistDiv">
      <div className="externDiv">
        <img id="artistImg" src={object["imgURL"]}></img>
      </div>
      <div className="description">{object["title"]}</div>
    </div>
  );
}

function Song({ object }) {
  return (
    <div className="songDiv">
      <div className="externDiv">
        <img id="songImg" src={object["imgURL"]}></img>
      </div>
      <div className="description">{object["title"]}</div>
    </div>
  );
}

function MusicView({ focus, query }) {
  // questa lista verrà richiesta quando clicco sul bottone music, quindi sarà memorizzata nel padre e passata al figlio.
  useEffect(() => {
    if (focus == "musicButton") {
      $("#loaderBar").fadeIn(0);
      if (query && query != "") {
        alert("Music view search bar piena OOOOOK");
      }
      $("#loaderBar").fadeOut(200);
    }
  }, [focus, query]);

  // Type 1 == Album
  // Type 2 == Artisti
  // Type 3 == Brani

  const objects = [
    {
      title: "Viva la vida",
      type: 1,
      imgURL: "/src/img/Viva la vida.jpg",
    },
    {
      title: "Viva la vida",
      type: 1,
      imgURL: "/src/img/Viva la vida.jpg",
    },

    {
      title: "Viva la vida",
      type: 1,
      imgURL: "/src/img/Viva la vida.jpg",
    },

    {
      title: "Viva la vida",
      type: 1,
      imgURL: "/src/img/Viva la vida.jpg",
    },

    {
      title: "Viva la vida",
      type: 1,
      imgURL: "/src/img/Viva la vida.jpg",
    },
    {
      title: "HS",
      type: 2,
      imgURL: "/src/img/harryStyles.webp",
    },
    {
      title: "HS",
      type: 2,
      imgURL: "/src/img/harryStyles.webp",
    },
    {
      title: "Viva la vida",
      type: 3,
      imgURL: "/src/img/Viva la vida.jpg",
    },
    {
      title: "Viva la vida",
      type: 3,
      imgURL: "/src/img/Viva la vida.jpg",
    },
  ];

  return (
    <div className="MusicView" id="MusicView">
      <div className="title">Artisti</div>
      <div className="Container">
        {objects.map((obj, index) =>
          obj["type"] == 1 ? <Album key={index} object={obj} /> : null
        )}
      </div>

      <div className="title">Album</div>
      <div className="Container">
        {objects.map((obj, index) =>
          obj["type"] == 2 ? <Artist key={index} object={obj} /> : null
        )}
      </div>

      <div className="title">Brani</div>
      <div className="Container">
        {objects.map((obj, index) =>
          obj["type"] == 3 ? <Song key={index} object={obj} /> : null
        )}
      </div>
    </div>
  );
}
export default MusicView;
