import {useState} from "react";
import {useEffect} from "react";
import React from "react";
import "../css/MyLikeView.css"
function MyLikeView({focus, query}) {

    // questa lista verrà richiesta quando clicco sul bottone music, quindi sarà memorizzata nel padre e passata al figlio.
    useEffect(() => {
        if(focus == "MyLikeButton"){
            if(query && query != ""){
                alert("MyLikeButton view search bar piena OOOOOK")
            }
        }
    },[focus, query]);

    return (
        <div className="MyLikeView" id="MyLikeView">
            Ciao
        </div>
    );
}
export default MyLikeView;