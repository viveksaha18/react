import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Home from "./components/Home";
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Heading" element={<Heading />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

    //       <ul class="navbar-nav">
    //         <li class="nav-item">
    //           <a class="nav-link active" href="#">Home</a>
    //           <a class="nav-link active" href="#">About</a>
    //           <a class="nav-link active" href="#">Contact</a>
    //           <a class="nav-link active" href="#">Login</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
      
    //   <Heading />
    // </>

    
    

