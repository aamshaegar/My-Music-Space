import {useEffect} from "react";

const ChatMessages = ["#Pop","#Classic","#Metal","#Funky","#R&B","#Indie","#Soul","Banana","Casa"];

function ChatMex({Message}){
    return(
        <div className="ChatMex" id="ChatMex">
            {console.log("Nuovo messaggio ricevuto:", Message)}
            <p>{Message}</p>
        </div>
    );
}

function ChatMessage({message}){
    useEffect(() => {
        console.log("Nuovo messaggio ricevuto:", message);

    }, [message]);
    return(
    <div className="ChatMessage" id="ChatMessage">
            <p>{message}</p>
                <div id="Chats">
                    {ChatMessages.map(Message => (
                        <ChatMex key={Message} name={Message} />
                    ))}
                </div>
    </div>)

}
export default ChatMessage;