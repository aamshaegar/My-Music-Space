import {useEffect} from "react";
import {useState} from "react";
import "../css/chatMessage.css";

let stompClient = null;

function ChatMex({object,username}){
    return(
        <div className="ChatMex">

            {object['sender'] == username ? 
    
                <div className="MessageBox MyMessageBox">
                    <div className="sender">{object['sender']}</div>
                    <div className="content">{object['content']}</div>
                    <div className="date">{object['date']}</div>

                </div>
            : 
                <div className="MessageBox OtherMessageBox">
                    <div className="sender">{object['sender']}</div>
                    <div className="content">{object['content']}</div>
                    <div className="date">{object['date']}</div>
                </div>
            }
            
        </div>
    );
}

function ChatMessage({message, handleClick}){
    
    // In ascolto sulla variabile "message == nome della chatroom"
    
    useEffect(() => {
        //console.log("In ChatMessage! ")
        //retrieveMessagesList();
        connect();
    }, [message]);


    // ----------------------------------------------------
    // Dichiarazione delle variabili
    // ----------------------------------------------------

    // Type: JOIN, CHAT, LEAVE
    const path = "http://localhost:8091"
    const [chatMessages, setChatMessages] = useState([]);
    const [status, setStatus] = useState("disconnected!");
    const [inputValue, setInputValue] = useState('');

    
    
    let username = "Aldo";
    let actualRoom = message.replace("#", "");
    let array = [];


    const handleChange = (event) => {
        setInputValue(event.target.value);
    };


    function retrieveMessagesList(){
        $.ajax({
            type:"GET",
            url: "/chat/messages",
            data: { room: actualRoom} ,
            contentType: "application/json",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
            }

        }).then(function(data) {
            let lista = data.reverse();
            array = lista;
            setChatMessages(lista);
        });
    }



    function connect() {
        setStatus("connecting...")
        let socket = new SockJS(path + '/websocket');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, onConnected, onError);
    }


    // se la connessione va bene, ci dobbiamo iscrivere al topic pubblico...
    // inoltriamo una richiesta al message broker per registrare l'utente username
    function onConnected() {
        stompClient.subscribe('/topic/messages/' + actualRoom, onMessageReceived);
        stompClient.send("/app/chat/" + actualRoom, {}, JSON.stringify({sender: username, type: 'JOIN'}))

        
    }

    function onError(error) {
        alert('ERROR! Non è stato possibile stabilire alcuna connessione con il webSocket server! ');
    }


    function disconnect() {
        if (stompClient !== null) {
            stompClient.disconnect();
            stompClient = null;
            setStatus("disconnected!")
            
        }
    }


    function back(){
        $("#ChatMessage").fadeOut(300, function(){
            disconnect();
            handleClick(-1);
        }); 
    }


    function onMessageReceived(payload) {
        
        // recupero dal payload l'oggetto message
        let new_message = JSON.parse(payload.body);
        if(new_message.type === 'JOIN') {
            if(new_message.sender == username) {
                setStatus("joined!")
                retrieveMessagesList();
            }

            // SEGANLARE LO STATUS DEGLI ALTRI UTENTI QUI!!!
            //status = 'joined!';

        } else if (new_message.type === 'LEAVE') {
            setStatus("left")
        } else {
            array.push(new_message);
            setChatMessages(array);
        }
    }


    function sendMessage(event) {

        if (event && event.key !== "Enter") {
            return;
        }

        if(inputValue != "" && stompClient) {
            let new_chatMessage = {
                sender: username,
                content: inputValue,
                type: 'CHAT',
                room: actualRoom,
                date: new Date().toLocaleString('en-GB')
            };
    
            console.log(new_chatMessage)
            stompClient.send("/app/chat/" + actualRoom, {}, JSON.stringify(new_chatMessage));
            setInputValue("");
        }
        
    }
    
    
    return(
        <div className="ChatMessage" id="ChatMessage">
            <div className="title">
                <div className="left">
                    <div className="titleSymbol"> <img src="/src/img/people.png" alt="People"/></div>
                    <div className="titleName">Chat Room &nbsp; <i>{message}</i> &nbsp; &nbsp;<span>[{status}]</span></div>
                </div>
                <div className="right">
                    <div className="backButton"><button id="backButton" onClick={() => {back()}}> &#8592;</button></div>
                </div>
            </div>

            <div className="chatContainer">
                <div id="ChatList">
                    {chatMessages.map((obj,index) => (<ChatMex key={index} object={obj} username={username}/>))}
                </div>
            </div>

            <div className="searchTerm">
                <input type="text" id="input" value={inputValue} onChange={handleChange} onKeyDown={(event) => {sendMessage(event)}} placeholder="Scrivi un messaggio qui!"></input>
                <button id="sendButton" onClick={() => {sendMessage()}}> &#10003;</button>
            </div>
        </div>
    )

}
export default ChatMessage;