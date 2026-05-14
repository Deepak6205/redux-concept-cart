import Cart from "../cart/Cart";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        ShopCart
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    <Cart/>
      

    </nav>
  );
}

export default Navbar;