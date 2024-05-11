import { useState } from "react";
import { useEffect } from "react";
const ImgPlaylist = "/src/img/texas-road-trip-playlist.jpg";
const ImgRadio = "/src/img/music-note.png";
const imgArtist = "/src/img/harryStyles.webp";
const imgPath = "http://localhost:8092/";
import "../css/MusicView.css";
import ArtistView from "./ArtistView";
import SongView from "./SongView";
import AlbumView from "./AlbumView";

function selectArtist() {
  $(".search").hide(0);
  document.getElementById("MusicView")!.style.opacity = "0";
  document.getElementById("MusicView")!.style.display = "none";
  setTimeout(function () {
    document.getElementById("ArtistView")!.style.opacity = "1";
  }, 50);
}

function selectSong() {
  $(".search").hide(0);
  document.getElementById("MusicView")!.style.opacity = "0";
  document.getElementById("MusicView")!.style.display = "none";
  setTimeout(function () {
    document.getElementById("SongView")!.style.opacity = "1";
  }, 50);
}

function selectAlbum() {
  $(".search").hide(0);
  document.getElementById("MusicView")!.style.opacity = "0";
  document.getElementById("MusicView")!.style.display = "none";
  setTimeout(function () {
    document.getElementById("AlbumView")!.style.opacity = "1";
  }, 50);
}

function Album({ object, setAlbum }) {
  let path = imgPath + object["imageURL"];

  function clickOnAlbum() {
    $("#AlbumView").show(0);
    setAlbum(object);
    selectAlbum({ object });
  }
  return (
    <div className="albumDiv" onClick={() => clickOnAlbum()}>
      <div className="externDiv">
        <img id="albumImg" src={path}></img>
        <div className="description">{object["title"]}</div>
      </div>
    </div>
  );
}

function Artist({ object, setArtist }) {
  let path = imgPath + object["imageURL"];

  function clickOnArtist() {
    $("#ArtistView").show(0);
    setArtist(object);
    selectArtist({ object });
  }

  return (
    <div className="artistDiv" onClick={() => clickOnArtist()}>
      <div className="externDiv">
        <img id="artistImg" src={path}></img>
        <h1 className="description">{object["name"]}</h1>
      </div>
    </div>
  );
}

function Song({ object, setSong }) {
  let path = imgPath + object["imageURL"];

  function clickOnSong() {
    $("#SongView").show(0);
    setSong(object);
    selectSong({ object });
  }
  return (
    <div className="songDiv" onClick={() => clickOnSong()}>
      <div className="externDiv">
        <img id="songImg" src={path}></img>
        <h1 className="description">{object["title"]}</h1>
      </div>
    </div>
  );
}

function MusicView({ focus, query }) {
  const [artist, setArtist] = useState({});
  const [artistArray, setArtistArray] = useState([]);

  const [song, setSong] = useState({});
  const [songArray, setSongArray] = useState([]);

  const [album, setAlbum] = useState({});
  const [albumArray, setAlbumArray] = useState([]);

  const [buttonClickedArtist, setButtonClickedArtist] = useState(false);
  const [buttonClickedSong, setButtonClickedSong] = useState(false);
  const [buttonClickedAlbum, setButtonClickedAlbum] = useState(false);

  // questa lista verrà richiesta quando clicco sul bottone music, quindi sarà memorizzata nel padre e passata al figlio.
  useEffect(() => {
    $("#ArtistView").hide(0);
    $("#SongView").hide(0);
    $("#AlbumView").hide(0);
    if (focus == "musicButton") {
      $("#loaderBar").fadeIn(0);

      $.ajax({
        url: "http://localhost:8092/artist",
        method: "GET",
        contentType: "application/json",
        crossDomain: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers":
            "X-Requested-With, content-type, Authorization",
        },
        success: function (data) {
          let artist = [];
          for (const el in data) {
            artist.push(data[el]);
          }
          console.log(artist);
          setArtistArray(artist);
        },
        error: function (error) {
          console.error("Error:", error);
        },
      });

      $.ajax({
        url: "http://localhost:8092/song",
        method: "GET",
        contentType: "application/json",
        crossDomain: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers":
            "X-Requested-With, content-type, Authorization",
        },
        success: function (data) {
          let song = [];
          for (const el in data) {
            song.push(data[el]);
          }
          console.log(song);
          setSongArray(song);
        },
        error: function (error) {
          console.error("Error:", error);
        },
      });

      $.ajax({
        url: "http://localhost:8092/album",
        method: "GET",
        contentType: "application/json",
        crossDomain: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers":
            "X-Requested-With, content-type, Authorization",
        },
        success: function (data) {
          let album = [];
          for (const el in data) {
            album.push(data[el]);
          }
          console.log(album);
          setAlbumArray(album);
        },
        error: function (error) {
          console.error("Error:", error);
        },
      });

      $("#loaderBar").fadeOut(200);
    }
  }, [focus, query]);

  useEffect(() => {
    setButtonClickedArtist(false);
    setButtonClickedSong(false);
    setButtonClickedAlbum(false);
  }, []);

  function selectArtist(newObject) {
    setButtonClickedArtist(true);
    setArtist(newObject);
  }

  function selectSong(newObject) {
    setButtonClickedSong(true);
    setSong(newObject);
  }

  function selectAlbum(newObject) {
    setButtonClickedAlbum(true);
    setAlbum(newObject);
  }

  function handleClickArtist(param) {
    setButtonClickedArtist(false);
  }

  function handleClickAlbum(param) {
    setButtonClickedAlbum(false);
  }

  function handleClickSong(param) {
    setButtonClickedSong(false);
  }

  function clickOnCkaudio() {
    console.log("stupido");
  }

  return (
    <div className="" id="">
      <div className="MusicView" id="MusicView">
        <div className="claudio">
          <div className="sinistro" onClick={() => clickOnCkaudio()}>
            Div sx
          </div>
          <div className="sinistro" onClick={() => clickOnCkaudio()}>
            Div sx
          </div>
          <div className="destro" onClick={() => clickOnCkaudio()}>
            Div dx
          </div>
        </div>

        <div className="title">Album</div>
        <div className="Container">
          <div className="scrollBar">
            {albumArray.map((obj, index) => (
              <Album key={index} object={obj} setAlbum={selectAlbum} />
            ))}
          </div>
        </div>

        <div className="title">Artisti</div>
        <div className="Container">
          <div className="scrollBar">
            {artistArray.map((obj, index) => (
              <Artist key={index} object={obj} setArtist={selectArtist} />
            ))}
          </div>
        </div>

        <div className="title">Brani</div>
        <div className="Container">
          <div className="scrollBar">
            {songArray.map((obj, index) => (
              <Song key={index} object={obj} setSong={selectSong} />
            ))}
          </div>
        </div>
      </div>
      {buttonClickedArtist && (
        <ArtistView object={artist} handleClick={handleClickArtist} />
      )}
      {buttonClickedAlbum && (
        <AlbumView object={album} handleClick={handleClickAlbum}></AlbumView>
      )}
      {buttonClickedSong && (
        <SongView object={album} handleClick={handleClickSong}></SongView>
      )}
    </div>
  );
}
export default MusicView;
