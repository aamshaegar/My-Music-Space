import {useState} from "react";
import {useEffect} from "react";
import ChatMessage from "./ChatMessage";
import Chat from "./Chat";
import "../css/ChatView.css"
import "../css/MyChatView.css"


function MyChatView({focus, query}) {

    // questa lista verrà richiesta quando clicco sul bottone Chat, quindi sarà memorizzata nel padre e passata al figlio.
    const [ChatNames, setChatNames] = useState([]);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setIsButtonClicked(false);
    }, []);

    useEffect(() => {
        if(focus == "MyChatButton"){
            if(query && query != ""){retrieveChatRoomsByQuery(query);
            }else{retrieveChatRooms();}
        }
    },[focus, query]);


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

    function retrieveChatRoomsByQuery(query){
        $.ajax({
            type:"GET",
            url: "/chat/messages/collections",
            data:{room:query},
            contentType: "application/json",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
            }

        }).then(function(data) {
            setChatNames(data);
            //console.log("Collecions retrieved!")
        });
    }


    function retrieveChatRooms(){
        $.ajax({
            type:"GET",
            url: "/chat/messages/collections/all",
            contentType: "application/json",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
            }

        }).then(function(data) {
            setChatNames(data);
        });
    }

    // ANIMAZIONE CARICAMENTO <Loader></Loader>
    return (
        <div className="MyChatView" id="MyChatView">
            <div id="Chats">
                {ChatNames.map((name,i) => (
                    <Chat key={i} index={i} name={name} handleClick={handleClick} handleMessageChange={handleMessageChange} />
                ))}
            </div>
                {isButtonClicked && <ChatMessage message={message} handleClick={handleClick}/>}
        </div>
    );
    }
    export default MyChatView;