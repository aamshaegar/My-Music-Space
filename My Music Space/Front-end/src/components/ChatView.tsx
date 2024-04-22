import {useState} from "react";
import {useEffect} from "react";
import ChatMessage from "./ChatMessage";
import Chat from "./Chat";
import Loader from "./Loader"
import "../css/ChatView.css"


function ChatView({registeredChatRooms, focus, query, subscribe, leave}) {
    
    // questa lista verrà richiesta quando clicco sul bottone Chat, quindi sarà memorizzata nel padre e passata al figlio.
    const [ChatNames, setChatNames] = useState([]);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [message, setMessage] = useState("");
    const [state, setState] = useState(false);


    useEffect(() => {
        setIsButtonClicked(false);
    }, []);

    useEffect(() => {
        if(focus == "chatButton"){
            $("#loaderBar").fadeIn(0);
            if(query && query != ""){retrieveChatRoomsByQuery(query);
            }else{retrieveChatRoomsByQuery(null);}
            $("#loaderBar").fadeOut(200);
        }
    },[focus, query]);
    
    
    const handleMessageChange = (newMessage) => {
        setMessage(newMessage);
        setState(false)
        for(let chat in registeredChatRooms){
            if (registeredChatRooms[chat] == newMessage){
                setState(true)
            }
        }
        
    };


    // crea il chatMessage Dinamicamente quando clicco su una chat
    const handleClick = (index) => { //ascolto sulla chiat cliccata e retropropago l'indice dell'array Chats
        if(index === -1){
            setIsButtonClicked(false);
            $(".search").fadeIn(400);
            $("#chats").fadeIn(400);
        }
        else{
            setIsButtonClicked(true);
        }
    };

    function retrieveChatRoomsByQuery(query){
        
        $.ajax({
            type:"GET",
            url: "/chatrooms",
            data:{name:query},
            contentType: "application/json",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
            }

        }).then(function(data) {
            const chatRoomNames = []
            for(const el in data) chatRoomNames.push(data[el]["name"])
            setChatNames(chatRoomNames);
            //console.log("Collecions retrieved!")

        });
    }


    // ANIMAZIONE CARICAMENTO <Loader></Loader>
    return (
        <div className="ChatView" id="ChatView">
            <div id="chats">
                {ChatNames.map((name,i) => (
                    <Chat key={i} index={i} name={name} handleClick={handleClick} handleMessageChange={handleMessageChange} />
                ))}
            </div>
                {isButtonClicked && <ChatMessage active={state} message={message} handleClick={handleClick} subscribe={subscribe} leave={leave} />}
                
        </div>
    );
}

export default ChatView;