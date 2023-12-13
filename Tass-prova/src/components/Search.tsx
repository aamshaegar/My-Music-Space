const imageLente = "/src/img/Lente.png";

function Search() {
  return (
      <div className="search">
          <img className="Lente" src={imageLente} alt="Immagine" />
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
          <i className="fa fa-search"></i>
      </div>
  );
}
export default Search;
