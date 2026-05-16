import { useDispatch, useSelector } from "react-redux";
import "./CartList.css";
import { removeItem } from "../../redux/slice";

const CartList = () => {
  const cartSelector = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
  return (
    <div className="cart-container">
      <div className="cart-header" style={{display:"flex", justifyContent:"space-between"}}>
        <h2>Your Cart Items</h2>
        <h3>Total Items: {cartSelector.length}</h3>
      </div>

      {cartSelector.length > 0 ? (
        cartSelector.map((item) => (
          <div className="cart-card" key={item.id}>
            <div className="cart-image">
              <img src={item.thumbnail} alt={item.title} />
            </div>

            <div className="cart-details">
              <h3>{item.title}</h3>
              <p>{item.description.slice(0, 80)}...</p>

              <div className="cart-price">
                <span>${item.price}</span>
                <button onClick={()=>dispatch(removeItem(item))}>Remove</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className="empty-cart">Cart is Empty</h1>
      )}
      <div style={{marginTop:"20px",textAlign:"right"}}>
        <h3>Total: ${cartSelector.reduce((sum,item)=>sum+item.price,0)}</h3>
      </div>
    </div>
  );
};

export default CartList;