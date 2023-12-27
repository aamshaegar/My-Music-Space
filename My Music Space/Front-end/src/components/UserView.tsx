const imageUrl = "/src/img/user.jpg";

interface Props{
    name: string;
    surname:string;
    email:string;
    plane: string;
}

function UserView({name, surname, email, plane}:Props) {
    function selected() {
        document.getElementById("UserView")!.style.transition = "opacity 1s";
        setTimeout(function() {
            document.getElementById("UserView")!.style.opacity = "0";
        }, 50);
        setTimeout(function() {
            document.getElementById("UserView")!.style.display = "none";
        }, 500);
    }
    return (
        <div className="UserView" id ="UserView">
                <div className={"imgContainer"}>
                    <img className="immagini" src={imageUrl} alt="Immagine" onClick={() => selected()}/>

                </div>
                <p className="Welcome">Benvenuto, {name}</p>
            <div className="UserInfo">
            <p> Ecco i tuoi dati:</p>
            <p> Nome: {name}</p>
            <p> Cognome: {surname}</p>
            <p> Email: {email}</p>
            <p> Piano: {plane}</p>
            </div>
        </div>
    );
}
export default UserView;