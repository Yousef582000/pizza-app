import React from 'react'
import "./pizza.css"
import PizzaImage from "../../images/landing page images/third section images/hands-taking-pizza 1.png"
// import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context'
const Pizza = () => {
  const { darkMode } = useTheme();
  return (
    <>
    
<section className={darkMode?"dark-mode-pizza  main-section third-section ":"main-section third-section"}>
          <h2>
            <span>Pizza </span> of the month
            <br />
            The Big <span>BIRD</span>
          </h2>
          <img className="pizza-image" src={PizzaImage} alt="image" />
          <div className="separator"></div>
          <ul>
            <li>Fleischpizza</li>
            <li>Pizza Margarita</li>
            <li>Pizza Hawaii</li>
            <li>Peperoni Pizza</li>
            <li>Gemüsepizza</li>
            <li>Käse-Pizza</li>
          </ul>
        <div>
        <button className="btn order-online-now-btn">
            Bestellen Sie jetzt online
          </button>
          <button className="btn see-our-menu-btn">
            <a to="/menu" className="see-our-menu-link">
              Siehe unsere Speisekarte.
            </a>
          </button>
        </div>
        </section>

    </>
  )
}

export default Pizza