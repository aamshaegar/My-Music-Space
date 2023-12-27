const imageUrl = "/src/img/user.jpg";

interface Props{
    name: string;
}

function User({name}:Props) {
  return (
    <div className={"UserDiv"}>
      <div className={"imgContainer"}>
        <img className="immagini" src={imageUrl} alt="Immagine" />
      </div>
        <p>Benvenuto, {name}</p>
    </div>
  );
}
export default User;
