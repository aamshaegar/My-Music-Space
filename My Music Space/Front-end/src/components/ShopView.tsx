import {useState} from "react";
import {useEffect} from "react";
const ImgVinyl = "/src/img/Vinyl_icon.png"
const ImgAlbum = "/src/img/Viva la vida.jpg"
const ImgTicket = "/src/img/elodie-show-2023.jpg"
const ImgMerch ="/src/img/Cappello PTN.jpg"
import "../css/ShopView.css"

function selectedShop({ ImgTicket: PathTicket, ImgMerch :PathMerch }) {


    //FATTO ALLA VELOCE
    let nomeProdotto;
    if(PathTicket != undefined) {
        nomeProdotto = PathTicket.split('/').pop().split('.').slice(0, -1).join('.');
    }
    if(PathMerch != undefined) {
        nomeProdotto = PathMerch.split('/').pop().split('.').slice(0, -1).join('.');
    }
    console.log(nomeProdotto);
    

    document.getElementById("ShopView")!.style.opacity = "0";
    document.getElementById("ShopView")!.style.display = "none";
    document.getElementById("ShopProductView")!.style.display = "block";
    document.getElementById("ShopProductView")!.style.transition = "opacity 1s";
    setTimeout(function () {
        document.getElementById("ShopProductView")!.style.opacity = "1";
    }, 50);
    $(".search").hide(0);
}

function TicketProduct({object}){
    return(
        <div className="TicketProduct" onClick={() => selectedShop({ImgTicket})}>
            <img src={ImgTicket} className="TicketImg"></img>
        </div>
    );
}

function MerchProduct({object}){
    return(
        <div className="MerchProduct" onClick={() => selectedShop({ImgMerch})}>
            <img src={ImgMerch} className="Merch"></img>
        </div>
    );
}

function ShopView({focus, query}) {

    // questa lista verrà richiesta quando clicco sul bottone music, quindi sarà memorizzata nel padre e passata al figlio.
    useEffect(() => {
        if(focus == "shopButton"){
            if(query && query != ""){
                alert("Shop view search bar piena OOOOOK")
            }
        }
    },[focus, query]);


    // Type 1 == CD/vinili
    // Type 2 == Eventi
    // Type 3 == prodotti

    const objects = [{
        type: 1,
        name: "Vinile 1"
    },
    {
        type: 1,
        name: "Cd 1"
    },

    {
        type: 2,
        name: "Evento1"
    },
    {
        type: 2,
        name: "Evento1"
    },
    {
        type: 2,
        name: "Evento1"
    },
    {
        type: 2,
        name: "Evento2"
    },
    {
        type: 2,
        name: "Evento1"
    },
    {
        type: 2,
        name: "Evento2"
    },
    {
        type: 2,
        name: "Evento2"
    },

    {
        type: 3,
        name: "prodotto1"
    },
    ]


    return (
        <div className="ShopView" id = "ShopView">
            <div className="MerchRow">
                {objects.map((obj,index) => (
                    obj['type'] != 2 ? (<MerchProduct key={index} object={obj} />) : null))
                }

            </div>

            <div>Eventi</div>
            <div className="TicketRow">
                {objects.map((obj,index) => (
                    obj['type'] == 2 ? (<TicketProduct key={index} object={obj} />) : null))
                }
            </div>

            <div>Prodotti</div> 
            <div className="TicketRow">
                {objects.map((obj,index) => (
                    obj['type'] == 2 ? (<TicketProduct key={index} object={obj} />) : null))
                }
            </div>
        </div>
    );
}
export default ShopView;