const imageUrl = "/src/img/user.jpg";
import "../css/User.css"
interface Props{
    name: string;
}

function User({name}:Props) {
    function selected() {
        console.log("Sono qui");
        document.getElementById("UserView")!.style.display = "block";
        document.getElementById("UserView")!.style.transition = "opacity 1s";
        setTimeout(function() {
            document.getElementById("UserView")!.style.opacity = "1";
        }, 50);
    }
  return (
    <div className={"UserDiv"}>
      <div className={"imgContainer"}>
        <img className="immagini" src={imageUrl} alt="Immagine" onClick={() => selected()}/>
      </div>
        <p>Benvenuto, {name}</p>
    </div>
  );
}
export default User;
