const ImgChat = "/src/img/chat-icon.png"

function Chat({index, name, handleClick, handleMessageChange }){


    function chatClicked(){
        $(".search").fadeOut(400);
        $("#Chats").fadeOut(400, function(){$("#ChatMessage").fadeIn(500);});
        handleMessageChange(name); 
        handleClick(index);
    }

    return(
        // spostato click così si clicca solo sull'immagine o il campo p... 
        <div className="Chat" id="Chat">
            <p  onClick={() => {chatClicked()}}>{name} </p>
            <img src={ImgChat} onClick={() => {chatClicked()}}></img>
        </div>
    );
}

export default Chat;