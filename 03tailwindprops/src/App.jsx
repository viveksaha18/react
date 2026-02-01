import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";
function App() {
  let obj = {
    username: "vivek",
    age: 22,
  }
  return (
    <>
      <Card channel='vivek' myObj={obj}/>
      <Card />
      <Card />
    </>
  );
}

export default App;
