import {useState} from "react";
const imageLente = "/src/img/Lente.png";
import "../css/Search.css"


function Search({onClick}) {

  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  function propagateEvent(event){
    if (event.key !== "Enter") {return;}
    onClick(searchQuery);
  }

  return (
      <div className="search">
          <img className="Lente" src={imageLente} alt="Immagine" />
        <input
          onChange={handleChange}
          value={searchQuery}
          onKeyDown={(event) => {propagateEvent(event)}}
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
