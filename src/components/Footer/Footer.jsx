import React from "react";
import "./footer.css";
import logo from "../../images/footer/logo.png";
import faceIcon from "../../images/footer/facebook.png";
import XIcon from "../../images/footer/twitter 1.png";
import instagramIcon from "../../images/footer/instagram.png";
import image2 from "../../images/detailed menu page images/margertia-pizza-150x150-removebg-preview 2.png";
import image3 from "../../images/categories/snacks.png";
import image1 from "../../images/categories/pizza.png";
import image4 from "../..//images/categories/kebab.png"
import MapLocation from "../../components/Map/Map"
import { useTheme } from "../../context";
import { Link } from "react-router-dom";
const Footer = () => {
  const { darkMode } = useTheme();
  return (
  <>
  
  
  <MapLocation darkMode={darkMode}/>
  <footer>
     
     <div className="footer">
    <div className="images">
      <img src={logo} alt="" className="logo" />
      <div className="line"></div>
     <div className="list">
     <img src={image2}  alt="" />
      <img src={image3}  alt="" />
      <img src={image1}  alt="" />
      <img src={image4}  alt="" />
      <div className="line2"></div>
     </div>
    </div>
    <div className="menu">
      <div className="about1">
        <h3>About Us</h3>
        <p>
        Willkommen beiWangen Pizza und Kebab Kurier! Geniessen Sie unsere
        köstlichen Speisen mit nur 4 einfachen Schritten. Ihre Bestellungen
        werden mit höchster Priorität bearbeitet und direkt durch unseren
        zuverlässigen Lieferdienst zu Ihnen gebracht. Erleben Sie
        unkomplizierten Genuss, ohne das Haus zu verlassen. Bestellen Sie jetzt
        und freuen Sie sich auf eine prompte Zustellung Ihrer Lieblingsspeisen!
        </p>
        <div className="social-icons">
          <img src={faceIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={XIcon} alt="" />
        </div>
      </div>
      <div className="menuLink">
        <Link to="/menu"><h3>Menu</h3></Link>
        
    </div>
    <div className=" Öffnungszeiten">
        <h3> Öffnungszeiten</h3>
        <p>Mo-Do: <span className="space"></span> 11.00 - 22.00 <span>Uhr</span> </p>
        <p>Fr-Sa: <span className="space"></span> 11.00 - 23.00 <span>Uhr</span> </p>
        <p>So: <span className="space"></span> 11.00 - 22.00 <span>Uhr</span> </p>

    </div>
    <div className="Liferzeiten">
        <h3>Liferzeiten</h3>
        <p>Mo-Do: <span className="space"></span> 11.00 - 22.00 <span>Uhr</span> </p>
        <p>Fr-Sa: <span className="space"></span> 11.00 - 23.00 <span>Uhr</span> </p>
        <p>So: <span className="space"></span> 11.00 - 22.00 <span>Uhr</span> </p>
    </div>



     
   
    </div>
    </div>
    <p className="copyRight">@2024, Wangen Pizza kebab kurier, Developedbby Lightsoft</p>
   </footer>
  </>
  );
};

export default Footer;
