import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { addItem, removeItem } from "../../redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/productSlice";

function Product() {
  const dispatch = useDispatch();
  const cartSelector = useSelector((state)=>state.cart.items);
      console.log(cartSelector)
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  
  const products = useSelector((state) => state.products.items);


  const status = useSelector((state) => state.products.status);


  const error = useSelector((state) => state.products.error);

 
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }


  if (status === "failed") {
    return <h1>{error}</h1>;
  }

  return (
    <div className="products-container">
      {products.length &&  products.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />

            <h2>{product.title}</h2>

            <p className="price">${product.price}</p>

            <p className="description">{product.description.substring(0,40)}...</p>

            {cartSelector.find((cartItem) => cartItem.id == product.id)?<button className="dsbl-btn" onClick={()=>dispatch(removeItem(product))}>
              remove from Cart
            </button> :
            <button onClick={() => dispatch(addItem(product))}>
              Add To Cart
            </button>}
          </div>
        );
      })}
    </div>
  );
}

export default Product;
