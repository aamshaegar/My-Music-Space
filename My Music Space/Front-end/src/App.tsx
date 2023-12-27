import "./App.css";
import User from "./components/User";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import HomeView from "./components/HomeView";
import ChatView from "./components/ChatView";
import ShopView from "./components/ShopView";
import MusicView from "./components/MusicView"
import UserView from "./components/UserView"
import Search from "./components/Search";
import CartView from "./components/CartView";

function App() {
  const name = "Aldo";
  const surname ="Rambaudo";
  const email ="rambaudo.aldo@gmail.com"
  const plane ="Premium"
  const productname="Cappello PTN"
  const type ="Abbigliamento"
  const price ="30€"
  const vendor ="PTN"
  const date=""

  return (
    <div id="All">
      <div className="Search-User">
        <UserView name={name} surname={surname} email={email} plane={plane} ></UserView>
        <User name={name} />
        <Search />
        <Cart />
        <CartView productname={productname} type={type} price={price} vendor={vendor} date={date}></CartView>
      </div>

      <div className="Menu+View">
        <Menu />
          <div className="View" id="View">
            <HomeView></HomeView>
            <ChatView></ChatView>
            <ShopView></ShopView>
            <MusicView></MusicView>
          </div>
      </div>
    </div>
  );
}

export default App;
