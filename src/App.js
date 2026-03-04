import "./App.css";
import Navbar from "../src/components/Navbar"
import MainPage from "../src/components/MainPage";
import Collections from "./components/PremiumCollections";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

const App = () => {
  return (
  <>
  < Navbar/>
  <MainPage/>
  <Collections/>
  <Contact/>
  <Footer/>
    </>
  );
};

export default App;