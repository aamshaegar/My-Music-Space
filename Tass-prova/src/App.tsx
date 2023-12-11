import "./App.css";
import User from "./components/User";
import Menu from "./components/Menu";
import View from "./components/View";
import Search from "./components/Search";

function App() {
  document.body.style = "background: #232526; position:relative";
  return (
    <div>
      <Search />
      <User />
      <Menu />
      <View />
    </div>
  );
}

export default App;
