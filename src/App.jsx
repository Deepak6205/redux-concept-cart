
import Navbar from './components/navbar/Navbar'
import Product from './components/product/Product'
import './App.css'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartList from './components/cartlist/CartList'
const App = () => {
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<CartList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App