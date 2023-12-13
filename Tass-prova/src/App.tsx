import "./App.css";
import User from "./components/User";
import Menu from "./components/Menu";
import View from "./components/View";
import Search from "./components/Search";

function App() {

  const utente = "Aldo"

  return (
    <div id="All">
        <div className="Search-User">
          <User name={utente}/>
            <Search />
        </div>

        <div className="Menu+View">
          <Menu />
          <View > </View>
        </div>

    </div>
  );
}

export default App;
