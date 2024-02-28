import {useState} from "react";
import {useEffect} from "react";
import ChatMessage from "./ChatMessage";
import Chat from "./Chat";
import Loader from "./Loader"
import "../css/ChatView.css"


function ChatView() {
    
    // questa lista verrà richiesta quando clicco sul bottone Chat, quindi sarà memorizzata nel padre e passata al figlio.
    const ChatNames = ["#general","#classic","#metal","#Funky","#R&B","#Indie","#Soul","Banana","Casa"];
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setIsButtonClicked(false);
    }, []);
    
    
    const handleMessageChange = (newMessage) => {
        setMessage(newMessage);
    };


    // crea il chatMessage Dinamicamente quando clicco su una chat
    const handleClick = (index) => { //ascolto sulla chiat cliccata e retropropago l'indice dell'array Chats
        if(index === -1){
            setIsButtonClicked(false);
            $(".search").fadeIn(400);
            $("#Chats").fadeIn(400);
        }
        else
            setIsButtonClicked(true);
    };


    return (
        <div className="ChatView" id="ChatView">
            <div id="Chats">
                {ChatNames.map((name,i) => (
                    <Chat key={i} index={i} name={name} handleClick={handleClick} handleMessageChange={handleMessageChange} />
                ))}
            </div>
                {isButtonClicked && <ChatMessage message={message} handleClick={handleClick}/>}
            <Loader></Loader>
        </div>
    );
}

export default ChatView;