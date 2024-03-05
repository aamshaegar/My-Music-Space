const LogoUrl = "/src/img/My Music Space Logo.png";
import "../css/Login.css"

function Login() {
    function selected (){
        console.log("Sono qui");
        document.getElementById("liquidContainer")!.style.display="block";
        document.getElementById("liquidContainer")!.style.transition = "opacity 1s";
        setTimeout(function() {
            document.getElementById("All")!.style.display = "block";
            document.getElementById("All")!.style.transition = "opacity 1s";
            document.getElementById("liquidContainer")!.style.opacity = "0";
            document.getElementById("login")!.style.opacity = "0";
        }, 2500);
        setTimeout(function (){
            document.getElementById("All")!.style.opacity = "1";
            document.getElementById("login")!.style.display = "none";
            document.getElementById("liquidContainer")!.style.display="none";}, 3000);
    }
    return (
        <div className="Login" id="login">
            <div className="slider-thumb"></div>
            <div className="ContainerLogin">
                <img className="LogoImg" src={LogoUrl}></img>
                <form>
                    <label htmlFor="email">Email:</label>
                    <br></br>
                    <input type="text" placeholder=""></input>
                    <br></br>
                    <label htmlFor="password">Password:</label>
                    <br></br>
                    <input type="text" placeholder=""></input>
                    <br></br>
                    <input id="LoginButton" type="submit" value="Login"></input>
                    <div id="MessaggioRegistrazione">Non sei registrato? Registrati!</div>
                </form>
                <button onClick={() => selected()}> AVANZA</button>
            </div>
        </div>
    );
}
export default Login;