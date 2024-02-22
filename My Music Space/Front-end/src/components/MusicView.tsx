const ImgPlaylist ="/src/img/texas-road-trip-playlist.jpg"
const ImgRadio="/src/img/music-note.png"

function Album({object}){
    return(
        <div className="Playlist">
            <img src={object['imgURL']}></img>
            <button>{object['name']}</button>
        </div>
    );
}

function Artista({object}){
    return(
        <div className="NewMusic">
            <img src={object['imgURL']}></img>
            <button>{object['name']}</button>
        </div>

    );
}

function Brano({object}){
    return(
        <div className="Radio">
            <p>{object['name']}</p>
            <img src={object['imgURL']}></img>
        </div>
    );
}

function MusicView() {


    // Type 1 == Album
    // Type 2 == Artisti
    // Type 3 == Brani

    const objects = [{
        type: 1,
        name: "Album1",
        imgURL: "/src/img/texas-road-trip-playlist.jpg"
    },
    {
        type: 1,
        name: "Album2",
        imgURL: "/src/img/texas-road-trip-playlist.jpg"
    },
    {
        type: 2,
        name: "Artista1",
        imgURL: "/src/img/texas-road-trip-playlist.jpg"
    },
    {
        type: 2,
        name: "Artista2",
        imgURL: "/src/img/texas-road-trip-playlist.jpg"
    },
    {
        type: 3,
        name: "Brano1",
        imgURL: "/src/img/music-note.png"
    },
    {
        type: 3,
        name: "Brano2",
        imgURL: "/src/img/music-note.png"
    },]


    return (
        <div className="MusicView" id = "MusicView">
            <div className="PlaylistColumn" >
                <div className="ColumnName">
                    <p>Album</p>
                </div>
                {objects.map((obj,index) => (
                    obj['type'] == 1 ? (<Album key={index} object={obj} />) : null))
                }
            </div>
            <div className="NewMusicColumn">
                <p>Artisti</p>
                {objects.map((obj,index) => (
                    obj['type'] == 2 ? (<Artista key={index} object={obj} />) : null))
                }
            </div>
            <div className="RadioColumn">
                <p>Brani</p>
                {objects.map((obj,index) => (
                    obj['type'] == 3 ? (<Brano key={index} object={obj} />) : null))
                }
            </div>
        </div>
    );
}
export default MusicView;