import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
function App() {
  const [cart] = useState(2); // sample cart count

  return (
    <>
      <Navbar cartCount={cart} />
      <MainPage />
    </>
  );
}

export default App;