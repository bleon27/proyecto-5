import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider } from "./context/userContext";
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Home from './components/pages/Home';
import Profile from './components/pages/profile/Profile';
import Products from './components/pages/product/Products';
import ProductInfo from './components/pages/product/ProductInfo';
import Checkout from './components/pages/cart/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route >
      <Route path="/registro" element={<Register />}></Route>
      <Route path="/perfil" element={<Profile />}></Route>
      <Route path="/productos/tipo/:tipo" element={<Products />}></Route>
      <Route path="/producto/:id" element={<ProductInfo />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes >
  );
}

export default App;
