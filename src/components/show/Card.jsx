import React from "react";
import "./card.css";
import Image from "../../images/landing page images/third section images/cardImage.png"
import { useTheme } from '../../context/index'
const Card = () => {
  const { darkMode } = useTheme();
  return (
   <div className={darkMode?"dark-cart-parent":""}>
     <div className={darkMode?"card dark-mode":"card"}>
      <div className="text">
        <h1 className="Title">
          make Your First Order <br />
          and Get <span>50% Off</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          libero vel, nihil impedit aliquam harum sed veritatis sit odio animi.
          reiciendis facilis in omnis voluptates voluptatem!
        </p>
        <button>Order Now</button>
      </div>
      <img src={Image} alt="" />
    </div>
   </div>
  );
};

export default Card;
