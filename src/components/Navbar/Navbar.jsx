import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../images/footer/logo.png";
import { Link } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import { useCart } from "../../context/CartCtx";

const Navbar = () => {
  const [Menu, setMenu] = useState("home");
  
  const [isActive, setIsActive] = useState(false);
  const [isChange, setIsChange] = useState(true);
  const [showCart, setShowCart] = useState(false);

  const { cart } = useCart();

  const handleShowCart = () => {
    setShowCart(true);
    document.body.style.overflow = "hidden"; // Disable page scroll
  };
  const handleCloseCart = () => {
    setShowCart(false);
    document.body.style.overflow = ""; // Enable page scroll
  };
  const handleClick = () => {
    setIsActive(!isActive); // Toggle the isActive state
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY < 700) {
      setIsChange(true);
      setMenu("Home");
    } else {
      setIsChange(false);
      setMenu("");
    }
  });


  return (
    <>
      <div className={isChange ? "navbar" : "navbar navbar-change"}>
        <img src={Logo} alt="logo" />
        <nav>
          <ul className={isActive ? "active" : ""}>
            <li>
              <Link
                to="/"
                onClick={() => setMenu("home")}
                className={Menu == "home" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                onClick={() => setMenu("menu")}
                className={Menu == "menu"&& "active"}
              >
                menu
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => setMenu("Reservation")}
                className={Menu == "Reservation" ? "active" : ""}
              >
                Reservation
              </Link>
            </li>
            <li>
              <a
                onClick={() => setMenu("Angebote")}
                className={Menu == "Angebote" ? "active" : ""}
              >
                Angebote & Gustscheine{" "}
              </a>
            </li>
            <li>
              <Link to="/contact" className="btn">
                Kontakt
              </Link>
            </li>
          
            <li>
              <i
                onClick={handleShowCart}
                className="fa-solid fa-cart-shopping car"
              >
                <span className="length">
                  {cart.length > 0 ? cart.length : "0"}
                </span>
              </i>
            </li>
          </ul>
        </nav>
        <div
          onClick={() => {
            handleClick();
          }}
          className="fas fa-bars"
          id="bars"
        ></div>
      </div>

      {showCart && (
        <Cart showCart={showCart} handleCloseCart={handleCloseCart} />
      )}
    </>
  );
};

export default Navbar;
