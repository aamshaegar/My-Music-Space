import {useEffect} from "react";
import "../css/chatMessage.css";



function ChatMex({object}){
    return(
        <div className="ChatMex">

            {object['sender'] == 'Io' ? 
    
                <div className="MessageBox MyMessageBox">
                    <div className="sender">{object['sender']}</div>
                    <div className="content">{object['content']}</div>
                </div>
            : 
                <div className="MessageBox OtherMessageBox">
                    <div className="sender">{object['sender']}</div>
                    <div className="content">{object['content']}</div>
                </div>
            }
            
        </div>
    );
}

function ChatMessage({message, handleClick}){
    
    // In ascolto sulla variabile "message == nome della chatroom"
    
    useEffect(() => {
        //console.log("In ChatMessage! ")
    }, [message]);
    

    /*  Qui bisogna fare le chiamate al "chat-service".
        Una volta catturato il click su una certa chat, all'atto del caricamento di chatMessage
        facciamo partire una richiesta Di connessione al chat-service ottenendo 
        la lista dei messaggi da visualizzare. 
    */

    // GESTIRE LE CORS POLICY CON REACT JS

    // ----------------------------------------------------
    // Dichiarazione delle variabili
    // ----------------------------------------------------

    // Type: JOIN, CHAT, LEAVE
    let ChatMessages = [
        {"id":null,"content":"Contenuto1","sender":"Io","type":"CHAT","room":"NomeStanza","date":"Data"},
        {"id":null,"content":"Contenuto2","sender":"Nome mittente","type":"CHAT","room":"NomeStanza","date":"Data"},
        {"id":null,"content":"Contenuto3","sender":"Nome mittente","type":"CHAT","room":"NomeStanza","date":"Data"},
        {"id":null,"content":"Contenuto4","sender":"Nome mittente","type":"CHAT","room":"NomeStanza","date":"Data"}
    ];


    function back(){
        $("#ChatMessage").fadeOut(300, function(){
            handleClick(-1);
        }); 
    }
    
    
    return(
        <div className="ChatMessage" id="ChatMessage">
            <div className="title">
                <div className="left">
                    <div className="titleSymbol"> <img src="/src/img/people.png" alt="People"/></div>
                    <div className="titleName">Chat Room <i>{message}</i></div>
                </div>
                <div className="right">
                    <div className="backButton"><button id="backButton" onClick={() => {back()}}> &#8592;</button></div>
                </div>
            </div>

            <div className="chatContainer">
                <div id="ChatList">
                    {ChatMessages.map((obj,index) => (<ChatMex key={index} object={obj} />))}
                </div>
            </div>

            <div className="searchTerm">
                <input type="text" placeholder="Scrivi un messaggio qui!"></input>
            </div>
        </div>
    )

}
export default ChatMessage;