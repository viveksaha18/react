import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Registration from './users/Registration';
import  Login  from './users/Login';
import Forget from './users/Forget';
import Reset from './users/Reset';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<Forget />} />
        <Route path="/reset-password" element={<Reset />} />
      </Routes>
    </div>
  );
}

export default App;
