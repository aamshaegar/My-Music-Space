const LogoUrl = "/src/img/My Music Space Logo.png";
import "../css/Login.css"

function Login() {
    function selected (){
        console.log("Sono qui");
        document.getElementById("Login")!.style.opacity = "0";
        document.getElementById("Login")!.style.display = "none";
        document.getElementById("All")!.style.display = "block";
        document.getElementById("All")!.style.transition = "opacity 1s";
        setTimeout(function() {
            document.getElementById("All")!.style.opacity = "1";
        }, 50);
    }
    return (
        <div className="Login" id="login">
            <div className="slider-thumb"></div>
            <div className="ContainerLogin">
                <img className="LogoImg" src={LogoUrl}></img>
                <form>
                    <label htmlFor="email">Email:</label>
                    <br></br>
                    <input type="text"></input>
                    <br></br>
                    <label htmlFor="password">Password:</label>
                    <br></br>
                    <input type="text"></input>
                    <br></br>
                    <input id="LoginButton" type="submit" value="Login"></input>
                    <div id="MessaggioRegistrazione">Non sei registrato? Registrati!</div>
                    <button onClick={() => selected()}></button>
                </form>

            </div>
        </div>
    );
}
export default Login;