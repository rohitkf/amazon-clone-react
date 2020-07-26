import React from "react";
import Logo from "../assets/images/amazon_logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import {auth} from '../FirebaseConfig/firebase'

function Header() {

  const [{basket,user}, dispatch] = useStateValue();


  const login=()=>{
    if(user){auth.signOut()}
  }
  
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="logo"></img>
      </Link>
      
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

    <div className="header__nav">
         <Link className="header__link" to={!user&&"/login"}>
             <div onClick={login} className="header__option">
             <span className="header__optionLineOne">Hello {user?.email}</span>
             <span  className="header__optionLineTwo">{user ? 'Logout' : 'Sign In'}</span>
             </div>
         </Link>
         <Link className="header__link">
             <div className="header__option">
             <span className="header__optionLineOne">Returns</span>
             <span className="header__optionLineTwo">& Orders</span>
             </div>
         </Link>
         <Link className="header__link">
             <div className="header__option">
             <span className="header__optionLineOne">Your</span>
             <span className="header__optionLineTwo">prime</span>
             </div>
         </Link>
         <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
            <ShoppingBasketIcon/>
                <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
            </div>
         </Link>
    </div>






    </div>
  );
}

export default Header;
