const ImgPlaylist ="/src/img/texas-road-trip-playlist.jpg"
const ImgRadio="/src/img/music-note.png"

function Object({object}){
    return(
        <div className="Object">
            <div className="productImg">
                <img src={object['imgURL']}></img>
            </div>
            <div className="description">{object['title']}</div>
        </div>
    );
}

function MusicView() {


    // Type 1 == Album
    // Type 2 == Artisti
    // Type 3 == Brani

    const objects = [{
        title: "Viva la vida",
        type: 1,
        imgURL: "/src/img/Viva la vida.jpg",
    },
    {
        title: "Viva la vida",
        type: 1,
        imgURL: "/src/img/Viva la vida.jpg",
    },

    {
        title: "Viva la vida",
        type: 1,
        imgURL: "/src/img/Viva la vida.jpg",
    },

    {
        title: "Viva la vida",
        type: 1,
        imgURL: "/src/img/Viva la vida.jpg",
    },

    {
        title: "Viva la vida",
        type: 1,
        imgURL: "/src/img/Viva la vida.jpg",
    },
    {
        title: "Viva la vida",
        type: 2,
        imgURL: "/src/img/Viva la vida.jpg",
    },
    {
        title: "Viva la vida",
        type: 2,
        imgURL: "/src/img/Viva la vida.jpg",
    },
    {
        title: "Viva la vida",
        type: 3,
        imgURL: "/src/img/Viva la vida.jpg",
    },
    {
        title: "Viva la vida",
        type: 3,
        imgURL: "/src/img/Viva la vida.jpg",
    }
]


    return (
        <div className="MusicView" id = "MusicView">

            <div className="Container">
                <div className="title">Artisti</div>
                    {objects.map((obj,index) => (
                        obj['type'] == 1 ? (<Object key={index} object={obj} />) : null))
                    }
            </div>
            <div className="Container">
                <div className="title">Album</div>
                    {objects.map((obj,index) => (
                        obj['type'] == 2 ? (<Object key={index} object={obj} />) : null))
                    }
            </div>

            <div className="Container">
                <div className="title">Brani</div>
                    {objects.map((obj,index) => (
                        obj['type'] == 3 ? (<Object key={index} object={obj} />) : null))
                    }
            </div>

        </div>
    );
}
export default MusicView;