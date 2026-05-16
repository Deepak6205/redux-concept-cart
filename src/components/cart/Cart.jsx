import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);
  return (
    <div className="cart">
      <Link to="/cart">
        <FaShoppingCart style={{color:"white"}}/>
        <span className="cart-count">
          {cartSelector.length ? cartSelector.length : "0"}
        </span>
      </Link>
    </div>
  );
};

export default Cart;
