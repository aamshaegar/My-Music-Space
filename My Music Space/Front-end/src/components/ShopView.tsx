const ImgVinyl = "/src/img/Vinyl_icon.png"
const ImgAlbum = "/src/img/Viva la vida.jpg"
const ImgTicket = "/src/img/elodie-show-2023.jpg"
const ImgMerch ="/src/img/Cappello PTN.jpg"
import "../css/ShopView.css"

function TicketProduct({object}){
    return(
        <div className="TicketProduct">
            <img src={ImgTicket} className="TicketImg"></img>
        </div>
    );
}

function MerchProduct({object}){
    return(
        <div className="MerchProduct">
            <img src={ImgMerch} className="Merch"></img>
        </div>
    );
}

function ShopView() {

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
            <p>Eventi</p>
            <div className="TicketRow">
                {objects.map((obj,index) => (
                    obj['type'] == 2 ? (<TicketProduct key={index} object={obj} />) : null))
                }
            </div>
            <p>Prodotti</p>
            <div className="TicketRow">
                {objects.map((obj,index) => (
                    obj['type'] == 2 ? (<TicketProduct key={index} object={obj} />) : null))
                }
            </div>
        </div>
    );
}
export default ShopView;