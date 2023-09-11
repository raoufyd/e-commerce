import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { grey } from "@material-ui/core/colors";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
          alt=""
        />
      </Link>

      {/* SearchBox */}
      <div className="header__search">
        <input type="text" className="header__SearchBox" />
        <SearchIcon className="header__SearchIcon" />
      </div>
      {/* Links */}
      <div className="header__nav">
        {/* 1link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionsecondary">
              Hello, {user?.email}
            </span>

            <span>{user ? "Sign out" : "Sign in"}</span>
          </div>
        </Link>
        {/* 2link */}
        <Link to="/check" className="header__link">
          <div className="header__option">
            <span className="header__optionsecondary">returns </span>
            <span>& orders</span>
          </div>
        </Link>
        {/* 3link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionsecondary">Your</span>
            <span>Prime</span>
          </div>
        </Link>
        {/* basket link */}
        <Link to="/check" className="header__link">
          <div className="header__optionbasket">
            {/* shopping Basket Icon  */}
            <ShoppingBasketIcon style={{ color: grey[50] }} />
            {/* Number of items in the basket  */}
            <span className="header__optionbaskettext"> {basket.length}</span>
          </div>
        </Link>
      </div>
      {/* panier */}
    </nav>
  );
}

export default Header;
