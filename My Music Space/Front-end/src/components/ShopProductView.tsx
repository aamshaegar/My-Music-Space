import "../css/ShopProductView.css"
const ImgTicket = "/src/img/elodie-show-2023.jpg"
const ImgMerch ="/src/img/Cappello PTN.jpg"

function ShopProductView(){
    return(
        <div id="ShopProductView">
            <div id="BackgroundSection">
                <h1>Elodie</h1>
                <h2>Show 2023</h2>
                <img src={ImgTicket}></img>
            </div>
            <div id="OperationSection">
                <button>Descrizione</button>
                <button>Recensioni</button>
                <button>Acquista</button>
            </div>
            CIAO
        </div>
    );
}

export default ShopProductView;