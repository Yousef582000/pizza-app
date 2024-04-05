import "./App.css";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/menu/Menu";
import Checkout from "./Pages/checkout/Checkout";
import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "./Pages/Kontact/Contact";
import { ThemeProvider } from "./context/index";
import Cart from "./components/Cart/Cart";

function App() {

  return (
  <ThemeProvider>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/menu/" element={<Navigate to="/menu/1?sub-cat=1" />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
 
    </div>
  </ThemeProvider>
  );
}

export default App;
