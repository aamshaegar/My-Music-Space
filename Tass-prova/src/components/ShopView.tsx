const ImgVinyl = "/src/img/Vinyl_icon.png"
const ImgAlbum = "/src/img/Viva la vida.jpg"
const ImgTicket = "/src/img/elodie-show-2023.jpg"
const ImgMerch ="/src/img/Cappello PTN.jpg"

function VinylProduct(){
    return(
        <div className="VinylProduct">
            <img className="Vinyl" src={ImgVinyl}></img>
            <img src={ImgAlbum}></img>
            <p>Viva la Vida</p>
        </div>
    );
}

function TicketProduct(){
    return(
        <div className="TicketProduct">
            <img src={ImgTicket} className="TicketFront"></img>
            <img src={ImgTicket} className="TicketBack"></img>
            <p>Elodie 2023</p>
        </div>
    );
}

function MerchProduct(){
    return(
        <div className="MerchProduct">
            <img src={ImgMerch} className="Merch"></img>
            <p>Cappello PTN</p>
        </div>
    )
}

function ShopView() {
    return (
        <div className="ShopView" id = "ShopView">
            <div className="VinylRow">
                <VinylProduct></VinylProduct>
                <VinylProduct></VinylProduct>
                <VinylProduct></VinylProduct>
                <VinylProduct></VinylProduct>
                <VinylProduct></VinylProduct>
            </div>
            <div className="TicketRow">
                <TicketProduct></TicketProduct>
                <TicketProduct></TicketProduct>
                <TicketProduct></TicketProduct>
                <TicketProduct></TicketProduct>
                <TicketProduct></TicketProduct>
            </div>
            <div className="MerchRow">
                <MerchProduct></MerchProduct>
                <MerchProduct></MerchProduct>
                <MerchProduct></MerchProduct>
                <MerchProduct></MerchProduct>
                <MerchProduct></MerchProduct>
            </div>
        </div>
    );
}
export default ShopView;