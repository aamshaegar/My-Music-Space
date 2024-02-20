import {useState} from "react";
import ChatMessage from "./ChatMessage";

const ImgChat = "/src/img/chat-icon.png"

function Chat({name, handleMessageChange }){
        function selected(name){
            document.getElementById("ChatView")!.style.opacity = "0";
            document.getElementById("ChatView")!.style.display = "none";
            document.getElementById("ChatMessage")!.style.display = "block";
            document.getElementById("ChatMessage")!.style.transition = "opacity 1s";
            setTimeout(function() {
                document.getElementById("ChatMessage")!.style.opacity = "1";}, 50);
            const message = { name: name };
            handleMessageChange(message.name);
        }
    return(
        <div className="Chat" id={name} onClick={() => selected(name)}>
            <img src={ImgChat}></img>
            <p>{name}</p>
        </div>
    );
}


const ChatNames = ["#Pop","#Classic","#Metal","#Funky","#R&B","#Indie","#Soul","Banana","Casa"];

function ChatView() {
    const [message, setMessage] = useState("");
    const [chatMessageVisible, setChatMessageVisible] = useState(false);

    const handleMessageChange = (newMessage) => {
        setMessage(newMessage);
        setChatMessageVisible(true);
    };
    return (
        <div className="ChatView" id="ChatView">
            {ChatNames.map(name => (
                <Chat key={name} name={name} handleMessageChange={handleMessageChange} />
            ))}
            {chatMessageVisible && <ChatMessage message={message} />}
        </div>
    );
}
export default ChatView;