const ImgPlaylist ="/src/img/texas-road-trip-playlist.jpg"
const ImgRadio="/src/img/music-note.png"

function Playlist(){
    return(
        <div className="Playlist">
            <img src={ImgPlaylist}></img>
            <button>On the Road</button>
        </div>
    );
}

function NewMusic(){
    return(
        <div className="NewMusic">
            <img src={ImgPlaylist}></img>
            <button>On the Road</button>
        </div>

    );
}

function Radio(){
    return(
        <div className="Radio">
            <p>On the Road</p>
            <img src={ImgRadio}></img>
        </div>

    );
}

function MusicView() {
    return (
        <div className="MusicView" id = "MusicView">
            <div className="PlaylistColumn" >
                <p>Playlist</p>
                <Playlist></Playlist>
                <Playlist></Playlist>
                <Playlist></Playlist>
            </div>
            <div className="NewMusicColumn">
                <p>Nuove Uscite</p>
                <NewMusic></NewMusic>
                <NewMusic></NewMusic>
                <NewMusic></NewMusic>
                <NewMusic></NewMusic>
                <NewMusic></NewMusic>
                <NewMusic></NewMusic>
            </div>
            <div className="RadioColumn">
                <p>Radio</p>
                <Radio></Radio>
                <Radio></Radio>
                <Radio></Radio>
                <Radio></Radio>
                <Radio></Radio>
                <Radio></Radio>
            </div>
        </div>
    );
}
export default MusicView;