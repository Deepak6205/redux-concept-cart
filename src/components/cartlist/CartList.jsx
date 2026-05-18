import { useDispatch, useSelector } from "react-redux";
import "./CartList.css";
import { clearCart, removeItem } from "../../redux/slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(cartSelector);
  useEffect(()=>{
    setCartItems(cartSelector)
  },[cartSelector])
  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) ? parseInt(q) : 1;
    const tempCartItems = cartItems.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });
    setCartItems(tempCartItems);
  };
  const handlePlaceOrder = () =>{
    localStorage.clear();
    dispatch(clearCart());
    navigate('/');
    alert('order placed successfully');
  }
  return (
    <div className="cart-container">
      <div
        className="cart-header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2>Your Cart Items</h2>
        <h3>Total Items: {cartItems.length}</h3>
      </div>

      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="cart-card" key={item.id}>
            <div className="cart-image">
              <img src={item.thumbnail} alt={item.title} />
            </div>

            <div className="cart-details">
              <h3>{item.title}</h3>
              <p>{item.description.slice(0, 80)}...</p>

              <div className="cart-price">
                <span>
                  $
                  {(item.quantity
                    ? item.quantity * item.price
                    : item.price
                  ).toFixed(2)}
                </span>

                <div className="cart-actions">
                  <input
                    type="number"
                    value={item.quantity ? item.quantity : 1}
                    onChange={(e) => manageQuantity(item.id, e.target.value)}
                  />
                  <button onClick={()=>dispatch(removeItem(item))}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className="empty-cart">Cart is Empty</h1>
      )}
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <h3>
          Total: $
          {cartItems
            .reduce(
              (sum, item) =>
                item.quantity
                  ? sum + item.price * item.quantity
                  : sum + item.price,
              0,
            )
            .toFixed(2)}
        </h3>
      </div>
      <button onClick={()=>handlePlaceOrder()}>place order</button>
    </div>
  );
};

export default CartList;
