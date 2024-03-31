import {useState} from "react";
import {useEffect} from "react";
const ImgVinyl = "/src/img/Vinyl_icon.png"
const ImgAlbum = "/src/img/Viva la vida.jpg"
const ImgTicket = "/src/img/elodie-show-2023.jpg"
const ImgMerch ="/src/img/Cappello PTN.jpg"
const imagePath = "http://localhost:8093"
import "../css/ShopView.css"



function selectedShop({ object }) {

    // TROVARE UN MODO PER PASSARE QUESTA PROPERIES A SHOPPRODUCTVIEW
    // forse quella componente va messa in shopView al pari di chatMessages

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

    let path = imagePath + object['imageURL']
    path = path.split(" ").join("%20")

    //console.log(path)
    return(
        <div className="TicketProduct" onClick={() => selectedShop({object})}>
            <img src={path} className="TicketImg"></img>
        </div>
    );
}


function MerchProduct({object}){

    let path = imagePath + object['imageURL']
    path = path.split(" ").join("%20")

    return(
        <div className="MerchProduct" onClick={() => selectedShop({object})}>
            <img src={path} className="Merch"></img>
        </div>
    );
}


function ShopView({focus, query}) {

    const [items, setItems] = useState([]);
    const [threeItems, setThreeItems] = useState([]);

    useEffect(() => {
        if(focus == "shopButton"){
            if(query && query != ""){
                retrieveItems({itemName:query},"/shop/items/search")
            }else{
                // POSSIBILE MODIFICA: SE LA QUERY NON DA 
                // RISULTATO ALLORA NON CANCELLIAMO LA PRECEDENTE VIEW. QUINDI LASCIAMO GLI OGGETTI DI PRIMA
                retrieveItems({},"/shop/items")
            }
        }
    },[focus, query]);


    function retrieveItems(params, URL){

        $.ajax({
            type:"GET",
            url: URL,
            data:params,
            contentType: "application/json",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
            }

        }).then(function(data) {

            let products = []
            let itemList = []
            for(const el in data) {
                if(data[el]['type'] == "PRODUCT"){
                    products.push(data[el])
                }else{
                    itemList.push(data[el])
                }
            }

            if(products.length > 3){
                let firstThreeItems = products.slice(0, 3);
                setThreeItems(firstThreeItems)
                products.splice(0, 3);
            }
            itemList = itemList.concat(products)
            setItems(itemList);
        });
    }



    return (
        <div className="ShopView" id = "ShopView">
            
            <div id="inEvidenza" className="labelRow">In evidenza</div>
            <div className="MerchRow">
                {threeItems.map((obj,index) => (
                    (<MerchProduct key={index} object={obj} />) ))
                }

            </div>

            <div className="TicketRow">
                <div className="labelRow">Eventi</div>
                <div className="scrollBar">
                    {items.map((obj,index) => (
                        obj['type'] == "EVENT" ? (<TicketProduct key={index} object={obj} />) : null))
                    }
                </div>
            </div>

            <div className="TicketRow"> 
                <div className="labelRow">Prodotti</div> 
                <div className="scrollBar">
                    {items.map((obj,index) => (
                        obj['type'] == "PRODUCT" ? (<TicketProduct key={index} object={obj} />) : null))
                    }
                </div>
            </div>

        </div>
    );
}
export default ShopView;