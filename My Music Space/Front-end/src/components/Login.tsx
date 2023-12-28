const LogoUrl = "/src/img/My Music Space Logo.png";

function Login() {
    return (
        <div className="Login">
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
                </form>

            </div>
        </div>
    );
}
export default Login;