import React, { useEffect } from "react";
import "./checkout.css";
import BGImage from "../../images/checkout page images/BGImage.png";
import accountWhiteImage from "../../images/checkout page images/UsersWhite.png";
import locationWhiteImage from "../../images/checkout page images/LocationWhite.png";
import paymentWhiteImage from "../../images/checkout page images/PaymentWhite.png";

import accountBlackImage from "../../images/checkout page images/UsersBlack.png";
import locationBlackImage from "../../images/checkout page images/LocationBlack.png";
import paymentBlacksImage from "../../images/checkout page images/PaymentBlack.png";

import checkoutImage from "../../images/checkout page images/10219 2.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import { useTheme } from "../../contexts/ThemeContext";
// import Header from "../../components/Header";
export default function Checkout() {
  const body = document.querySelector("body");
  // const { isDarkTheme } = useTheme();

  // useEffect(() => {
  //   if (isDarkTheme) {
  //     body.classList.add("dark-mode");
  //     body.classList.remove("white-mode");
  //   } else {
  //     body.classList.add("white-mode");
  //     body.classList.remove("dark-mode");
  //   }
  // }, [isDarkTheme, body.classList]);
  return (
    <>
      {/* <Header isDarkTheme={isDarkTheme} /> */}
      <Navbar />
     <div className="checkout">
      <h1>Kasse</h1>
     <div className="checkout-page-container">
       
       <div className="checkout-details-left">
         <div className="detail-container">
           <h2>Account</h2>
           <p>
             To place your order now, log in to your existing account or sign
             up
           </p>
           <button className="acc-btn">
             Have an account?
             <span>
               <a href="#0">Login</a>
             </span>
           </button>
           <button className="acc-btn">
             New to Mania?
             <span>
               <a href="#0">Sign in</a>
             </span>
           </button>
           <img
             // src={isDarkTheme ? accountWhiteImage : accountBlackImage}
             src={accountWhiteImage}
             alt="user"
           />
         </div>
         <div className="detail-container">
           <h2>Delivery address</h2>
           <img
             // src={isDarkTheme ? locationWhiteImage : locationBlackImage}
             src={locationWhiteImage}
             alt="location"
           />
           <div className="box">
            <input type="text" placeholder="Strasse" className="large-input"/>
           </div>
           <div className="box">
            <input type="text" placeholder="Plz" />
            <input type="text" placeholder="Ort" />
           </div>
         </div>
         <div className="detail-container">
           <h2>Payment</h2>
           <img
             // src={isDarkTheme ? paymentWhiteImage : paymentBlacksImage}
             src={paymentWhiteImage}
             alt="payment"
           />
           <div className="box">
                   <input type="radio" name="check"/> <label>Twint</label>
           </div>
           <div className="box">
                   <input type="radio" name="check"/> <label>Barzahlund</label>
           </div>
         </div>
         <div className="detail-container outer">
         <h2>Coupon</h2>
         <img
             // src={isDarkTheme ? paymentWhiteImage : paymentBlacksImage}
             src={paymentWhiteImage}
             alt="payment"
           />
           <label>Add your coupon code  </label> <input type="text" placeholder ="XXXX-XXXX-XXXX"/>
         </div>
       </div>
       <div className="checkout-right">
         <header>
           <img src={checkoutImage} alt="pizza" />
           <div className="info">
             <h3>Wow ! Pizza</h3>
             <p>delivered to this location</p>
           </div>
         </header>
         <section className="cart-items-container">
           <p className="apply-ur-coupon">
             <span>Apply your coupon code</span> # xxxx xxxx
           </p>
         
      
         </section>
         <section className="bill-details">
           <h3>Bill Details</h3>
           <div className="bill-item">
             item Total <span>$180</span>
           </div>
           <div className="bill-item with-border">
             Delivery Partner Fee{" "}
             <span>
               $19.00 <span style={{ color: "#026F0D" }}>FREE</span>
             </span>
           </div>
           <div className="bill-item with-border">
             {" "}
             Coupon Discount <span style={{ color: "#026F0D" }}>-$20</span>
           </div>
           <div className="bill-item with-black-border">
             Taxes And Charges <span style={{ color: "black" }}>$2.00</span>
           </div>
           <div className="bill-item">
             {" "}
             To Pay <span>$182</span>
           </div>
         </section>
       </div>
       <img className="bg-image" src={BGImage} alt="background" />
     </div>
     </div>
     <Footer/>
    </>
  );
}
