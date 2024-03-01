import "./App.css";
import Login from "./components/Login"
import User from "./components/User";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import ChatView from "./components/ChatView";
import ShopView from "./components/ShopView";
import MusicView from "./components/MusicView"
import UserView from "./components/UserView"
import Search from "./components/Search";
import CartView from "./components/CartView";

import {useState} from "react";

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

  const [searchQuery, setSearchQuery] = useState("");
  const [focus, setFocus] = useState("musicButton");

  function handleSearchBar(query){
    setSearchQuery(query);
  }

  function handleMenuButton(button){
    setFocus(button)
  }

  return (
      <div id="My Music Space">
        <Login></Login>
        <div id="All">
          <div className="Search-User">
            <UserView name={name} surname={surname} email={email} plane={plane} ></UserView>
            <User name={name} />
            <CartView productname={productname} type={type} price={price} vendor={vendor} date={date}></CartView>
            <Cart />
          </div>
          <div className="Menu+View">
            <Menu onClick={handleMenuButton}/>
            <div className="View" id="View">
              <Search onClick={handleSearchBar} />
              <ChatView focus={focus} query={searchQuery}></ChatView>
              <ShopView></ShopView>
              <MusicView></MusicView>
            </div>
          </div>
            <div className='air air1'></div>
            <div className='air air2'></div>
            <div className='air air3'></div>
            <div className='air air4'></div>
        </div>
      </div>
  );
}

export default App;
