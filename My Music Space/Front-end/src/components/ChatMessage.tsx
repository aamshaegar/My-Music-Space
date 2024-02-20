import {useEffect} from "react";

function ChatMessage({message}){
    useEffect(() => {
        console.log("Nuovo messaggio ricevuto:", message);

    }, [message]);
    return(
    <div className="ChatMessage" id="ChatMessage">
        {console.log("Message in ChatMessage component:", message)}
            <p>{message}</p>
    </div>)

}
export default ChatMessage;