const ImgVinyl = "/src/img/Vinyl_icon.png"
const ImgAlbum = "/src/img/Viva la vida.jpg"

function VinylProduct(){
    return(
        <div className="VinylProduct">
            <img className="Vinyl" src={ImgVinyl}></img>
            <img src={ImgAlbum}></img>
            <p>Viva la Vida</p>
        </div>
    );
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
        </div>
    );
}
export default ShopView;