import { useEffect } from "react";
import "../css/ShopProductView.css"
const ImgTicket = "/src/img/elodie-show-2023.jpg"
const ImgMerch ="/src/img/Cappello PTN.jpg"

function ShopProductView({object, handleClick}){

    useEffect(() => {
        $("#ShopProductView").show(0);
        document.getElementById("ShopProductView")!.style.display = "block";
        document.getElementById("ShopProductView")!.style.transition = "opacity 1s";
    }, []);

    function back(){
        document.getElementById("ShopProductView")!.style.opacity = "0";
        document.getElementById("ShopProductView")!.style.display = "none";
        document.getElementById("ShopView")!.style.display = "block";
        document.getElementById("ShopView")!.style.transition = "opacity 1s";
        setTimeout(function () {
            document.getElementById("ShopView")!.style.opacity = "1";
        }, 50);
        $(".search").show(0);
        handleClick(false)
    }


    return(
        <div id="ShopProductView">
            <div className="backButton"><button id="backButton" onClick={() => {back()}}> &#8592;</button></div>
            <div id="BackgroundSection">
                <h1>{object['artistName']}</h1>
                <h2>{object['itemName']}</h2>
                <img src={object['imageURL']}></img>
            </div>
            <div id="OperationSection">
                <button>Descrizione</button>
                <button>Recensioni</button>
                <button>Acquista</button>

                <div id = "ShopProductViewContainer">
                    {object['description']}
                </div>
            </div>
        </div>
    );
}

export default ShopProductView;