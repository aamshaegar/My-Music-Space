const imageUrl = "/src/img/user.jpg";

function User() {
  return (
    <div className={"UserDiv"}>
      <div className={"imgContainer"}>
        <img className="immagini" src={imageUrl} alt="Immagine" />
      </div>
    </div>
  );
}
export default User;
