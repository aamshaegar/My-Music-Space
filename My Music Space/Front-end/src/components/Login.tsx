const LogoUrl = "/src/img/My Music Space Logo.png";
import "../css/Login.css"

function Login() {
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


    function checkInput() {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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

    function authentication(){
        //<button id="registrationButton" onClick={() => selected()}> AVANZA</button>
        //<div id="MessaggioRegistrazione">Non sei registrato? Registrati!</div>
        if(checkInput()){
            $.ajax({
                url: 'http://localhost:8094/api/v1/auth/authenticate',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    //nome: 'lorenz',
                    //cognome: 'al',
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



    function prova(){
        console.log($('#emailInput').val());
        console.log($('#passwordInput').val());
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
            <button id="registrationButton" onClick={() => selected()}> AVANZA</button>
        </div>
    );
}
export default Login;