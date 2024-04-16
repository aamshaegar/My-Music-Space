import {useEffect} from "react";
import React from "react";
import "../css/MyLikeView.css"
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
const ImgStaticMusicLike="/src/img/MyMusicLikeStatic.PNG"
function MyLikeView({focus, query}) {

    // questa lista verrà richiesta quando clicco sul bottone music, quindi sarà memorizzata nel padre e passata al figlio.
    useEffect(() => {
        if(focus == "MyLikeButton"){
            if(query && query != ""){
                alert("MyLikeButton view search bar piena OOOOOK")
            }
        }
    },[focus, query]);

    function selected(id){
        if (id=="Chat"){
            document.getElementById("MyMusicLikeStatic")!.style.opacity = "0";
            document.getElementById("MyMusicLikeStatic")!.style.display = "none";
            document.getElementById("MyChatContainer")!.style.display = "block";
            document.getElementById("MyChatContainer")!.style.transition = "opacity 1s";
            document.getElementById("MyChatButton")!.style.backgroundColor = "#3E99CF";
            document.getElementById("MyMusicButton")!.style.backgroundColor = "#404040";
            setTimeout(function () {
                document.getElementById("MyChatContainer")!.style.opacity = "1";
            }, 50);

        }
        if (id=="Musica"){
            document.getElementById("MyChatContainer")!.style.opacity = "0";
            document.getElementById("MyChatContainer")!.style.display = "none";
            document.getElementById("MyMusicLikeStatic")!.style.display = "block";
            document.getElementById("MyMusicLikeStatic")!.style.transition = "opacity 1s";
            document.getElementById("MyMusicButton")!.style.backgroundColor = "#3E99CF";
            document.getElementById("MyChatButton")!.style.backgroundColor = "#404040";
            setTimeout(function () {
                document.getElementById("MyMusicLikeStatic")!.style.opacity = "1";
            }, 50);

        }

    }

    return (
        <div className="MyLikeView" id="MyLikeView">
            <h1>Preferiti</h1>
            <button id="MyChatButton"  onClick={() => {selected("Chat")}} >Chat</button>
            <button id="MyMusicButton"  onClick={() => {selected("Musica")}}>Musica</button>
            <div id="MyChatContainer"></div>
            <img id="MyMusicLikeStatic" src={ImgStaticMusicLike}></img>
        </div>
    );
}
export default MyLikeView;