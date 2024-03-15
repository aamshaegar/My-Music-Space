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
import MyChatView from "./components/MyChatView";
import MyLikeView from "./components/MyLikeView";

function App() {
  const name = "Aldo";
  const surname ="Rambaudo";
  const email ="rambaudo.aldo@gmail.com"
  const plane ="Premium"

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
        <link rel="icon" type="image/x-icon" href="./img/Logo_My%20Music%20Space_round.png"></link>
        <Login></Login>
        <div className="liquidContainer" id="liquidContainer">

          <div className="blobs">
            <div className="liquid"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
            <defs>
              <filter id="goog">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo"/>
              </filter>
            </defs>
          </svg>
        </div>
        <div id="All">
          <div className="Search-User" id="Search-User">
            <User name={name} />
            <Search onClick={handleSearchBar} />
          </div>
          <div className="Menu+View">
            <Menu onClick={handleMenuButton}/>
            <div className="View" id="View">
              <MyLikeView></MyLikeView>
              <MyChatView></MyChatView>
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
