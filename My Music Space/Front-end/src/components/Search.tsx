const imageLente = "/src/img/Lente.png";
import "../css/Search.css"

function Search() {
  return (
      <div className="search">
          <img className="Lente" src={imageLente} alt="Immagine" />
        <input
          type="text"
          className="searchTerm"
          placeholder="Cosa stai cercando?"
        />
          <i className="fa fa-search"></i>
          <button className="back" id="back" >&lt;</button>
      </div>
  );
}
export default Search;
