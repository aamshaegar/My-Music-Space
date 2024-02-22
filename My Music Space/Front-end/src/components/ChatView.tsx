import {useState} from "react";
import ChatMessage from "./ChatMessage";

const ImgChat = "/src/img/chat-icon.png"

function Chat({name, handleMessageChange }){
        function selected(name){
            document.getElementById("Chats")!.style.opacity = "0";
            document.getElementById("Chats")!.style.display = "none";
            document.getElementById("ChatMessage")!.style.display = "block";
            document.getElementById("ChatMessage")!.style.transition = "opacity 1s";
            setTimeout(function() {
                document.getElementById("ChatMessage")!.style.opacity = "1";}, 50);
            const message = { name: name };
            handleMessageChange(message.name);
            $(".search").hide(0);
            $("#ChatMessage").show(0);
        }
    return(
        <div className="Chat" id="Chat"  onClick={() => selected(name)}>
            <img src={ImgChat}></img>
            <p>{name}</p>
        </div>
    );
}


const ChatNames = ["#Pop","#Classic","#Metal","#Funky","#R&B","#Indie","#Soul","Banana","Casa"];

function ChatView() {
    const [message, setMessage] = useState("");

    const handleMessageChange = (newMessage) => {
        setMessage(newMessage);
    };
    return (
        <div className="ChatView" id="ChatView">
            <div id="Chats">
            {ChatNames.map(name => (
                <Chat key={name} name={name} handleMessageChange={handleMessageChange} />
            ))}
            </div>
            <ChatMessage message={message} />
        </div>
    );
}
export default ChatView;