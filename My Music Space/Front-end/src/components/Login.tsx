const LogoUrl = "/src/img/My Music Space Logo.png";
import "../css/Login.css"

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function Login() {
    function mostraPopup() {
        var popup = document.getElementById("registrazionePopup");
        popup.style.display = "block";
    }

    function chiudiPopup() {
        var popup = document.getElementById("registrazionePopup");
        popup.style.display = "none";
    }

    function selected (){
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


    function checkInputAuth() {
        const email = $('#emailInput').val();
        const password = $('#passwordInput').val();
        if (!regex.test(email)) {
            alert("Email non valida.");
            return false;
        }
        if(password==""){
            alert("Campo password vuoto");
            return false;
        }
        return true;
    }

    function checkInputRegistr(){
        const name = $('#firstName').val();
        const surname = $('#lastName').val();
        const email = $('#emailRegistr').val();
        const password = $('#passwordRegistr').val();
        const passwordRep = $('#passwordRep').val();
        if(name=="" || surname=="" || email=="" || password=="" || passwordRep==""){
            alert("Compila tutti i campi");
            return false;
        }

        if(password!=passwordRep){
            alert("Le password non coincidono");
            return false;
        }

        if(password.length<4){
            alert("La password deve avere almeno 4 caratteri");
            return false;
        }

        if (!regex.test(email)) {
            alert("Email non valida.");
            return false;
        }

        return true;
    }

    function authentication(){
        //<button id="registrationButton" onClick={() => selected()}> AVANZA</button>
        //<div id="MessaggioRegistrazione">Non sei registrato? Registrati!</div>
        if(checkInputAuth()){
            $.ajax({
                url: 'http://localhost:8094/api/v1/auth/authenticate',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    email: $('#emailInput').val(),
                    password: $('#passwordInput').val()
                }),
                success: function(response) {
                    if(response.response=="User not found."){
                        alert(response.response);
                    } else if(response.response=="Password incorrect."){
                        alert(response.response);
                    } else {
                        alert(response.response);
                        console.log("token: " + response.token);
                        selected();
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Error during the request:', error);
                }
            });
        } else {
            // gestire il caso in cui il login non va a buon fine
        }
    }


    function register() {
        if(checkInputRegistr()) {
            $.ajax({
                url: 'http://localhost:8094/api/v1/auth/register',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    firstName: $('#firstName').val(),
                    lastName: $('#lastName').val(),
                    email: $('#emailRegistr').val(),
                    password: $('#passwordRegistr').val()
                }),
                success: function (response) {

                    if (response.response == "Error: username already exist") {
                        alert(response.response);
                    } else {
                        alert(response.response);
                        console.log("token: " + response.token);
                        selected();
                    }
                },
                error: function (xhr, status, error) {
                    console.error('Error during the request:', error);
                }
            });
        }else {
            // gestire il caso in cui il login non va a buon fine
        }
    }

    return (
        <div className="Login" id="login">
            <div className="slider-thumb"></div>
            <div className="ContainerLogin">
                <img className="LogoImg" src={LogoUrl}></img>
                <form>
                    <label htmlFor="email">Email:</label>
                    <br></br>
                    <input id="emailInput" placeholder="Inserisci l'email"></input>
                    <br></br>
                    <label htmlFor="password">Password:</label>
                    <br></br>
                    <input type="password" id="passwordInput" placeholder="Inserisci la password"></input>
                    <br></br>
                </form>
                <button id="loginButton" type="submit" value="Login" onClick={() => authentication()}>Entra</button>
            </div>


            <div id="registrazioneDiv" onClick={() => mostraPopup()}>
                Non sei registrato? Registrati ora.
            </div>

            <div id="registrazionePopup">
                <div id="registrazionePopupContent">
                    <span className="closeButton" onClick={() => chiudiPopup()}>x</span>
                    <form>
                        <label htmlFor="firstName">Nome:</label>
                        <br></br>
                        <input id="firstName" placeholder="Inserisci il tuo nome"></input>
                        <br></br>

                        <label htmlFor="lastName">Cognome:</label>
                        <br></br>
                        <input id="lastName" placeholder="Inserisci il tuo cognome"></input>
                        <br></br>

                        <label htmlFor="email">Email:</label>
                        <br></br>
                        <input id="emailRegistr" placeholder="Inserisci la tua email"></input>
                        <br></br>

                        <label htmlFor="password">Password:</label>
                        <br></br>
                        <input id="passwordRegistr" type="password" placeholder="Scegli una password"></input>
                        <br></br>

                        {/*TODO: aggiungere un bottone per mostrare la password*/}

                        <label htmlFor="email">Ripeti la password:</label>
                        <br></br>
                        <input id="passwordRep" type="password" placeholder="Conferma password"></input>
                        <br></br>
                    </form>

                    <button id="registerButton" value="Login" onClick={() => register()}>Registrati ora</button>
                </div>
            </div>


            <button id="registrationButton" onClick={() => selected()}> AVANZA</button>
        </div>
    );
}
export default Login;