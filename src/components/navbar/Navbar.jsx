import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        ShopCart
      </div>

      <ul className="nav-links">
        <Link to='/' style={{textDecoration:"none",color:'white'}}>Products</Link>
        <Link to='/about' style={{textDecoration:"none",color:'white'}}>About</Link>
        <Link to='/contact' style={{textDecoration:"none",color:'white'}}>Contact</Link>
      </ul>
      <Cart/>

    </nav>
  );
}

export default Navbar;