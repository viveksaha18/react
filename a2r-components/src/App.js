import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Registration from './users/Registration';
import  Login  from './users/Login';
import Forget from './users/Forget';
import Reset from './users/Reset';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Service from './pages/Service';
import Product from './pages/Product';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<Forget />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
