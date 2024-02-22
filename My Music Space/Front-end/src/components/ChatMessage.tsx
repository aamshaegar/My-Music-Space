import {useEffect} from "react";
import "../css/chatMessage.css";



function ChatMex({object}){
    return(
        <div className="ChatMex">

            {object['sender'] == 'Io' ? 
    
                <div className="MyMessageBox">
                    <div className="sender">{object['sender']}</div>
                    <div className="content">{object['content']}</div>
                </div>
            : 
                <div className="OtherMessageBox">
                    <div className="sender">{object['sender']}</div>
                    <div className="content">{object['content']}</div>
                </div>
            }
            
        </div>
    );
}

function ChatMessage({message}){

    // Type: JOIN, CHAT, LEAVE
    const ChatMessages = [
        {"id":null,"content":"Contenuto1","sender":"Io","type":"CHAT","room":"NomeStanza","date":"Data"},
        {"id":null,"content":"Contenuto2","sender":"Nome mittente","type":"CHAT","room":"NomeStanza","date":"Data"},
        {"id":null,"content":"Contenuto3","sender":"Nome mittente","type":"CHAT","room":"NomeStanza","date":"Data"},
        {"id":null,"content":"Contenuto4","sender":"Nome mittente","type":"CHAT","room":"NomeStanza","date":"Data"}
    ];

    useEffect(() => {
        console.log("Nuovo messaggio ricevuto:", message);
    }, [message]);
    
    
    
    return(
        <div className="ChatMessage" id="ChatMessage">
            <div className="title">
                <div className="titleSymbol"> <img src="/src/img/people.png" alt="People"/></div>
                <div className="titleName">Chat Room <i>{message}</i></div>
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