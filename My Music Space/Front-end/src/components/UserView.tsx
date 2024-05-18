import "../css/UserView.css"
const imageUrl = "/src/img/user.jpg";

function UserView() {
return(
    <div className="UserView" id="UserView">
        <div className="BlueRectangle">
            <img className="UserImage" src={imageUrl} alt="Immagine"/>
        </div>
        <div className="GreyMiniRectangle">
            <p>Cambio password</p>
        </div>
        <div className="GreyMiniRectangle">
            <p>Logout       ►</p>
        </div>
        <div className="GreyRectangle">
            <h1>Account</h1>
            <p>Nome:</p>
            <p>Cognome:</p>
            <p>Email:</p>
            <p>Piano:</p>
        </div>
    </div>
)
}

export default UserView;