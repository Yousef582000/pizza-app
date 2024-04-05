import React from "react";
import "./Newsection.css";
import Image1 from "../../images/landing page images/New folder/Pizza-Wangen-Parkplatz-1-1024x768 1.png";
import Image2 from "../../images/landing page images/New folder/Pizza-Wangen-Parkplatz-2-1024x768 1.png";
import Image3 from "../../images/landing page images/New folder/Pizza-Wangen-Parkplatz-3-1024x768 1.png";
import { useTheme } from '../../context'
const Newsection = () => {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode?"new-section dark-bg":"new-section"}>
      <h1>
        Gratis <span> Parkplätze</span>
      </h1>
      <div className="image">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
      </div>
      <h2>Mehr informationen überWangen</h2>
      <p>
        
      </p>
    </div>
  );
};

export default Newsection;
