import "./App.css";
import User from "./components/User";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import HomeView from "./components/HomeView";
import Search from "./components/Search";

function App() {
  const utente = "Aldo";

  return (
    <div id="All">
      <div className="Search-User">
        <User name={utente} />
        <Search />
        <Cart />
      </div>

      <div className="Menu+View">
        <Menu />
        <HomeView> </HomeView>
      </div>
    </div>
  );
}

export default App;
