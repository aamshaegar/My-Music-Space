import {useEffect} from "react";

const ChatMessages = ["ciao come va?","Tutto bene?","Mha... così così!"];

function ChatMex({name}){
    return(
        <div className="ChatMex" id="ChatMex">
            {console.log("Nuovo messaggio ricevuto:", name)}
            <p>{name}</p>
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
                {ChatMessages.map(mex => (
                    <ChatMex key={mex} name={mex} />
                ))}
            </div>
        </div>
    )

}
export default ChatMessage;