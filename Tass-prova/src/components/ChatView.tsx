const ImgChat = "/src/img/chat-icon.png"

function Chat(){
    return(
        <div className="Chat">
            <img src={ImgChat}></img>
            <p>#Pop</p>
        </div>
    );
}




function ChatView() {
    return (
        <div className="ChatView">
            <div className="ChatRow">
                <Chat></Chat>
                <Chat></Chat>
                <Chat></Chat>
            </div>
            <div className="ChatRow">
                <Chat></Chat>
                <Chat></Chat>
                <Chat></Chat>
            </div>
            <div className="ChatRow">
                <Chat></Chat>
                <Chat></Chat>
                <Chat></Chat>
            </div>
        </div>
    );
}
export default ChatView;