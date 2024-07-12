import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import './Navbar.css'
import { useContext, useState } from "react";
import { StoreContext } from "../../Context/CreateContext";
const Navbar = () => {
  const[menu,setMenu]=useState(null)
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <>
      <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="tomato" className="logo" />
      </Link>
        <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"? "active" :""}>Home</Link>
        <a href="#menubar" onClick={()=>setMenu("menu")} className={menu==="menu"? "active" :""}>Menu</a>
        <a href="#mobileApp" onClick={()=>setMenu("app")} className={menu==="app"? "active" :""}>Mobile-App</a>
        <a href="#footer" onClick={()=>setMenu("contact")} className={menu==="contact"? "active" :""}>Contact-Us</a>
        </ul>
       
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search"  />
            <div className="navbar-serach-icon">
            <Link to='/cart'>
            <img src={assets.basket_icon} alt="basket" />
          </Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
          
<Link className="signup" to='/signup'>SignUp</Link>      
  </div>
      </div>
    </>
  );
};

export default Navbar;
