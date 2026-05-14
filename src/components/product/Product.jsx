import { useDispatch } from "react-redux";
import "./Product.css";
import { addItem, removeItem } from "../../redux/slice";

function Product() {
    const dispatch=useDispatch();
  return (
    <div className="product-card">

      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        alt="product"
      />

      <h2>Nike Shoes</h2>

      <p className="price">$120</p>

      <p className="description">
        Comfortable and stylish running shoes perfect for daily wear
        and sports activities with comfort.
      </p>

      <button onClick={()=>dispatch(addItem(1))}>
        Add To Cart
      </button>
      <button onClick={()=>dispatch(removeItem(1))}>
        Remove from Cart
      </button>
    </div>
  );
}

export default Product;