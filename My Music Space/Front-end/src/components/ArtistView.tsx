import { useEffect } from "react";
import "../css/ArtistView.css";


function ArtistView({handleClick,object}){

    useEffect(() => {
        $("#ArtistView").show(0);
        document.getElementById("ArtistView")!.style.display = "block";
        document.getElementById("ArtistView")!.style.transition = "opacity 1s";
    }, []);

    return (
        <div id = "ArtistView">
            <div id="prova"></div>
        </div>
    );
}


export default ArtistView;
