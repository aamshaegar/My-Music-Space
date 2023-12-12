const imageLente = "/src/img/Lente.png";

function Search() {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <img className="Lente" src={imageLente} alt="Immagine" />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
export default Search;
