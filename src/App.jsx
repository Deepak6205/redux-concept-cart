
import Navbar from './components/navbar/Navbar'
import Product from './components/product/Product'
import './App.css'
import { useDispatch } from 'react-redux'
import { clearCart } from './redux/slice'
const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      
      <Navbar/>
      <button style={{marginTop:"20px"}} onClick={()=>dispatch(clearCart())}>
              clear cart
          </button>
      <Product/>
    </div>
  )
}

export default App