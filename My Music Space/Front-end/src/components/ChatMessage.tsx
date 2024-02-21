import {useEffect} from "react";

function ChatMessage({message}){
    useEffect(() => {
        console.log("Nuovo messaggio ricevuto:", message);

    }, [message]);
    return(
    <div className="ChatMessage" id="ChatMessage">
            <p>{message}</p>
    </div>)

}
export default ChatMessage;